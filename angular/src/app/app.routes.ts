import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SingleApartmentComponent } from './single-apartment/single-apartment.component';
import { TableComponent } from './table/table.component';
import { SignuppComponent } from './signupp/signupp.component';
import { ContactComponent } from './contact/contact.component';
import { LoginnComponent } from './loginn/loginn.component';
import { ProfileComponent } from './profile/profile.component';
import { DbqueriesComponent } from './dbqueries/dbqueries.component';
import { UserreservationsComponent } from './userreservations/userreservations.component';
import { SmsLoginComponent } from './sms-login/sms-login.component';
import { AyudaFAQComponent } from './ayuda-faq/ayuda-faq.component';
import { GraphComponent } from './graph/graph.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutusComponent},
    {path: 'apartments', component: ApartmentsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'apartment/:id', component: SingleApartmentComponent},
    {path: 'reservations', component: TableComponent},
    {path: 'register', component: SignuppComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'signin', component: LoginnComponent},
    {path: 'smslogin', component: SmsLoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'database', component: DbqueriesComponent},
    {path: 'myreservations', component: UserreservationsComponent},
    {path: 'faq', component: AyudaFAQComponent},
    {path: 'help_faq', component: AyudaFAQComponent},
    {path: 'qrtest', component: QrGeneratorComponent},
    {path: 'chart', component: GraphComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
