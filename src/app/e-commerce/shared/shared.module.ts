import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RecommendedItemsComponent } from './components/recommended-items/recommended-items.component';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';
import { HeaderBottomComponent } from './components/header/header-bottom/header-bottom.component';
import { HeaderMiddleComponent } from './components/header/header-middle/header-middle.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductNavigateComponent } from './components/product-navigate/product-navigate.component';
import { CartComponent } from './components/cart/cart.component';
import { NouisliderModule } from 'ng2-nouislider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FilterBarComponent,
    LoaderComponent,
    RecommendedItemsComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    HeaderMiddleComponent,
    ProductNavigateComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    NouisliderModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FilterBarComponent,
    LoaderComponent,
    RecommendedItemsComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    ProductNavigateComponent,
    HeaderMiddleComponent,
    CartComponent,
  ],
})
export class SharedModule {}
