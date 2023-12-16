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
 

  constructor(private productService: ProdcutServiceService) {}

  ngOnInit(): void {
    
  }

  

 
  
}
