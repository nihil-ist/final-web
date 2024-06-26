import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { VideopipeComponent } from './videopipe/videopipe.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InfoComponent } from './info/info.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { LoginnModule } from './loginn/loginn.module';
declare const bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BannerComponent, FooterComponent, HomeComponent, VideopipeComponent, ApartmentsComponent, SearchComponent, CarouselComponent, InfoComponent, FormComponent, TableComponent, LoginnModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent  {
  title = 'miniproyectoTWeb';
}