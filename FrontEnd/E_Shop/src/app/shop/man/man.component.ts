import { ProdcutServiceService } from 'src/app/prodcut-service.service';
import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css'],
})
export class ManComponent implements OnInit {
  products: Product[] = [];
  paramMap: any;

  formData : Product =  {
    id: 0,
    name:  "",
    description: "",
    price: 0,
    imageUrl: ""
  } 

  constructor(
    private productService: ProdcutServiceService , 
    ) {}

  ngOnInit(): void {
    this.productService.GetMenData().subscribe(data => {
      this.products = data ; 
    })


    }

   

/*
GetById(id: number){
  this.productService.UpdateMenData(id).subscribe((data)=> {
this.formData = data
  });
}
*/

  }

