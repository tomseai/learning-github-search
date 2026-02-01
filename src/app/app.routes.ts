import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AuthCallback } from './auth/auth-callback';
import { authGuard } from './auth/auth.guard';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'auth/callback', component: AuthCallback },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
];
