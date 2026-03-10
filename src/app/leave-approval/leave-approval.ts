import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveService, LeaveRequest } from '../leave-service';
import { StatusBadgePipe } from '../status-badge-pipe';

@Component({
  selector: 'app-leave-approval',
  standalone: true,
  imports: [CommonModule, StatusBadgePipe],
  templateUrl: './leave-approval.html',
  styleUrl: './leave-approval.css'
})
export class LeaveApprovalComponent implements OnInit {
  requests: LeaveRequest[] = [];
  constructor(private ls: LeaveService) {}
  ngOnInit() { this.ls.getRequests().subscribe(d => this.requests = d); }
  update(id: number, s: 'Approved' | 'Rejected') { this.ls.updateStatus(id, s); }
}