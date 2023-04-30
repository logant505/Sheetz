import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model";
import {AngularFireDatabase} from "@angular/fire/compat/database";
@Injectable(
    {providedIn:'root'}
)
export class ProductsService{
    
    constructor(private db:AngularFireDatabase){

    }
    getProducts(){
        return this.db.list<ProductModel>("products").valueChanges();
    }
    getProduct(index:number){

    }
    addProducts(product:ProductModel){
        return this.db.list<ProductModel>("products").push(product);
    }
}