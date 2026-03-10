import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LeaveService } from '../leave-service';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './leave-request.html',
  styleUrl: './leave-request.css'
})
export class LeaveRequestComponent {
  leaveForm: FormGroup;
  constructor(private fb: FormBuilder, private ls: LeaveService) {
    this.leaveForm = this.fb.group({
      empId: ['', Validators.required],
      reason: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  submit() {
    if(this.leaveForm.valid) {
      this.ls.addRequest(this.leaveForm.value);
      this.leaveForm.reset();
      alert('Leave Submitted!');
    }
  }
}