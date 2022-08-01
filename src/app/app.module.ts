import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './e-commerce/features/blogs/pages/blog-list/blog-list.component';
import { BlogSingleComponent } from './e-commerce/features/blogs/pages/blog-single/blog-single.component';
import { SharedModule } from './e-commerce/shared/shared.module';
import { CoreModule } from './e-commerce/core/core.module';
import { AuthModule } from './e-commerce/features/auth/auth.module';
import { BlogModule } from './e-commerce/features/blogs/blog.module';
import { ProductModule } from './e-commerce/features/product/product.module';
import { CartModule } from './e-commerce/features/cart/cart.module';
import { CheckoutModule } from './e-commerce/features/checkout/checkout.module';
import { ContactModule } from './e-commerce/features/contact/contact.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishListModule } from './e-commerce/features/whish-list/wish-list.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './e-commerce/core/interceptors/auth-interceptor.service';
import { AddCategoryComponent } from './e-commerce/Admin/add-category/add-category.component';
import { AddProductComponent } from './e-commerce/Admin/add-product/add-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BlogListComponent, BlogSingleComponent,AddCategoryComponent,AddProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    AuthModule,
    BlogModule,
    ProductModule,
    CartModule,
    CheckoutModule,
    ContactModule,
    WishListModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
