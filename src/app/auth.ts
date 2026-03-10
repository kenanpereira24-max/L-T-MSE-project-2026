import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  role = 'employee';

  login(role: string) {
    this.isLoggedIn = true;
    this.role = role;
  }

  logout() {
    this.isLoggedIn = false;
    this.role = '';
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  isAdmin() {
    return this.role === 'admin';
  }
}