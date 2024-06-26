import { Component,Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Apartment } from '../interfaces/apartment';
import { ApartmentsService } from '../apartmentsService/apartments.service';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

import { CommonModule, CurrencyPipe } from '@angular/common';
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
import { CurrencyService } from '../service-divisa/currency.service';
import { Subscription } from 'rxjs';
import { LoggedService } from '../services/logged.service';


export interface Tile {
  src: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-single-apartment',
  standalone: true,
  imports: [MatGridListModule, NavbarComponent, FooterComponent, CommonModule, InfoComponent, FormComponent, RouterLink, MatButtonModule ,MatCardModule, MapComponent, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, SweetAlert2Module, CurrencyPipe],
  templateUrl: './single-apartment.component.html',
  styleUrl: './single-apartment.component.css'
})
export class SingleApartmentComponent implements OnInit, OnDestroy{


  
  @Input() apartment!:Apartment;
  
  
  priceInCurrentCurrency: string = '';
  private currencySubscription: Subscription | null = null;

  constructor(public apartmentService:ApartmentsService, public activatedRoute:ActivatedRoute, public dialog: MatDialog, public currencyService: CurrencyService, public logged: LoggedService){
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

  ngOnInit(): void {
    this.currencySubscription = this.currencyService.currency$.subscribe(currency => {
      // Actualizar el precio en la divisa actual cada vez que cambie la divisa
      this.updatePriceInCurrentCurrency();
    });
  }

  ngOnDestroy(): void {
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }
    
  // updatePriceInCurrentCurrency() {
  //   // Obtener el precio original del apartamento
  //   const originalPrice = parseFloat(this.apartment.price.replace('$', '').trim());

  //   // Obtener la divisa actual desde el servicio CurrencyService
  //   const currentCurrency = this.currencyService.getCurrentCurrency();

  //   // Calcular el nuevo precio en la divisa actual
  //   const newPrice = originalPrice * currentCurrency.value;

  //   // Formatear el precio con el símbolo de la divisa
  //   this.priceInCurrentCurrency = `${newPrice.toFixed(2)} ${currentCurrency.symbol}`;
  // }

  updatePriceInCurrentCurrency() {
    const currentCurrency = this.currencyService.getCurrentCurrency();
      const originalPrice = parseFloat(this.apartment.price.replace('$', '').trim());
      this.apartment.priceInCurrentCurrency = (originalPrice * currentCurrency.value).toFixed(2);
  }
}