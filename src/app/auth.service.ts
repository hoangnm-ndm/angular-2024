import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = 'https://hoangnm-json.onrender.com';
  constructor(private http: HttpClient) {}
  register(user: User) {
    return this.http.post(`${this.baseURL}/register`, user);
  }
  login(user: User) {
    return this.http.post(`${this.baseURL}/login`, user);
  }
}
