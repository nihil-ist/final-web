import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SingleApartmentComponent } from './single-apartment/single-apartment.component';
import { TableComponent } from './table/table.component';
import { SignuppComponent } from './signupp/signupp.component';
<<<<<<< HEAD
import { ContactComponent } from './contact/contact.component';
=======
import { LoginnComponent } from './loginn/loginn.component';
>>>>>>> be4157dc0693a6decbafb25b3a735615fe2d7583

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutusComponent},
    {path: 'apartments', component: ApartmentsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'apartment/:id', component: SingleApartmentComponent},
    {path: 'reservations', component: TableComponent},
    {path: 'register', component: SignuppComponent},
<<<<<<< HEAD
    {path: 'contact', component: ContactComponent},
=======
    {path: 'signin', component: LoginnComponent},
>>>>>>> be4157dc0693a6decbafb25b3a735615fe2d7583
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
