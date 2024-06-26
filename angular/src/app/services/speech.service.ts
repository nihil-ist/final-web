// src/app/services/speech.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  private synth = window.speechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];
  private utterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    this.loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = this.loadVoices.bind(this);
    }
  }

  private loadVoices() {
    this.voices = this.synth.getVoices();
  }

  getVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }

  getEnglishVoice(): SpeechSynthesisVoice | undefined {
    return this.voices.find(voice => voice.lang.startsWith('en'));
  }

  speak(text: string, voice: SpeechSynthesisVoice): void {
    if (this.synth.speaking) {
      console.error('SpeechSynthesis.speaking');
      return;
    }

    if (text !== '') {
      this.utterance = new SpeechSynthesisUtterance(text);
      this.utterance.voice = voice;
      this.utterance.onend = () => {
        console.log('SpeechSynthesisUtterance.onend');
        this.utterance = null;
      };

      this.utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
        this.utterance = null;
      };

      this.synth.speak(this.utterance);
    }
  }

  pause(): void {
    if (this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
    }
  }

  resume(): void {
    if (this.synth.paused) {
      this.synth.resume();
    }
  }

  stop(): void {
    if (this.synth.speaking || this.synth.paused) {
      this.synth.cancel();
      this.utterance = null;
    }
  }

  isPaused(): boolean {
    return this.synth.paused;
  }

  isSpeaking(): boolean {
    return this.synth.speaking;
  }
}
