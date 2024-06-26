// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Input } from '@angular/core';
// import { Apartment } from '../interfaces/apartment';
// import { FirebaseService } from '../services/firebase-service.service';
// import {MatDialogActions,MatDialogClose,MatDialogContent,MatDialogModule,MatDialogTitle} from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatCard, MatCardModule } from '@angular/material/card';
// import { MatDialog } from '@angular/material/dialog';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import Swal from 'sweetalert2';
// import { Reservation } from '../models/reservation.model';
// import { map } from 'rxjs';
// import { LoggedService } from '../services/logged.service';
// import { MailService } from '../contact/mail.service';

// export interface Tile {
//   src: string;
//   cols: number;
//   rows: number;
//   text: string;
// }

// @Component({
//   selector: 'app-form',
//   standalone: true,
//   imports: [
//     FormsModule,
//     CommonModule,
//     MatFormFieldModule,
//     MatDialogModule,
//     MatButtonModule,
//     MatDatepickerModule,
//     MatInputModule,
//     MatGridListModule,
//     SweetAlert2Module,
//     ReactiveFormsModule
//   ],
//   templateUrl: './form.component.html',
//   styleUrl: './form.component.css',
//   providers : [MailService]
// })
// export class FormComponent {
//   dialog1boolean: boolean = true;
//   submitted = false;
//   result!: string;
//   @Input() apartment!: Apartment;

//   constructor(private firebase: FirebaseService,private logged:LoggedService, private mailService:MailService) { }

//   reservationForm = new FormGroup({
//     arrivalDate: new FormControl('', [Validators.required]),
//     departureDate: new FormControl('', [Validators.required]),
//     arrivalTime: new FormControl('', [Validators.required]),
//     name: new FormControl('', [Validators.required]),
//     phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
//     confirmation: new FormControl('', [Validators.required])
//   });

//   tiles: Tile[] = [
//     { text: 'One', cols: 2, rows: 2, src: '/1.jpg' },
//     { text: 'Two', cols: 1, rows: 1, src: '/2.jpg' },
//     { text: 'Three', cols: 1, rows: 1, src: '/3.jpg' },
//     { text: 'Four', cols: 1, rows: 1, src: '/4.jpg' },
//     { text: 'Five', cols: 1, rows: 1, src: '/5.jpg' },
//   ];

//   reservations: Reservation[] = [];

//   pastReservations: Reservation[] = [];
//   futureReservations: Reservation[] = [];

//   imageUrl: string = 'assets/img/house.jpeg';

//   reservation: Reservation = {
//     arrivalDate: null,
//     departureDate: null,
//     arrivalTime: '',
//     name: '',
//     phone: '',
//     email: '',
//     price: '',
//     address: '',
//     nights: 0,
//   };
//   dialog: any;
//   ngOnInit() {
//     this.retrieveReservations();
//     if (this.reservations) {
//       this.splitReservations();
//     }
//   }

//   calculateNights(arrivalDate: Date, departureDate: Date): number {
//     const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
//     const arrival = new Date(arrivalDate);
//     const departure = new Date(departureDate);
//     const nights = Math.round(
//       Math.abs((arrival.getTime() - departure.getTime()) / oneDay)
//     );
//     return nights;
//   }

//   splitReservations() {
//     const currentDate = new Date();
//     this.pastReservations = this.reservations.filter(
//       (reservation) =>
//         reservation.arrivalDate &&
//         new Date(reservation.arrivalDate) < currentDate
//     );
//     this.futureReservations = this.reservations.filter(
//       (reservation) =>
//         reservation.arrivalDate &&
//         new Date(reservation.arrivalDate) >= currentDate
//     );
//   }

//   submitForm() {
//     this.reservation.arrivalDate = this.reservationForm.value.arrivalDate;
//     this.reservation.departureDate = this.reservationForm.value.departureDate;
//     this.reservation.address = this.apartment.address;
//     this.reservation.price = this.apartment.price;
//     this.reservation.email = this.logged.getIsLogged();
//     this.reservations.push(this.reservation);
//     this.splitReservations(); // Update filtered reservations immediately

