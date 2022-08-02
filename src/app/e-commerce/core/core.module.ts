import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/home/page-not-found/page-not-found.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { FeaturesItemIndexComponent } from './components/features-item-index/features-item-index.component';
import { DataModule } from '../data/data.module';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { AccountComponent } from './pages/account/account.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path: 'account', component:AccountComponent},
  {path: 'order-details', component:OrderDetailsComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    PageNotFoundComponent,
    PageNotFoundComponent,
    FeaturesItemIndexComponent,
    AccountComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    SharedModule,
    DataModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
