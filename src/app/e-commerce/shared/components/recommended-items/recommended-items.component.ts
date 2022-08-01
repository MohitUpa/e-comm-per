import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';
import { RecommendedItemsService } from 'src/app/e-commerce/data/services/recommended-items.service';

@Component({
  selector: 'app-recommended-items',
  templateUrl: './recommended-items.component.html',
  styleUrls: ['./recommended-items.component.css'],
})
export class RecommendedItemsComponent implements OnInit, OnDestroy {
  items: Product['data'];
  subscription: Subscription;

  constructor(
    private recommendedItemServise: RecommendedItemsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.subscription = this.recommendedItemServise
      .getItems()
      .subscribe((itemData) => {
        this.items = itemData.data;
      });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  addToCart(product: Product) {
    this.cartService.cart(product);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
