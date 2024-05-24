import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import {
  Form,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss',
})
export class ProductAddComponent implements OnInit {
  product: Product = {} as Product;
  productForm: FormGroup = {} as FormGroup;
  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      description: [''],
    });
  }
  ngOnInit(): void {}
  handleSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.productService
        .createProduct(this.productForm.value)
        .subscribe((data) => {
          console.log('Create product successfully!', data);
          alert('Create product successfully!');
          this.router.navigate(['/admin']);
        });
    }
  }
}
