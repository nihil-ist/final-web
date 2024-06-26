import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { ApartmentsService } from '../apartmentsService/apartments.service';
import { filter } from 'rxjs';
import { CurrencyService } from '../service-divisa/currency.service';
import { LoggedService } from '../services/logged.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, RouterModule, SearchComponent, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit  {

  srch:string="";
  selectedCurrency: string = 'USD';

  spreadProccess(search:string){
    this.srch=search;
  }

  searchMatches(search:string,word:string):boolean{
    search = search.toLowerCase();
    word = word.toLowerCase();
    console.log(search+","+word);
    if(word.includes(search) || search === word)
      return true;
    return false;
  }

  constructor(public currencyService: CurrencyService, public logged: LoggedService) {}

  ngOnInit() {
    this.selectedCurrency = this.currencyService.getCurrentCurrency().symbol;  
  }

  username = this.logged.getIsLogged();

  selectCurrency(event: Event) {
    const target = event.target as HTMLSelectElement;
    const currency = target.value;
    this.currencyService.setCurrency(currency);
  }
  isNavbarOpen = false;

    toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
    }
  
}
