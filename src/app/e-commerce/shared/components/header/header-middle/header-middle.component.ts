import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/e-commerce/core/services/auth.service';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.css'],
})
export class HeaderMiddleComponent implements OnInit , OnChanges{
  isAuthenticated: boolean = false;
  cartValue: number;
  product: Product[] = [];
  isAdmin  = true;

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {


    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });

    if (this.isAuthenticated) {
      this.cartService
        .getCartProducts()
        .subscribe((cartProduct) => {
          this.product = cartProduct;
        });

      this.cartService.emitCartProducts.subscribe((data) => {
        data.subscribe((product) => (this.product = product));
      });
    }

    this.cartService.cartQuantity.subscribe((cartvalue) => {
      this.cartValue = cartvalue;
    });
  }

  onLogout() {
    this.authService.logOut();
    this.cartValue = null;
  }


}
