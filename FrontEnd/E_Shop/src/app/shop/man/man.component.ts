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


  formProduct : Product = {
    id: 0 , 
    name: "",
    description: "" , 
    price: 0 , 
    imageUrl:""
  }


  EditProduct : Product = {
    id: Math.random() , 
    name: "",
    description: "" , 
    price: 0 , 
    imageUrl:""
  }

  constructor(
    private productService: ProdcutServiceService , 
    ) {}

  ngOnInit(): void {
    this.productService.GetMenData().subscribe(data => {
      this.products = data ; 
    })}




    postProduct () {
      this.productService.postProductMen(this.formProduct).subscribe(
        {
          next:(value)=> {
            console.log("product added with success !! ") ;
            window.location.reload();
            this.productService.GetMenData()
        },error(err) {
          alert('Erreur d\'ajout') ;
        },
    })
    }

    GetThenupdateProduct (productId : number) {
      this.productService.GetBeforeUpdateMenData(productId).subscribe((result)=>{
        this.EditProduct = result ;
         
      })
    }


    updateMen (productId : number) {
      this.productService
      .UpdateMenData(productId , this.EditProduct)
      .subscribe(() => {
      window.location.reload();
      this.productService.GetMenData(); 
      })
      }

      deleteProduct(productId: number) {
        this.productService.DeleteMenData(productId)
          .subscribe(() => {
            console.log('Product deleted !! ');
            window.location.reload();
            this.productService.GetMenData(); 
          });}
    }