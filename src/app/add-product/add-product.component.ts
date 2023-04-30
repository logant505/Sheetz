import { Component,OnInit,NgModule,VERSION } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductsService } from '../layouts/card-builder/card-builder.service';
import { ProductModel } from '../layouts/card-builder/product.model';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
constructor(private ps:ProductsService){

}
ngOnInit(): void {
  
}
addProduct(product:ProductModel){
  console.log("You Have Logged In");
  console.log(product);
  this.ps.addProducts(product);
}
}
