import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { FormComponent } from '../form/form.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormComponent,FormsModule, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  reservation: Reservation = {
    arrivalDate: null,
    departureDate: null,
    arrivalTime: '13:00',
    name: '',
    phone: '',
    email: '',
    price: null,
    address: '',
    nights: 0
  };

  reservations: Reservation[] = [];

  pastReservations: Reservation[] = [];
  futureReservations: Reservation[] = [];

  // arrivalDate:string | null = null;
  // departureDate:string | null = null;

  imageUrl: string = 'assets/img/house.jpeg';

  reservationsExist(): boolean {
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) 
      return true;
    return false;
  }

  ngOnInit(){
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) {
      console.log("hay reservaciones")
      this.reservations = JSON.parse(storedReservations);
      this.splitReservations();
    } else {
      console.log("no hay reservaciones")
    }
    // this.arrivalDate = localStorage.getItem('selectedDate');
    // this.departureDate = localStorage.getItem('departureDate');
  }

  calculateNights(arrivalDate: Date, departureDate: Date): number {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const arrival = new Date(arrivalDate);
    const departure = new Date(departureDate);
    const nights = Math.round(Math.abs((arrival.getTime() - departure.getTime()) / oneDay));
    return nights;
  }

  splitReservations() {
    const currentDate = new Date();
    this.pastReservations = this.reservations.filter(reservation =>
      reservation.arrivalDate && new Date(reservation.arrivalDate) < currentDate
    );
    this.futureReservations = this.reservations.filter(reservation =>
      reservation.arrivalDate && new Date(reservation.arrivalDate) >= currentDate
    );
  }

  submitForm(){
    // console.log(this.from.value);
    //this.reservations.push(this.reservation);
    //localStorage.setItem('reservations', JSON.stringify(this.reservations));
  
    this.reservations.push(this.reservation);
    this.splitReservations(); // Update filtered reservations immediately
    localStorage.setItem('reservations', JSON.stringify(this.reservations));

    // Reset form after successful submission (optional)
    this.reservation = {
      arrivalDate: null,
      departureDate: null,
      arrivalTime: '13:00',
      name: '',
      phone: '',
      email: '',
      price: null,
      address: '',
      nights: 0
    };
  }

  saveDate(event: any) {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      alert("That date has passed already.");
      event.target.value = '';
    } else {
      const isDateAvailable = this.isDateAvailable(selectedDate);
      if (!isDateAvailable) {
        alert("This range of date is already reserved, choose another dates.");
        event.target.value = '';
      } else {
        this.reservation.arrivalDate = selectedDate;
      }
    }
  }

  saveDepartureDate(event: any) {
    const departureDate = new Date(event.target.value);
    const arrivalDate = this.reservation.arrivalDate;
    if (arrivalDate && departureDate <= arrivalDate) {
      alert("Departure date must be after arrival date");
      event.target.value = '';
    } else {
      this.reservation.departureDate = departureDate;
      if (arrivalDate) {
        this.reservation.nights = this.calculateNights(arrivalDate, departureDate);
      }
    }
  }

  isDateAvailable(selectedDate: Date): boolean {
    for (const reservation of this.reservations) {
      if (
        reservation.arrivalDate &&
        reservation.departureDate &&
        selectedDate >= reservation.arrivalDate &&
        selectedDate <= reservation.departureDate
      ) {
        return false;
      }
    }
    return true;
  }
  
}

interface Reservation {
  arrivalDate: Date | null;
  departureDate: Date | null;
  arrivalTime: '13:00';
  name: string;
  phone: string;
  email: string;
  price: number | null;
  address: string;
  nights: number;
}