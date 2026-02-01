import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GitHubService, GitHubRepo } from '../github.service';

@Component({
  selector: 'app-dashboard',
  imports: [DatePipe],
  template: `
    <div>
      <h2 class="text-[22px] font-bold text-neutral-700 dark:text-neutral-0 mb-6">Your Repositories</h2>

      @if (loading()) {
        <p class="text-neutral-500">Loading repositories...</p>
      }

      @if (error()) {
        <p class="text-red-500 font-bold">{{ error() }}</p>
      }

      <div class="flex flex-col gap-4">
        @for (repo of repos(); track repo.id) {
          <a
            [href]="repo.html_url"
            target="_blank"
            class="bg-neutral-0 dark:bg-neutral-800 rounded-2xl shadow-lg p-6 no-underline block hover:ring-2 hover:ring-blue-500 transition-shadow"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="min-w-0 flex-1">
                <h3 class="text-[16px] font-bold text-blue-500 truncate">{{ repo.name }}</h3>
                @if (repo.description) {
                  <p class="text-neutral-500 dark:text-neutral-300 text-[14px] mt-1 line-clamp-2">
                    {{ repo.description }}
                  </p>
                }
                <div class="flex flex-wrap items-center gap-4 mt-3 text-[13px] text-neutral-300 dark:text-neutral-500">
                  @if (repo.language) {
                    <span class="flex items-center gap-1">
                      <span class="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
                      {{ repo.language }}
                    </span>
                  }
                  <span>⭐ {{ repo.stargazers_count }}</span>
                  <span>Updated {{ repo.updated_at | date: 'd MMM yyyy' }}</span>
                </div>
              </div>
            </div>
          </a>
        }
      </div>
    </div>
  `,
})
export class Dashboard implements OnInit {
  private github = inject(GitHubService);

  repos = signal<GitHubRepo[]>([]);
  loading = signal(false);
  error = signal('');

  ngOnInit() {
    this.loading.set(true);
    this.github.getUserRepos().subscribe({
      next: (repos) => {
        this.repos.set(repos);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load repositories');
        this.loading.set(false);
      },
    });
  }
}
