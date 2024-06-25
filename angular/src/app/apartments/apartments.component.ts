import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ApartmentsService } from '../apartmentsService/apartments.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Apartment } from '../interfaces/apartment';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button'; 
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Observable, Subscription, of } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { CurrencyService } from '../service-divisa/currency.service';

@Component({
  selector: 'app-apartments',
  standalone: true,
  imports: [SearchComponent, NavbarComponent, FooterComponent, CommonModule, MatDialogModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, RouterModule, CurrencyPipe],
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.css'
})
export class ApartmentsComponent implements OnInit, OnDestroy{

  @ViewChild('carouselTitle', { static: true }) carouselElement: ElementRef<HTMLElement> | null = null;
  @Input() apartment!:Apartment;

  constructor(public apartmentsService:ApartmentsService, public dialog: MatDialog, private router:Router, private currencyService: CurrencyService){

  }
  
  
  srch:string="";
  dialogboolean: boolean = true;
  spreadProccess(search:string){
    this.srch=search;
    this.dialogboolean = true;

  }

  imgCarousel = {
    'width': '100%',
    display: 'block',
    'border-radius': '5%'
  }

  openDialog() {
    if(this.dialogboolean) {
      this.dialog.open(DialogElementsExampleDialog);
      this.dialogboolean = false;
    } 
  }

  searchMatches(search:string,word:string):boolean{

    search = search.toLowerCase();
    word = word.toLowerCase();
    console.log(search+","+word);
    if(word.includes(search) || search === word){
      return true;
    }
    return false;
  }

  searchExists(search: string, array: Apartment[]): boolean {

    for (let apartment of array) {
      if(this.searchMatches(search, apartment.owner) || this.searchMatches(search,apartment.city)){
        return true;
      }
    }
    return false;
    
  }


  lookForAppartment(id:number){
    this.router.navigate(['/apartment',id]);
  }
  // pipe en accion
  apartments: Apartment[] = []; // Arreglo para almacenar los apartamentos obtenidos
  priceInCurrentCurrency: string = '';
  private currencySubscription: Subscription | null = null;
  
  ngOnInit(): void {
    // Suscripción al cambio de divisa
    this.currencySubscription = this.currencyService.currency$.subscribe(currency => {
      this.updatePriceInCurrentCurrency();
    });

    // Obtener la lista de apartamentos al inicializar el componente
    this.apartmentsService.getApartments().subscribe(apartments => {
      this.apartments = apartments; // Asignar la lista de apartamentos obtenidos
      if (this.apartments.length > 0) {
        this.updatePriceInCurrentCurrency(); // Actualizar el precio en la divisa actual si hay apartamentos
      }
    });
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar fugas de memoria
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }

  updatePriceInCurrentCurrency() {
    // Ejemplo de actualización del precio en la divisa actual
    const originalPrice = parseFloat(this.apartments[0].price.replace('$', '').trim()); // Suponiendo que obtienes el precio del primer apartamento
    const currentCurrency = this.currencyService.getCurrentCurrency();
    const newPrice = originalPrice * currentCurrency.value;
    this.priceInCurrentCurrency = `${newPrice.toFixed(2)} ${currentCurrency.symbol}`;
  }

  


}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogElementsExampleDialog {}
