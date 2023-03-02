import { Component } from '@angular/core';
import { ProductModel } from './carousel-builder/product.model';
import { mock_list } from './carousel-builder/mock_list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sheetz';
  products: ProductModel []=[];
  constructor(){
    for(var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
}
