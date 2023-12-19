import { Component , OnInit } from '@angular/core';
import { ProdcutServiceService } from 'src/app/prodcut-service.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent implements OnInit {
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


 constructor(    private productService: ProdcutServiceService ,   ) {}


 ngOnInit(): void {
   this.productService.GetWomenData().subscribe(data => {
    this.products =data ; 
   })
 }
 postProduct () {
  this.productService.postProductWomen(this.formProduct).subscribe(
    {
      next:(value)=> {
        console.log("product added with success !! ") ;
        window.location.reload();
        this.productService.GetWomenData()
    },error(err) {
      alert('Erreur d\'ajout') ;
    },
})
}

GetThenupdateProduct (productId : number) {
  this.productService.GetBeforeUpdateWomenData(productId).subscribe((result)=>{
    this.EditProduct = result ;
     
  })
}


updateWomen (productId : number) {
  this.productService
  .UpdateWomenData(productId , this.EditProduct)
  .subscribe(() => {
  window.location.reload();
  this.productService.GetWomenData(); 
  })
  }

  deleteProduct(productId: number) {
    this.productService.DeleteWomenData(productId)
      .subscribe(() => {
        console.log('Product deleted !! ');
        window.location.reload();
        this.productService.GetWomenData(); 
      });}


}
