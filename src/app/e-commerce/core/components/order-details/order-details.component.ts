import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CheckoutService } from 'src/app/e-commerce/data/services/checkout.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  subscription:Subscription;
  orderListData;

  constructor(private CheckoutService:CheckoutService) { }
  

  ngOnInit(): void {
    this.subscription = this.CheckoutService.oderList().subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
