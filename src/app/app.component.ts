import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductListComponent,
    HomePageComponent,
    NotFoundPageComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'WD18332';
  user = {
    name: 'Nguyễn Minh Hoàng',
    age: 18,
    address: 'Lục Nam - Bắc Giang',
    email: 'hoangnm62@fpt.edu.vn',
  };

  hello() {
    console.log('Xin chao moi nguoi!');
  }

  showInfor() {
    console.log('Hien thi thong tin ca nhan!');
  }
}
