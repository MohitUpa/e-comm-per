import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';
import { CheckoutService } from 'src/app/e-commerce/data/services/checkout.service';

@Component({
  selector: 'app-shopper-info',
  templateUrl: './shopper-info.component.html',
  styleUrls: ['./shopper-info.component.css']
})
export class ShopperInfoComponent implements OnInit {
  product: Product[] = [];
  constructor( private checkOutService:CheckoutService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe((data) => {
     this.product = data;
    });
  }

  onCheckout(form:NgForm){
    this.checkOutService.onCheckout(form.value,this.product);    
  }

}
