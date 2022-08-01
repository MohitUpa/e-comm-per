import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
})
export class ActionComponent implements OnInit, AfterContentChecked, OnDestroy {
  totalAmount: number = 0;
  subscription: Subscription;

  constructor(
    private cartService: CartService,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.subscription = this.cartService.emitTotalAmount.subscribe((amount) => {
      this.totalAmount = amount;
    });
    this.cdref.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
