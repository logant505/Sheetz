import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../card-builder/product.model';
import { mock_list } from '../card-builder/mocklist';
import { ProductsService } from '../card-builder/card-builder.service';


@Component({
  selector: 'app-bio-layout',
  templateUrl: './bio-layout.component.html',
  styleUrls: ['./bio-layout.component.css']
})
export class BioLayoutComponent implements OnInit{
  products:ProductModel []=[];
  constructor(private productsService:ProductsService){

  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: ProductModel[])=>{
      console.log("Fetching Products");
      for(var product of data){
      console.log(product);
      this.products.push();
      }
    })
    throw new Error("Method Not Implemented");
  }
}