//     const data = {
//       arrivalDate:this.reservation.arrivalDate,
//       departureDate:this.reservation.departureDate,
//       arrivalTime:this.reservation.arrivalTime,
//       name:this.reservation.name,
//       phone:this.reservation.phone,
//       email:this.logged.getIsLogged(),
//       price:this.reservation.price,
//       address:this.reservation.address,
//       nights:this.reservation.nights
//     };
//     if(this.reservationForm.valid && this.roomAvailable(this.reservation.arrivalDate, this.reservation.departureDate)){
//       this.firebase.create(this.reservation).then(() => {
//       console.log('Created new user successfully!');
//       this.submitted = true;
//       this.showAlertgood(); // Display success alert

//       this.mailService.sendCita(data).subscribe(response => {
//       }, error => {
//         console.error('Error:', error);
//       });
//     });
//     } else {
//       this.result = "Make sure the user's data is correct";
//     }
//     this.reservation = {
//       arrivalDate: null,
//       departureDate: null,
//       arrivalTime: '13:00',
//       name: '',
//       phone: '',
//       email: '',
//       price: '',
//       address: '',
//       nights: 0,
//     };
    
//   }

//   retrieveReservations(): void {
//     this.firebase.getAll().snapshotChanges().pipe(
//       map(changes =>
//         changes.map(c =>
//           ({ key: c.payload.key, ...c.payload.val() })
//         )
//       )
//     ).subscribe(data => {
//       this.reservations = data;
//     });
//   }
  
  

//   saveDate(event: any) {
//     const selectedDate = new Date(event.target.value);
//     const currentDate = new Date();
//     if (selectedDate < currentDate) {
//       this.showAlertpassed();
//       event.target.value = '';
//     } else {
//       const isDateAvailable = this.isDateAvailable(selectedDate);
//       if (!isDateAvailable) {
//         this.showAlertalready();
//         event.target.value = '';
//       } else {
//         this.reservation.arrivalDate = selectedDate;
//       }
//     }
//   }

//   saveDepartureDate(event: any) {
//     const departureDate = new Date(event.target.value);
//     const arrivalDate = this.reservation.arrivalDate;
//     const currentDate = new Date();

//     if (arrivalDate && departureDate <= arrivalDate) {
//       this.showAlertbefore();
//       event.target.value = '';
//     } else if(departureDate < currentDate){
//       this.showAlertpassed();
//     } else{
//       this.reservation.departureDate = departureDate;
//       if (arrivalDate) {
//         this.reservation.nights = this.calculateNights(
//           arrivalDate,
//           departureDate
//         );
//       }
//     }
//   }

//   isDateAvailable(selectedDate: Date): boolean {
//     for (const reservation of this.reservations) {
//       if (
//         reservation.arrivalDate &&
//         reservation.departureDate &&
//         selectedDate >= reservation.arrivalDate &&
//         selectedDate <= reservation.departureDate
//       ) {
//         return false;
//       }
//     }
//     return true;
//   }

//   roomAvailable(arriveDate: Date, departureDate: Date): boolean {
//     let available = true;

//     this.reservations.forEach((reservation) => {
//       if(reservation.address !== this.apartment.address) return;

//       if ( (arriveDate >= reservation.arrivalDate && arriveDate <= reservation.departureDate) ||
//           (departureDate >= reservation.arrivalDate && departureDate <= reservation.departureDate) ){
//         available = false;
//       }
//     });

//     return available;
//   }

//   //  alerts

//   showAlertgood() {
//     Swal.fire({
//       title: 'Great!',
//       text: 'Your reservation has been successfully completed.',
//       icon: 'success', // You can use other icons like 'info', 'warning', 'error'
//     });
//   }
//   showAlertpassed() {
//     Swal.fire({
//       title: "We're sorry :(",
//       text: 'That date has passed already.',
//       icon: 'error', // You can use other icons like 'info', 'warning', 'error'
//     });
//   }
//   showAlertbefore() {
//     Swal.fire({
//       title: "We're sorry :(",
//       text: 'The departure date must be after the arrival date.',
//       icon: 'error', // You can use other icons like 'info', 'warning', 'error'
//     });
//   }
//   showAlertalready() {
//     Swal.fire({
//       title: "We're sorry :(",
//       text: 'This range of date is already reserved, choose another dates.',
//       icon: 'error', // You can use other icons like 'info', 'warning', 'error'
//     });
//   }
  
// }