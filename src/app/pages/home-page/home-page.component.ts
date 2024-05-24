import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../product.service';
import { RouterModule } from '@angular/router';
import { MyCustomizePipePipe } from '../../../pipes/my-customize-pipe.pipe';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, MyCustomizePipePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  products: Product[] | undefined;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: Product) {
    console.log(`Them vao gio hang thanh cong: ${product.title}`);
  }
}
