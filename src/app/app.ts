import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    class: 'w-dvw h-dvh flex flex-col items-center justify-center bg-orange-400 gap-4 text-center',
  },
})
export class App {}
