import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LeaveService } from '../leave-service';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
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