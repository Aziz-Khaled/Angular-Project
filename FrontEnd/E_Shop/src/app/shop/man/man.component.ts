import { Component, OnInit } from '@angular/core';
import { ProdcutServiceService } from 'src/app/prodcut-service.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css'],
})
export class ManComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProdcutServiceService) {}

  ngOnInit(): void {
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });
  }
}
