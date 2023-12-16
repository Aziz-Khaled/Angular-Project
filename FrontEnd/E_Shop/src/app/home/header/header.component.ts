import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { ProdcutServiceService } from '../../prodcut-service.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor (private prodcutService: ProdcutServiceService) {}
formProduct : Product = {
  id: Math.random() , 
  name: "",
  description: "" , 
  price: 0 , 
  imageUrl:""
}

postProduct () {
  this.prodcutService.postProductMen(this.formProduct).subscribe(
    {
      next:(value)=> {
        console.log("product added with success !! ") ;
    },error(err) {
      alert('Erreur d\'ajout') ;
    },
})
}

}
