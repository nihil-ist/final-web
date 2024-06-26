import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { LoggedService } from '../services/logged.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  constructor(private router: Router, private logged: LoggedService) { }

  ngOnInit(): void {
    if (this.logged.getIsLogged()=='') {
      this.router.navigate(['/home']);
    }
  }

}
