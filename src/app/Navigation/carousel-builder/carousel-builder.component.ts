import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-builder',
  templateUrl: './carousel-builder.component.html',
  styleUrls: ['./carousel-builder.component.css']
})
export class CarouselBuilderComponent {
  @Input() imgOne:string;
  @Input() imgDescrOne:string;
  @Input() imgTwo:string;
  @Input() imgDescrTwo:string;
  @Input() imgThree:string;
  @Input() imgDescrThree:string;
  constructor(){
    this.imgOne="No Image found";
    this.imgDescrOne="No description found";
    this.imgTwo="No Image Found";
    this.imgDescrTwo="No Description found";
    this.imgThree="No Image Found";
    this.imgDescrThree="No Description Found";
  }
  ngOnInit():void{

  }
}
