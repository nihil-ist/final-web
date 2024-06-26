import { Component, OnInit, TrackByFunction } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { CommonModule } from '@angular/common';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Router } from '@angular/router';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, NgxMasonryModule, CommonModule, GraphComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent  {
  arrayN: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
  masonryItems = [
    { src: 'assets/img/gallery/1.png' },
    { src: 'assets/img/gallery/2.png' },
    { src: 'assets/img/gallery/3.png' },
    { src: 'assets/img/gallery/4.png' },
    { src: 'assets/img/gallery/5.png' },
    { src: 'assets/img/gallery/6.png' },
    { src: 'assets/img/gallery/7.png' },
    { src: 'assets/img/gallery/8.png' },
    { src: 'assets/img/gallery/9.png' },
    { src: 'assets/img/gallery/10.png' },
    { src: 'assets/img/gallery/11.png' },
    { src: 'assets/img/gallery/12.png' },
    { src: 'assets/img/gallery/13.png' },
    { src: 'assets/img/gallery/14.png' },
    { src: 'assets/img/gallery/15.png' },
    { src: 'assets/img/gallery/16.png' },
    { src: 'assets/img/gallery/17.png' },
    { src: 'assets/img/gallery/18.png' },
    { src: 'assets/img/gallery/19.png' },
    { src: 'assets/img/gallery/20.png' },
    { src: 'assets/img/gallery/21.png' },
    { src: 'assets/img/gallery/22.png' },
    { src: 'assets/img/gallery/23.png' },
    { src: 'assets/img/gallery/24.png' },
    { src: 'assets/img/gallery/25.png' },
    { src: 'assets/img/gallery/26.png' }
  ];

}
