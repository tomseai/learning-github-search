import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  twitter_username: string | null;
  blog: string | null;
  company: string | null;
  created_at: string;
}

@Injectable({ providedIn: 'root' })
export class GitHubService {
  private http = inject(HttpClient);

  getUser(username: string): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(`https://api.github.com/users/${username}`);
  }
}
