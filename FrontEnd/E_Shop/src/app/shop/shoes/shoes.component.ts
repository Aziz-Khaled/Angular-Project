import { Component, OnInit } from '@angular/core';
import { ProdcutServiceService } from 'src/app/prodcut-service.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit{
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
    this.productService.GetShoesData().subscribe(data => {
     this.products =data ; 
    })
  }

  postProduct () {
    this.productService.postProductShoes(this.formProduct).subscribe(
      {
        next:(value)=> {
          console.log("product added with success !! ") ;
          window.location.reload();
          this.productService.GetShoesData()
      },error(err) {
        alert('Erreur d\'ajout') ;
      },
  })
  }
  
  GetThenupdateProduct (productId : number) {
    this.productService.GetBeforeUpdateShoesData(productId).subscribe((result)=>{
      this.EditProduct = result ;
       
    })
  }
  
  
  updateShoes (productId : number) {
    this.productService
    .UpdateShoesData(productId , this.EditProduct)
    .subscribe(() => {
    window.location.reload();
    this.productService.GetShoesData(); 
    })
    }
  
    deleteProduct(productId: number) {
      this.productService.DeleteShoesData(productId)
        .subscribe(() => {
          console.log('Product deleted !! ');
          window.location.reload();
          this.productService.GetShoesData(); 
        });}

        onFileChange(event: any): void {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              this.formProduct.imageUrl = reader.result as string;
            };
            reader.readAsDataURL(file);
          }
        }
  


}
