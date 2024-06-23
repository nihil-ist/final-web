import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card'; 

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  tiles: Tile[] = [
    {text: 'live in your dream house, at least for a day', cols: 4, rows: 8, color: 'url(assets/img/nyc.gif)'},
    
  ];
}
