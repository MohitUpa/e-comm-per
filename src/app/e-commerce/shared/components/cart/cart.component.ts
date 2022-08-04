import {
  AfterContentChecked,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/e-commerce/core/services/auth.service';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';
import { CheckoutService } from 'src/app/e-commerce/data/services/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, AfterContentChecked, OnDestroy {
  showTotal: boolean = true;
  product: any = [];
  totalAmount: number = 0;
  checkoutDetails: {};
  Subscription: Subscription = new Subscription();
  quant:any = 1;

  constructor(
    private router: Router,
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.router.url === '/cart') {
      this.showTotal = false;
    }

    this.product = this.authService.cartDataOriginal;
    

    // this.Subscription.add(
    //   this.cartService
    //     .getCartProducts()
    //     .subscribe((data) => (this.product = data))
    // );

    // this.Subscription.add(
    //   this.cartService.emitCartProducts.subscribe((data) => {
    //     data.subscribe((product) => (this.product = product));
    //   })
    // );

    this.Subscription.add(
      this.checkoutService.details.subscribe((details) => {
        this.checkoutDetails = details;
      })
    );
  }

  ngAfterContentChecked(): void {
    
    if (this.product.length != 0) {
      this.totalAmount = this.product
        .map((cartProduct) => cartProduct['price'] * cartProduct['quant'])
        .reduce((amount, value) => amount + value, 0);
      this.cartService.emitTotalAmount.next(this.totalAmount);
    } else {
      this.cartService.emitTotalAmount.next(0);
    }
  }
 
  add(product) {
    console.log(product);
    
    this.cartService.cart(product);
    this.cartService.emitCartProducts.next(this.cartService.getCartProducts());
  }

  substract(product, remove) {
    if (product.quant >= 2) {
      this.cartService.cart(product, remove);
    }
    this.cartService.emitCartProducts.next(this.cartService.getCartProducts());
  }

  removeItem(id: number) {
    this.cartService.removeCartProduct(id).subscribe();
    this.cartService.emitCartProducts.next(this.cartService.getCartProducts());
  }

  payout() {
    if (!this.checkoutDetails) {
      alert('Please enter & confirm your shipping details');
    } else {

      this.router.navigate(["/order-sucess"]);
      this.Subscription.add(
        this.checkoutService
          .onPayout(this.product, this.totalAmount)
          .subscribe((data) => console.log(data))
      );
    }
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
