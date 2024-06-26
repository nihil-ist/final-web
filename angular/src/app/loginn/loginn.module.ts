import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginnComponent } from './loginn.component';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [LoginnComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    RouterModule,
    NgxLoadingModule.forRoot({}),
  ],
})
export class LoginnModule {}
