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
GetShoesData () {
  return this.http.get<Product[]>('http://localhost:3000/shoes') ; 
}

postProductMen (product: Product) {
  return this.http.post<Product>('http://localhost:3000/men' , product)
}
postProductShoes (product: Product) {
  return this.http.post<Product>('http://localhost:3000/shoes' , product)
}

postProductWomen (product: Product) {
  return this.http.post<Product>('http://localhost:3000/women' , product)
}

//update : 
GetBeforeUpdateMenData (id : number) {
  return this.http.get<Product>(`http://localhost:3000/men/${id}`)
}
GetBeforeUpdateWomenData (id : number) {
  return this.http.get<Product>(`http://localhost:3000/women/${id}`)
}
GetBeforeUpdateShoesData (id : number) {
  return this.http.get<Product>(`http://localhost:3000/shoes/${id}`)
}

UpdateMenData(id : number , product: Product): Observable<Product> {
  return this.http.put<Product>(`http://localhost:3000/men/${id}`, product);
}
UpdateWomenData(id : number , product: Product): Observable<Product> {
  return this.http.put<Product>(`http://localhost:3000/women/${id}`, product);
}
UpdateShoesData(id : number , product: Product): Observable<Product> {
  return this.http.put<Product>(`http://localhost:3000/shoes/${id}`, product);
}

DeleteMenData(id: number): Observable<Product> {
  return this.http.delete<Product>(`http://localhost:3000/men/${id}`);
}
DeleteWomenData(id: number): Observable<Product> {
  return this.http.delete<Product>(`http://localhost:3000/women/${id}`);
}
DeleteShoesData(id: number): Observable<Product> {
  return this.http.delete<Product>(`http://localhost:3000/shoes/${id}`);
}

/*
postingContactForm (Contact : ContactForm) :Observable<ContactForm> {
return this.http.post<any>('http://localhost:3000/ContactForm' , Contact)
}*/
}