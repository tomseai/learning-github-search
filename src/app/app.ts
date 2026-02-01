import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  darkMode = signal(false);

  toggleDarkMode() {
    this.darkMode.update((v) => !v);
    document.documentElement.classList.toggle('dark', this.darkMode());
  }
}
