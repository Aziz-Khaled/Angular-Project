// user-account.component.ts
import { Component, OnInit } from '@angular/core';
import { ProdcutServiceService } from '../prodcut-service.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
})
export class UserAccountComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
  };

  constructor(private productService: ProdcutServiceService) {}

  ngOnInit(): void {
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });
  }

  addNewProduct(): void {
    if (this.newProduct.name && this.newProduct.description && this.newProduct.price >= 0) {
      this.productService.addProduct(this.newProduct);
      this.clearNewProduct();
    } else {
      alert('Please fill in all fields for the new product.');
    }
  }

  updateProduct(product: Product): void {
    // Assuming you have a way to edit and update a product
    this.productService.updateProduct(product);
  }

  deleteProduct(productId: number): void {
    const confirmation = confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      this.productService.deleteProduct(productId);
    }
  }

  private clearNewProduct(): void {
    this.newProduct = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
    };
  }
}
