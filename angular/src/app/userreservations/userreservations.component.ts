import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LoggedService } from '../services/logged.service';
import { FirebaseService } from '../services/firebase-service.service';
import { Reservation } from '../models/reservation.model';
import { map } from 'rxjs';
import { ReservationsDetailsComponent } from '../reservations-details/reservations-details.component';
import { Router } from '@angular/router';
import { QrGeneratorComponent } from '../qr-generator/qr-generator.component';

@Component({
  selector: 'app-userreservations',
  standalone: true,
  imports: [NavbarComponent, CommonModule, ReservationsDetailsComponent, QrGeneratorComponent],
  templateUrl: './userreservations.component.html',
  styleUrl: './userreservations.component.css'
})
export class UserreservationsComponent implements OnInit {

  reservations: Reservation[] = [];
  currentReservation?: Reservation;
  currentIndex = -1;
  title = '';
  
  constructor(public logged: LoggedService, public firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {
    if (this.logged.getIsLogged()=='') {
      this.router.navigate(['/home']);
    }
    this.retrieveReservations();
  }

  refreshList(): void {
    this.currentReservation = undefined;
    this.currentIndex = -1;
    this.retrieveReservations();
  }

  retrieveReservations(): void {
    this.firebaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.reservations = data;
    });
  }

  
  setActiveUser(user: Reservation, index: number): void {
    this.currentReservation = user;
    this.currentIndex = index;
  }

}
