import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { Apartment } from '../interfaces/apartment';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCard, MatCardModule} from '@angular/material/card'; 
import {MatDialog} from '@angular/material/dialog';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

export interface Tile {
  src: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatDialogModule, MatButtonModule, MatDatepickerModule, MatInputModule, MatGridListModule, SweetAlert2Module],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  dialog1boolean: boolean = true;

  
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 2, src: '/1.jpg'},
    {text: 'Two', cols: 1, rows: 1, src: '/2.jpg'},
    {text: 'Three', cols: 1, rows: 1, src: '/3.jpg'},
    {text: 'Four', cols: 1, rows: 1, src: '/4.jpg'},
    {text: 'Five', cols: 1, rows: 1, src: '/5.jpg'}
  ];



  reservations: Reservation[] = [];

  pastReservations: Reservation[] = [];
  futureReservations: Reservation[] = [];

  imageUrl: string = 'assets/img/house.jpeg';

  @Input() apartment!:Apartment;

  reservation: Reservation = {
    arrivalDate: null,
    departureDate: null,
    arrivalTime: '13:00',
    name: '',
    phone: '',
    email: '',
    price: '',
    address: '',
    nights: 0
  };
  dialog: any;
  ngOnInit(){
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) {
      this.reservations = JSON.parse(storedReservations);
      this.splitReservations();
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
    this.reservation.address = this.apartment.address;
    this.reservation.price = this.apartment.price;
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
      price: '',
      address: '',
      nights: 0
    };
  }

  saveDate(event: any) {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      this.showAlertpassed();
      event.target.value = '';
    } else {
      const isDateAvailable = this.isDateAvailable(selectedDate);
      if (!isDateAvailable) {
        this.showAlertalready();
        event.target.value = '';
      } else {
        this.reservation.arrivalDate = selectedDate;
      }
    }
  }
  showAlertgood() {
    Swal.fire({
      title: "Great!",
      text: 'Your reservation has been successfully completed.',
      icon: 'success' // You can use other icons like 'info', 'warning', 'error'
    });
  } 
  showAlertpassed() {
    Swal.fire({
      title: "We're sorry :(",
      text: 'That date has passed already.',
      icon: 'error' // You can use other icons like 'info', 'warning', 'error'
    });
  } 
   showAlertbefore() {
    Swal.fire({
      title: "We're sorry :(",
      text: 'The departure date must be after the arrival date.',
      icon: 'error' // You can use other icons like 'info', 'warning', 'error'
    });
  }
  showAlertalready() {
    Swal.fire({
      title: "We're sorry :(",
      text: 'This range of date is already reserved, choose another dates.',
      icon: 'error' // You can use other icons like 'info', 'warning', 'error'
    });
  }
  saveDepartureDate(event: any) {
    const departureDate = new Date(event.target.value);
    const arrivalDate = this.reservation.arrivalDate;
    if (arrivalDate && departureDate <= arrivalDate) {
      this.showAlertbefore();
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
    //  this.showAlertgood();

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
  price: string;
  address: string;
  nights: number;
}