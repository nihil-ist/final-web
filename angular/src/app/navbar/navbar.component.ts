import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { ApartmentsService } from '../apartmentsService/apartments.service';
import { filter } from 'rxjs';
import { CurrencyService } from '../service-divisa/currency.service';
import { LoggedService } from '../services/logged.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpeechService } from '../services/speech.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, RouterModule, SearchComponent, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit  {

  @Input()
  audioText!: string;


  highContrast = false;
  fontSize = 16;
  lineHeight = 1.5;
  isPaused = false; 
  isSpeaking = false; 
  
  voices: SpeechSynthesisVoice[] = [];
  selectedVoice?: SpeechSynthesisVoice;

  toggleContrast() {
    this.highContrast = !this.highContrast;
    document.body.classList.toggle('high-contrast', this.highContrast);
  }

  increaseFontSize(): void {
    if (this.fontSize < 24) {
      this.fontSize += 2;
      this.applyStylesToBody();
    }
  }
  
  decreaseFontSize(): void {
    if (this.fontSize > 12) {
      this.fontSize -= 2;
      this.applyStylesToBody();
    }
  }

  increaseLineHeight(): void {
    if (this.lineHeight < 2.0) {
      this.lineHeight += 0.1;
      this.applyStylesToBody();
    }
  }

  decreaseLineHeight(): void {
    if (this.lineHeight > 1.0) {
      this.lineHeight -= 0.1;
      this.applyStylesToBody();
    }
  }

  private applyStylesToBody() {
    document.body.style.fontSize = `${this.fontSize}px`;
    document.body.style.lineHeight = `${this.lineHeight}`;
    this.updateAllElements();
  }

  private updateAllElements() {
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
      (el as HTMLElement).style.fontSize = `${this.fontSize}px`;
      (el as HTMLElement).style.lineHeight = `${this.lineHeight}`;
    });
  }

  readText(): void {
    if (this.selectedVoice) {
      this.speechService.speak(this.audioText, this.selectedVoice);
      this.isSpeaking = true;
      this.isPaused = false;
    } else {
      console.error('No voice selected or voices not loaded');
    }
  }

  togglePauseResume(): void {
    if (this.speechService.isPaused()) {
      this.speechService.resume();
      this.isPaused = false;
    } else {
      this.speechService.pause();
      this.isPaused = true;
    }
  }

  stopReading(): void {
    this.speechService.stop();
    this.isSpeaking = false;
    this.isPaused = false;
  }

  
  srch:string="";
  selectedCurrency: string = 'USD';

  spreadProccess(search:string){
    this.srch=search;
  }

  searchMatches(search:string,word:string):boolean{
    search = search.toLowerCase();
    word = word.toLowerCase();
    console.log(search+","+word);
    if(word.includes(search) || search === word)
      return true;
    return false;
  }

  constructor(public currencyService: CurrencyService, public logged: LoggedService, private speechService: SpeechService) {}

  ngOnInit() {
    this.selectedCurrency = this.currencyService.getCurrentCurrency().symbol; 
    this.loadVoices();
  }

  private loadVoices() {
    this.voices = this.speechService.getVoices();
    if (this.voices.length === 0) {
      setTimeout(() => this.loadVoices(), 100);
    } else {
      this.selectedVoice = this.speechService.getEnglishVoice() || this.voices[0];
    }
  }

  username = this.logged.getIsLogged();

  selectCurrency(event: Event) {
    const target = event.target as HTMLSelectElement;
    const currency = target.value;
    this.currencyService.setCurrency(currency);
  }
  isNavbarOpen = false;

    toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
    }
  
}
