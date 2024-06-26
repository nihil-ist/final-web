import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase-service.service';
import { Reservation } from '../models/reservation.model';
import { Observable, map } from 'rxjs';
import { QRCodeModule } from 'angularx-qrcode';
import { data } from 'jquery';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [QRCodeModule, NavbarComponent],
  templateUrl: './qr-generator.component.html',
  styleUrl: './qr-generator.component.css'
})
export class QrGeneratorComponent implements OnInit {
  reservations?: Reservation[];
  
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
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

  generateQRCode(data: any): string {
    return JSON.stringify(data); 
  }
}
