import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { LoggedService } from '../services/logged.service';
import { MatButtonModule } from '@angular/material/button';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  constructor(private router: Router, public logged: LoggedService, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.logged.getIsLogged()=='') {
      this.router.navigate(['/home']);
    }
  }
  

  OnLogOut(){
    this.logged.logout();
    this.authService.logout().subscribe({
      next: () => {
        console.log('Logged out!');
      },
      error: (error: any) => {
        console.error('Error:', error);
      },
    });
    
  }

  OnReservations(){

    this.router.navigate(['/myreservations']);
    console.log('Reservations');
  }
}
