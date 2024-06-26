import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase-service.service';
import { Reservation } from '../models/reservation.model';
import { Observable } from 'rxjs';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './qr-generator.component.html',
  styleUrl: './qr-generator.component.css'
})
export class QrGeneratorComponent implements OnInit {
  reservations$:  Observable<Reservation[]>;
  selectedReservation: Reservation | null = null;
  qrData: string = '';

  constructor(private firebaseService: FirebaseService) {
    this.reservations$ = this.firebaseService.getAll().valueChanges();
  }

  ngOnInit(): void {
  }

  generateQrCode(reservation: Reservation): void {
    this.selectedReservation = reservation;
    this.qrData = JSON.stringify(reservation);
  }
}
