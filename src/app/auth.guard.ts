import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service'; // Đảm bảo bạn có một AuthService để kiểm tra xác thực

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.authService.getToken(); // Lấy JWT từ AuthService

    if (token) {
      // Kiểm tra token có hợp lệ và có quyền truy cập trang admin hay không
      const tokenPayload = this.authService.decodeToken(token);
      if (tokenPayload && tokenPayload.role === 'admin') {
        return true;
      } else {
        this.router.navigate(['/no-access']);
        return false;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
