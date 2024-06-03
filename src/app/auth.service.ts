import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/User';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
  register(user: User) {
    return this.http.post(`${this.baseURL}/register`, user);
  }
  login(user: User) {
    return this.http.post(`${this.baseURL}/login`, user);
  }
  // Lấy token từ localStorage hoặc bất kỳ nơi nào bạn lưu trữ token
  getToken() {
    return localStorage.getItem('token');
  }

  // Giải mã token để lấy thông tin
  decodeToken(token: string): any {
    return this.jwtHelper.decodeToken(token);
  }

  // Kiểm tra token có hợp lệ hay không
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }
}
