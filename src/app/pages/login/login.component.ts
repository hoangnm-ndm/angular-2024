import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../interfaces/User';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
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
      this.authService.login(this.authForm.value).subscribe({
        next: (data) => {
          console.log('login successfully!', data);
          if (confirm('login successfully!')) {
            this.route.navigate(['/admin']);
          }
        },
        error: (err) => {
          console.log('login failed!', err);
          alert(`login failed!, ${err.error}`);
        },
      });
    } else {
      console.log('form is not valid!');
      console.log(this.authForm.invalid);
      alert('Form is not valid!');
    }
  }
}
