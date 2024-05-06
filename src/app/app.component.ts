import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'WD18332';
  userInfor = {
    name: 'Nguyễn Minh Hoàng',
    age: 18,
    address: 'Lục Nam - Bắc Giang',
    email: 'hoangnm62@fpt.edu.vn',
  };
  hello() {
    console.log('Xin chao moi nguoi!');
  }
}
