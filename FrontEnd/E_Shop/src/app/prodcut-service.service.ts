import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import {ContactForm} from './Contact'
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
  return this.http.post<Product>('http://localhost:3000/men' , product)
}

postProductWomen (product: Product) {
  return this.http.post<Product>('http://localhost:3000/women' , product)
}

//update : 
GetBeforeUpdateMenData (id : number) {
  return this.http.get<Product>(`http://localhost:3000/men/${id}`)
}

UpdateMenData(id : number , product: Product): Observable<Product> {
  return this.http.put<Product>(`http://localhost:3000/men/${id}`, product);
}

DeleteMenData(id: number): Observable<Product> {
  return this.http.delete<Product>(`http://localhost:3000/men/${id}`);
}

/*
postingContactForm (Contact : ContactForm) :Observable<ContactForm> {
return this.http.post<any>('http://localhost:3000/ContactForm' , Contact)
}*/
}