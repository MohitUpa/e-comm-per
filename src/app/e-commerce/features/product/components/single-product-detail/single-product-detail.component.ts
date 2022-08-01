import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Params } from '@angular/router';
import { ProductsService } from 'src/app/e-commerce/data/services/products.service';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';

@Component({
  selector: 'app-single-product-detail',
  templateUrl: './single-product-detail.component.html',
  styleUrls: ['./single-product-detail.component.css'],
})
export class SingleProductDetailComponent implements OnInit, OnDestroy {
  
  productId: number;
  
  productDetails:Product['data'];

  subscription:Subscription;

  constructor(
    private productsService: ProductsService,
    private cartService:CartService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params: Params) => {
      this.productId = +params['id'];
    });
    this.subscription = this.productsService.getProductDetails(
      this.productId
    ).subscribe((product) => {
      this.productDetails = product.data;
    });
  }

  addtoCart(product:Product) {
    this.cartService.cart(product);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
