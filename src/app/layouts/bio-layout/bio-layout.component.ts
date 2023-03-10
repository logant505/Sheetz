import { Component } from '@angular/core';
import { ProductModel } from '../card-builder/product.model';
import { mock_list } from '../card-builder/mocklist';

@Component({
  selector: 'app-bio-layout',
  templateUrl: './bio-layout.component.html',
  styleUrls: ['./bio-layout.component.css']
})
export class BioLayoutComponent {
  products:ProductModel []=[];
  constructor(){
    for(var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
}
