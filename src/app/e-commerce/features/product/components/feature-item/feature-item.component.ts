import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';
import { ProductsService } from 'src/app/e-commerce/data/services/products.service';
import { WishListService } from 'src/app/e-commerce/data/services/wish-list.service';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.css'],
})
export class FeatureItemComponent implements OnInit, OnDestroy {
  productData: Product['data'];
  subscription: Subscription = new Subscription;
  page: number = 1;

  constructor(
    private productDataService: ProductsService,
    private wishList: WishListService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.productDataService
      .getData()
      .subscribe((product) => {
        this.productData = product.data;
      }));
  }

  addToWishList(data: Product) {
    this.subscription.add(
      this.wishList.addWishListData(data).subscribe()
    );
  }

  addToCart(product: Product) {
    this.cartService.cart(product);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
