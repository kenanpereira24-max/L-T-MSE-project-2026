import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { EmployeeService, Employee } from '../employee-service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns = ['id', 'name', 'dept'];
  constructor(private empService: EmployeeService) {}
  ngOnInit() { this.empService.getEmployees().subscribe(d => this.employees = d); }
}