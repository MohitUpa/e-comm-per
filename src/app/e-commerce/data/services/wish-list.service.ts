import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { wishList } from '../models/wish-list.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WishListService {

  constructor(private http: HttpClient, private route: Router) {}

  wishListServiceData: 'http://95.111.202.157/mangoproject/public/api/wishlist';

  addWishListData(data: Product) {
    // if (this.daata.find((item) => item['id'] === data['id'])) {
    //   alert('The product alredy exist in wish list');
    //   return;
    // }
       
    let userData = JSON.parse(localStorage.getItem('userData'));
    let url = 'http://95.111.202.157/mangoproject/public/api/wishlist';
    return this.http.post<wishList>(url, {
      user_id: userData.userId,
      product_id: data['id']
    });
    // if (localStorage.length != 0) {
    //   if (this.wishListServiceData.find((item) => item['id'] === data['id'])) {
    //     alert('The product alredy exist in wish list');
    //     return;
    //   }
    //   this.wishListServiceData.push(data);
    //   alert('The product is added to wish list');
    // } else {
    //   this.route.navigate(['/login']);
    // }
  }

  getWishListData() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    let url = 'http://95.111.202.157/mangoproject/public/api/wishlist-display';
    return this.http.post<wishList>(url, { user_id: userData.userId });
  }

  removeProduct(id) {
    let url = 'http://95.111.202.157/mangoproject/public/api/wishlist-remove/' + id;
    return this.http.get<wishList>(url);
  }
}

// getProductDetails(id: number) {
//   let url =
//     'http://95.111.202.157/mangoproject/public/api/product-details/' + id;
//   return this.http.get<ProductDetails>(url);
// }
