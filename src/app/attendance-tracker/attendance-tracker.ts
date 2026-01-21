import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EmployeeService, Employee } from '../employee-service';

@Component({
  selector: 'app-attendance-tracker',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './attendance-tracker.html',
  styleUrl: './attendance-tracker.css'
})
export class AttendanceTrackerComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns = ['name', 'status', 'action'];
  constructor(private empService: EmployeeService) {}
  ngOnInit() { this.empService.getEmployees().subscribe(d => this.employees = d); }
  mark(id: number, s: 'Present' | 'Absent') { this.empService.updateStatus(id, s); }
}