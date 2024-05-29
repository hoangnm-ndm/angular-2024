import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  authForm: FormGroup = {} as FormGroup;
  user: User = {} as User;

  constructor(
    private authService: AuthService,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {}

  handleSubmit() {
    console.log(this.authForm.valid);
    if (this.authForm.valid) {
      console.log(this.authForm.value);
      this.authService.register(this.authForm.value).subscribe({
        next: (data) => {
          console.log('Register successfully!', data);
          if (confirm('Register successfully!')) {
            this.route.navigate(['/login']);
          }
        },
        error: (err) => {
          console.log('Register failed!', err);
          alert(`Register failed!, ${err.error}`);
        },
      });
    } else {
      console.log('form is not valid!');
    }
  }
}
