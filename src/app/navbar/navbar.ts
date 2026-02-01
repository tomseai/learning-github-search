import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <header class="flex items-center justify-between mb-9">
      <a routerLink="/" class="text-[26px] font-bold text-neutral-700 dark:text-neutral-0 no-underline">
        devfinder
      </a>
      <div class="flex items-center gap-4">
        @if (auth.isAuthenticated()) {
          <a
            routerLink="/dashboard"
            class="text-[13px] font-bold text-neutral-500 dark:text-neutral-0 hover:text-neutral-700 dark:hover:text-neutral-200 no-underline hidden md:inline"
          >
            Dashboard
          </a>
          <img
            [src]="auth.currentUser()?.avatar_url"
            [alt]="auth.currentUser()?.login"
            class="w-8 h-8 rounded-full"
          />
          <span class="text-[13px] font-bold text-neutral-500 dark:text-neutral-0 hidden md:inline">
            {{ auth.currentUser()?.login }}
          </span>
          <button
            (click)="auth.logout()"
            class="text-[13px] font-bold tracking-[2.5px] uppercase text-neutral-500 dark:text-neutral-0 hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer bg-transparent border-none"
          >
            Logout
          </button>
        } @else {
          <button
            (click)="auth.login()"
            class="bg-blue-500 hover:bg-blue-300 text-neutral-0 font-bold text-[13px] rounded-xl px-4 py-2 cursor-pointer border-none transition-colors"
          >
            Sign in with GitHub
          </button>
        }
        <button
          (click)="darkModeToggle.emit()"
          class="flex items-center gap-4 text-[13px] font-bold tracking-[2.5px] uppercase text-neutral-500 dark:text-neutral-0 hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer bg-transparent border-none"
        >
          @if (darkMode()) {
            LIGHT
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 0 0-3.545 1.481A4.934 4.934 0 0 0 4.974 10c0 1.376.582 2.645 1.481 3.545A4.934 4.934 0 0 0 10 15.026c1.376 0 2.645-.582 3.545-1.481A4.934 4.934 0 0 0 15.026 10a4.934 4.934 0 0 0-1.481-3.545ZM10 1.435A.91.91 0 0 0 10.91.526V.91A.91.91 0 0 0 10 0a.91.91 0 0 0-.91.91v.025c0 .504.407.5.91.5ZM3.246 3.966l-.388-.389a.91.91 0 0 0-1.287 1.287l.389.389A.91.91 0 0 0 3.246 3.966ZM1.435 10A.91.91 0 0 0 .526 9.09H.91A.91.91 0 0 0 0 10c0 .504.407.91.91.91h.025c.504 0 .5-.406.5-.91ZM3.966 16.754l-.389.388a.91.91 0 1 0 1.287 1.287l.389-.389a.91.91 0 0 0-1.287-1.286ZM10 18.565a.91.91 0 0 0-.91.91v-.025a.91.91 0 0 0 1.82 0v.025a.91.91 0 0 0-.91-.91ZM16.754 16.034a.91.91 0 0 0-1.287 1.287l.389.389a.91.91 0 0 0 1.287-1.287l-.389-.389ZM18.565 10a.91.91 0 0 0 .91.91h-.025a.91.91 0 0 0 0-1.82h.025a.91.91 0 0 0-.91.91ZM16.034 3.246a.91.91 0 0 0 1.287-1.287l-.389-.389a.91.91 0 0 0-1.287 1.287l.389.389Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          } @else {
            DARK
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.513 11.397a.701.701 0 0 0-.588.128 7.496 7.496 0 0 1-2.276 1.336 7.101 7.101 0 0 1-2.583.462 7.505 7.505 0 0 1-5.32-2.209 7.568 7.568 0 0 1-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 0 1 1.227-2.21.657.657 0 0 0-.102-.924.701.701 0 0 0-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 0 0 0 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 0 0 7.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 0 0 3.58-5.624.623.623 0 0 0-.46-.796Z"
                fill="currentColor"
                fill-rule="nonzero"
              />
            </svg>
          }
        </button>
      </div>
    </header>
  `,
})
export class Navbar {
  auth = inject(AuthService);
  darkMode = input.required<boolean>();
  darkModeToggle = output();
}
