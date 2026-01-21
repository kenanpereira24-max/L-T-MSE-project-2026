import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  total = 0; present = 0;
  constructor(private empService: EmployeeService) {}
  ngOnInit() {
    this.empService.getEmployees().subscribe(data => {
      this.total = data.length;
      this.present = data.filter(e => e.status === 'Present').length;
    });
  }
}