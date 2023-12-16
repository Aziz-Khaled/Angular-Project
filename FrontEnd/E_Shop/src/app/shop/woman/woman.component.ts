import { Component , OnInit } from '@angular/core';
import { ProdcutServiceService } from '../../prodcut-service.service'
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent implements OnInit {
 constructor(private prodcutService: ProdcutServiceService) {}

WomenProduct: Product [] = []

 ngOnInit(): void {
   this.prodcutService.GetWomenData().subscribe(data => {
    this.WomenProduct =data ; 
   })
 }
}
