import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProdcutServiceService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 29.99,
      imageUrl: 'path/to/image1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 39.99,
      imageUrl: 'path/to/image2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 49.99,
      imageUrl: 'path/to/image3.jpg',
    },
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  products$ = this.productsSubject.asObservable();

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(productId: number): Product | undefined {
    return this.products.find((product) => product.id === productId);
  }

  addProduct(newProduct: Product): void {
    this.products.push(newProduct);
    this.updateProducts();
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.updateProducts();
    }
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter((product) => product.id !== productId);
    this.updateProducts();
  }

  private updateProducts(): void {
    this.productsSubject.next(this.products);
  }
}
