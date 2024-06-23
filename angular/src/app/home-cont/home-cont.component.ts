import { Component } from '@angular/core';
import { VideopipeComponent } from '../videopipe/videopipe.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-cont',
  standalone: true,
  imports: [VideopipeComponent, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './home-cont.component.html',
  styleUrl: './home-cont.component.css'
})
export class HomeContComponent {
  constructor(private router: Router) { }
}
