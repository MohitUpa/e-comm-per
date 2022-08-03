import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/e-commerce/core/services/auth.service';
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

  productDataInfo = [
    {
      id: 1,
      name: "watching Machine",
      quantity: "10",
      price: "10000",
      image1: "https://www.pngplay.com/wp-content/uploads/8/Automatic-Washing-Machine-PNG-Images-HD.png",
      image2: "https://www.pngplay.com/wp-content/uploads/8/Automatic-Washing-Machine-PNG-Images-HD.png",
      image3: "https://www.pngplay.com/wp-content/uploads/8/Laundry-Washing-Machine-PNG-HD-Quality.png",
      gst: "450",
      category: "1",
      description: "Best Waching Machine",
    },
    {
      id: 2,
      name: "Watch",
      quantity: "10",
      price: "600",
      image1: "https://www.pngitem.com/pimgs/m/115-1156789_watches-png-image-watch-images-png-transparent-png.png",
      image2: "https://www.pngitem.com/pimgs/m/115-1156813_watch-png-transparent-image-png-transparent-best-watch.png",
      image3: "https://www.pngitem.com/pimgs/m/115-1156824_download-watch-png-image-transparent-rolex-watch-png.png",
      gst: "30",
      category: "1",
      description: "Best Watch",
    },
    {
      id: 3,
      name: "mobile Phone",
      quantity: "10",
      price: "15000",
      image1: "http://clipart-library.com/image_gallery2/Samsung-Mobile-Phone-PNG-HD.png",
      image2: "https://www.kindpng.com/picc/m/422-4225211_new-mobile-phone-png-transparent-cartoons-smart-phones.png",
      image3: "http://clipart-library.com/image_gallery2/Samsung-Mobile-Phone-PNG-Image.png",
      gst: "350",
      category: "1",
      description: "Best Mobile phone",
    },
    {
      id: 4,
      name: "Television",
      quantity: "10",
      price: "25000",
      image1: "https://www.pngitem.com/pimgs/m/195-1950216_led-tv-png-hd-transparent-png.png",
      image2: "https://png.pngitem.com/pimgs/s/175-1755486_hd-tv-png-hisense-curved-smart-tv-transparent.png",
      image3: "https://www.pngitem.com/pimgs/m/175-1755357_huawei-tv-32-inch-hd-png-download.png",
      gst: "1050",
      category: "1",
      description: "Best Machine",
    },
    {
      id: 5,
      name: "Camera",
      quantity: "10",
      price: "20000",
      image1: "https://freepngimg.com/thumb/photo_camera/9-2-photo-camera-png-hd.png",
      image2: "https://freepngimg.com/thumb/photo%20camera/2-photo-camera-png-image.png",
      image3: "https://freepngimg.com/thumb/photo%20camera/4-photo-camera-png-image.png", 
      gst: "1050",
      category: "1",
      description: "Best Camera",
    },
    {
      id: 6,
      name: "refrigerator",
      quantity: "10",
      price: "40000",
      image1: "https://www.pngitem.com/pimgs/m/108-1080472_single-door-refrigerator-png-picture-samsung-refrigerator-single.png",
      image2: "https://www.pngitem.com/pimgs/m/194-1949759_godrej-rd-edge-duo-255-pd-inv-godrej.png",
      image3: "https://www.pngitem.com/pimgs/m/491-4916925_godrej-rd-edge-duo-255-pd-inv-godrej.png",
      gst: "1500",
      category: "1",
      description: "Best refrigerator",
    }
  ]

  constructor(
    private productDataService: ProductsService,
    private wishList: WishListService,
    private cartService: CartService,
    private authService:AuthService
  ) {}

  ngOnInit(): void {

    this.productDataInfo = this.authService.productDataOriginal;


    // this.subscription.add(this.authService
    //   .allProducts()
    //   .subscribe((product) => {
    //     console.log(product);
    //     this.productDataInfo.push(product.data);
    //   }));
    // this.subscription.add(this.productDataService
    //   .getData()
    //   .subscribe((product) => {
    //     this.productData = product.data;
    //   }));
  }

  addToWishList(data: any) {
    this.authService.wishlistDataOriginal.push(data);
    
      alert("Product Added to Wishlist");


    // this.subscription.add(
    //   this.wishList.addWishListData(data).subscribe()
    // );
  }

  addToCart(product: any) {
    console.log(product);
    this.authService.cartDataOriginal.push(product);
    
    // this.cartService.cart(product); 
    alert("Product Added to cart");

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
