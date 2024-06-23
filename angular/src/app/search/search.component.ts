import { Component,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import {MatIcon, MatIconModule} from '@angular/material/icon'; 

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule, MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  search:string="";

  constructor(private router: Router) { }

  @Output() spread = new EventEmitter<string>();
  onSpread(){
    // this.router.navigateByUrl('/apartments');
    this.search = this.search.trim();
    this.spread.emit(this.search);
    
  }
}
