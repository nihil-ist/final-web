import { Component,Input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Apartment } from '../interfaces/apartment';
import { ApartmentsService } from '../apartmentsService/apartments.service';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

import { CommonModule } from '@angular/common';
import { InfoComponent } from '../info/info.component';
import { FormComponent } from '../form/form.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCard, MatCardModule} from '@angular/material/card'; 
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

export interface Tile {
  src: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-single-apartment',
  standalone: true,
  imports: [MatGridListModule, NavbarComponent, FooterComponent, CommonModule, InfoComponent, FormComponent, RouterLink, MatButtonModule ,MatCardModule, MapComponent, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, SweetAlert2Module],
  templateUrl: './single-apartment.component.html',
  styleUrl: './single-apartment.component.css'
})
export class SingleApartmentComponent {


  
  @Input() apartment!:Apartment;
  constructor(public apartmentService:ApartmentsService, public activatedRoute:ActivatedRoute, public dialog: MatDialog){
    this.activatedRoute.params.subscribe(params=>
      {
        this.apartment = apartmentService.apartments[params['id']];
      }
    );
  }

  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 2, src: '/1.jpg'},
    {text: 'Two', cols: 1, rows: 1, src: '/2.jpg'},
    {text: 'Three', cols: 1, rows: 1, src: '/3.jpg'},
    {text: 'Four', cols: 1, rows: 1, src: '/4.jpg'},
    {text: 'Five', cols: 1, rows: 1, src: '/5.jpg'}
  ];

}