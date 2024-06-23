import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomseguroPipe } from './domseguro.pipe';

@Component({
  selector: 'app-videopipe',
  standalone: true,
  imports: [RouterOutlet, DomseguroPipe],
  templateUrl: './videopipe.component.html',
  styleUrl: './videopipe.component.css'
})
export class VideopipeComponent {
  title = 'videoseguro';
  video:string="MtCMtC50gwY?si=fkdDaes5poltGgPH";

}
