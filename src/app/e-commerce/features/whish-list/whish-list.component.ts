import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WishListService } from '../../data/services/wish-list.service';

@Component({
  selector: 'app-whish-list',
  templateUrl: './whish-list.component.html',
  styleUrls: ['./whish-list.component.css'],
})
export class WhishListComponent implements OnInit {
  constructor(private wishList: WishListService) {}

  wishListData;

  subscription;

  deleteProduct(id) {
    this.wishList.removeProduct(id).subscribe((a) => {
      console.log(a);
    });
  }

  ngOnInit(): void {
    this.subscription = this.wishList.getWishListData().subscribe((data) => {
      this.wishListData = data.data;
    });
  }
}

// this.productDataService
//       .getData()
//       .subscribe((product) => {
//         this.productData = product.data;
//       });
