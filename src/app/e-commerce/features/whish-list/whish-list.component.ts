import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { WishListService } from '../../data/services/wish-list.service';

@Component({
  selector: 'app-whish-list',
  templateUrl: './whish-list.component.html',
  styleUrls: ['./whish-list.component.css'],
})
export class WhishListComponent implements OnInit {
  constructor(private wishList: WishListService, private authService:AuthService) {}

  wishListData:any;

  subscription;

  deleteProduct(id) {
    this.authService.wishlistDataOriginal.splice(this.authService.wishlistDataOriginal.indexOf(id), 1);
    // this.wishList.removeProduct(id).subscribe((a) => {
    //   console.log(a);
    // });
  }

  ngOnInit(): void {

    this.wishListData = this.authService.wishlistDataOriginal;

    // this.subscription = this.wishList.getWishListData().subscribe((data) => {
    //   this.wishListData = data.data;
    // });
  }
}

// this.productDataService
//       .getData()
//       .subscribe((product) => {
//         this.productData = product.data;
//       });


// eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbm9mZmljaWFsQGdtYWlsLmNvbSIsImV4cCI6MTY1OTU2NzY3NCwidXNlciI6eyJpZCI6MTksImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJBZG1pbiIsImVtYWlsSWQiOiJhZG1pbm9mZmljaWFsQGdtYWlsLmNvbSIsIm1vYmlsZU51bWJlciI6IjkzMjk5MDAwNDEiLCJwYXNzd29yZCI6IiQyYSQxMCRnb1E0aUtRbWFLYnB4UVN4UEFhMzdPVE81d1dheHM5dGl1d2R0RVR0UTRZVERQMnNjL21waSIsInJvbGUiOiJVU0VSIiwiZGlzY291bnRDb3Vwb25zIjpbXX0sImlhdCI6MTY1OTU0OTY3NH0.WEXyqDrr9Bpz9D-3hLY5kfv-aRc6UgmS4psKZ0LqCIyrYeCfmFC4cDKqH50AqQx3_tAt0FFdxOZHbeKLoO9XtA