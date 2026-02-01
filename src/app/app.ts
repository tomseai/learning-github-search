import { Component, signal, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GitHubService, GitHubUser } from './github.service';

@Component({
  selector: 'app-root',
  imports: [DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private github = inject(GitHubService);

  username = signal('');
  user = signal<GitHubUser | null>(null);
  error = signal('');
  loading = signal(false);
  darkMode = signal(false);

  search() {
    const name = this.username().trim();
    if (!name) return;

    this.loading.set(true);
    this.error.set('');

    this.github.getUser(name).subscribe({
      next: (user) => {
        this.user.set(user);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No results');
        this.user.set(null);
        this.loading.set(false);
      },
    });
  }

  toggleDarkMode() {
    this.darkMode.update((v) => !v);
    document.documentElement.classList.toggle('dark', this.darkMode());
  }

  formatBlog(url: string): string {
    return url.replace(/^https?:\/\//, '');
  }
}
