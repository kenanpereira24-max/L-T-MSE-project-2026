import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  auth = inject(AuthService);

  loginAsEmployee() {
    this.auth.login('employee');
  }

  loginAsAdmin() {
    this.auth.login('admin');
  }

  logout() {
    this.auth.logout();
  }
}