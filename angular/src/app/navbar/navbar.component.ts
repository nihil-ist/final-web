import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { ApartmentsService } from '../apartmentsService/apartments.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, RouterModule, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {

  srch:string="";
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

}
