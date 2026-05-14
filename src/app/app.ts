import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    class: 'w-dvw h-dvh flex items-center justify-center bg-orange-400'
  }
})
export class App {
}
