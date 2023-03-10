import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-builder',
  templateUrl: './card-builder.component.html',
  styleUrls: ['./card-builder.component.css']
})
export class CardBuilderComponent implements OnInit{
  @Input() title:string;
  @Input() description:string;
  @Input() description2:string;

  constructor(){
    this.title="";
    this.description="";
    this.description2="";
  }

ngOnInit():void{

}
}