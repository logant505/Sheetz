import { Component } from '@angular/core';
import { ProductModel } from 'src/app/Navigation/carousel-builder/product.model';
import { mock_list } from 'src/app/Navigation/carousel-builder/mock_list';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
    title = 'Sheetz';
    products: ProductModel []=[];
    constructor(){
      for(var item of mock_list){
        console.log(item);
        this.products.push(item);
      }
    }
  }

