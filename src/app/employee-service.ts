import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  dept: string;
  status: 'Present' | 'Absent';
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees: Employee[] = [
    { id: 101, name: 'Alice Johnson', dept: 'Engineering', status: 'Present' },
    { id: 102, name: 'Bob Smith', dept: 'Marketing', status: 'Absent' },
    { id: 103, name: 'Charlie Davis', dept: 'HR', status: 'Present' }
  ];

  getEmployees(): Observable<Employee[]> { return of(this.employees); }

  updateStatus(id: number, status: 'Present' | 'Absent'): void {
    const emp = this.employees.find(e => e.id === id);
    if (emp) emp.status = status;
  }
}