import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Reservation } from '../models/reservation.model';
import { FirebaseService } from '../services/firebase-service.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ApartmentService2 } from '../services/apartment-service2.service';
import { Apartment } from '../models/apartment.model';
import { Router } from '@angular/router';
import { LoggedService } from '../services/logged.service';

@Component({
  selector: 'app-dbqueries',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './dbqueries.component.html',
  styleUrl: './dbqueries.component.css'
})
export class DbqueriesComponent implements OnInit{
  apartments?: Apartment[];
  
  constructor(private firebaseService: ApartmentService2, public router: Router, public logged: LoggedService) { }

  ngOnInit(): void {
      this.retrieveReservations();
      if (this.logged.getIsLogged() !== 'theapartmentbnb@gmail.com') {
        this.router.navigate(['/home']);
      }
  }

  
  retrieveReservations(): void {
    this.firebaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.apartments = data;
    });
  }

  parsePrice(price: number | undefined): number {
    if (!price) {
      return 0; // Valor predeterminado si price es undefined
    }
    return price;
  }

}
