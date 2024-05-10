import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  constructor() {}
  @Input() data: string | undefined;
  @Input() style: string | undefined;
}
