import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  products: Product[] = [
    { id: 1, name: 'xeng?', price: 1000 },
    { id: 1, name: 'cuoc', price: 2000 },
  ];
}
