import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-product-detail-nav',
  templateUrl: './product-detail-nav.component.html',
  styleUrls: ['./product-detail-nav.component.css'],
})
export class ProductDetailNavComponent implements OnInit {
  constructor() {}

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  isMouseover = true;

  productData = [
    {
      id: 1,
      product_name: "Easy Polo Black Edition",
      banner: "http://95.111.202.157/mangoproject/public/images/1658323272.product4.jpg",
      price: "55",
      Web_ID: "awdesaw",
      Availability: "adaewd",
      Condition: "dqaswdea",
      Brand: "sfdsf",
      details: "sdff",
    }
  ]

  countStar(star: number) {
    this.isMouseover = false;
    this.selectedValue = star;
  }

  addClass(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
    }
  }

  removeClass() {
    if (this.isMouseover) {
      this.selectedValue = 0;
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.selectedValue);
    
  }  

  ngOnInit(): void {}
}
