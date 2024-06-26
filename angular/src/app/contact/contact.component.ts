import { Component } from '@angular/core';
import { MailService } from './mail.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { BannerComponent } from '../banner/banner.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,NavbarComponent,BannerComponent,MatToolbarModule, GraphComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers : [MailService]
})
export class ContactComponent {
formulario: FormGroup;

  constructor(private fb: FormBuilder, private mailService: MailService) {
    this.formulario = this.fb.group({
      subject: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("estoy en el onSubmit");
    if (this.formulario.valid) {
      const data = {
        subject: this.formulario.value.subject,
        useremail: this.formulario.value.email, //email del user
        description: this.formulario.value.description,
        emailadmin: 'theapartmentbnb@gmail.com'
      };

      this.mailService.sendInfo(data).subscribe(response => {
      }, error => {
        console.error('Error:', error);
      });
    }
  }
}
