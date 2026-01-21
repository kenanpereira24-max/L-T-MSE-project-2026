import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { AttendanceTrackerComponent } from './attendance-tracker/attendance-tracker';
import { EmployeeListComponent } from './employee-list/employee-list';
import { LeaveRequestComponent } from './leave-request/leave-request';
import { LeaveApprovalComponent } from './leave-approval/leave-approval';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'attendance', component: AttendanceTrackerComponent },
  { path: 'leave-request', component: LeaveRequestComponent },
  { path: 'leave-approval', component: LeaveApprovalComponent }
];