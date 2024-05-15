import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  productID: string | number | undefined;
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productID = this.route.snapshot.params['id'];
    console.log(this.productID);
    this.productService.getProductById(this.productID).subscribe((p) => {
      this.product = p;
    });
  }
}
