import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { ProductsService } from 'src/app/e-commerce/data/services/products.service';
import { WishListService } from 'src/app/e-commerce/data/services/wish-list.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';

@Component({
  selector: 'app-features-item-index',
  templateUrl: './features-item-index.component.html',
  styleUrls: ['./features-item-index.component.css'],
})
export class FeaturesItemIndexComponent implements OnInit, OnDestroy {
  productData: Product['data'];

  subscription: Subscription;

  constructor(
    private productDataService: ProductsService,
    private WishListService: WishListService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.subscription = this.productDataService
      .getHomeFeatureData()
      .subscribe((product) => {
        this.productData = product.data;
      });
  }

  addToWhishlist(product: Product) {
    this.WishListService.addWishListData(product);
  }

  addToCart(data: Product) {
    this.cartService.cart(data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
