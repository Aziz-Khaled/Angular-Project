import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProdcutServiceService {


constructor (private http: HttpClient) {}


GetMenData () {
  return this.http.get<Product[]>('http://localhost:3000/men') ; 
}
GetWomenData () {
  return this.http.get<Product[]>('http://localhost:3000/women') ; 
}

postProductMen (product: Product) {
  return this.http.post<Product[]>('http://localhost:3000/men' , product)
}

postProductWomen (product: Product) {
  return this.http.post<Product[]>('http://localhost:3000/women' , product)
}

/*
UpdateMenData (id : number , newProduct: Product) {
  return this.http.put<Product>(`http://localhost:3000/men/${id}`,newProduct)
}


UpdateWomenData (id : number , newProduct: Product) {
  return this.http.put<Product>(`http://localhost:3000/women/${id}`,newProduct)
}

*/


 /* private products: Product[] = [
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
  ];*/
/*
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
*/
/*
  private apiUrl = 'http://localhost:3000/men'; // Replace with your JSON Server URL
  private productsSubject = new BehaviorSubject<Product[]>([]);

  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getProducts().subscribe((products) => {
      this.productsSubject.next(products);
      console.log(products)
    });
  }



  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(productId: number): Observable<Product | undefined> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }

  addProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, newProduct);
  }

  updateProduct(updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${updatedProduct.id}`, updatedProduct);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }*/
}




































