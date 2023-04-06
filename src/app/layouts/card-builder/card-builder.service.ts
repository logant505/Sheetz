import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model";

@Injectable(
    {providedIn:'root'}
)
export class ProductsService{
    private baseUrl:string="https://console.firebase.google.com/project/sheetz-6c1c5/database/sheetz-6c1c5-default-rtdb/data/~2F";
    private productsEndPoint="Products.json";

    constructor(private http:HttpClient){

    }
    getProducts(){
        return this.http.get<ProductModel []>(this.baseUrl+this.productsEndPoint)
    }
}