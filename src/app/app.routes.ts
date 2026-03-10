import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { LeaveRequestComponent } from './leave-request/leave-request';
import { LeaveApprovalComponent } from './leave-approval/leave-approval';
import { EmployeeListComponent } from './employee-list/employee-list';
import { authGuard, adminGuard } from './auth-guard';

export const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },
  { 
    path: 'employees', 
    component: EmployeeListComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'leave-request', 
    component: LeaveRequestComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'leave-approval', 
    component: LeaveApprovalComponent, 
    canActivate: [adminGuard] 
  },
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  }
];