import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GitHubService, GitHubUser } from '../github.service';
import { environment } from '../environments/environment';

const TOKEN_KEY = 'github_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = inject(Router);
  private github = inject(GitHubService);

  currentUser = signal<GitHubUser | null>(null);
  isAuthenticated = signal(false);

  constructor() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      this.loadUser();
    }
  }

  get token(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  login() {
    window.location.href = `${environment.authServerUrl}/auth/login`;
  }

  handleCallback(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
    this.loadUser();
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.router.navigate(['/']);
  }

  private loadUser() {
    this.github.getAuthenticatedUser().subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.isAuthenticated.set(true);
      },
      error: () => {
        localStorage.removeItem(TOKEN_KEY);
        this.isAuthenticated.set(false);
      },
    });
  }
}
