import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface LeaveRequest {
  id: number;
  empId: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Injectable({ providedIn: 'root' })
export class LeaveService {
  private requests: LeaveRequest[] = [];

  getRequests(): Observable<LeaveRequest[]> { return of(this.requests); }

  addRequest(req: any): void {
    this.requests.push({ ...req, id: Date.now(), status: 'Pending' });
  }

  updateStatus(id: number, status: 'Approved' | 'Rejected'): void {
    const r = this.requests.find(req => req.id === id);
    if (r) r.status = status;
  }
}