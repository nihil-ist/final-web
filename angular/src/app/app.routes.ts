import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SingleApartmentComponent } from './single-apartment/single-apartment.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutusComponent},
    {path: 'apartments', component: ApartmentsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'apartment/:id', component: SingleApartmentComponent},
    {path: 'reservations', component: TableComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
