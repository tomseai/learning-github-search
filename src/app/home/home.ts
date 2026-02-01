import { Component, signal, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GitHubService, GitHubUser } from '../github.service';

@Component({
  selector: 'app-home',
  imports: [DatePipe],
  templateUrl: './home.html',
})
export class Home {
  private github = inject(GitHubService);

  username = signal('');
  user = signal<GitHubUser | null>(null);
  error = signal('');
  loading = signal(false);

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

  formatBlog(url: string): string {
    return url.replace(/^https?:\/\//, '');
  }
}
