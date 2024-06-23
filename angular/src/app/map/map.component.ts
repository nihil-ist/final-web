import { Component, AfterViewInit, input, Input } from '@angular/core';
import * as L from 'leaflet';
import { Apartment } from '../interfaces/apartment';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {

  @Input() apartamento!: Apartment;

  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.apartamento.longitud, this.apartamento.latitud ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
