import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { Banner } from 'src/app/e-commerce/data/models/banner.model';
import { BannerService } from 'src/app/e-commerce/data/services/banner.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  banner:Banner["data"];
  subscription: Subscription;

  constructor( private bannerService:BannerService ) { }

  ngOnInit(): void {
    this.subscription = this.bannerService.getBanner().subscribe(
      bannerData => {
        this.banner = bannerData.data; 
      }
    )
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: true
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
