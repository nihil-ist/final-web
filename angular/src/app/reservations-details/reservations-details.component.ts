import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../models/reservation.model';
import { FirebaseService } from '../services/firebase-service.service';
import { MatButtonModule } from '@angular/material/button';
import { LoggedService } from '../services/logged.service';

@Component({
  selector: 'app-reservations-details',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  templateUrl: './reservations-details.component.html',
  styleUrl: './reservations-details.component.css'
})
export class ReservationsDetailsComponent implements OnInit, OnChanges {
  @Input() reservation?: Reservation;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentReservation: Reservation = {
    name: '',
    email: '',
    phone: '',

  };
  message = '';

  constructor(private reservationService: FirebaseService, public logged: LoggedService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentReservation = { ...this.reservation };
  }

  updateUser(): void {
    const data = {
      name: this.currentReservation.name,
      email: this.currentReservation.email,
      phone: this.currentReservation.phone
    };

    if (this.currentReservation.key) {
      this.reservationService.update(this.currentReservation.key, data)
        .then(() => this.message = 'The reservation was updated successfully')
        .catch(err => console.log(err));
    }
  }

  deleteReservation(): void {
    if (this.currentReservation.key) {
      this.reservationService.delete(this.currentReservation.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The reservation was deleted successfully';
        })
        .catch(err => console.log(err));
    }
  }
}
