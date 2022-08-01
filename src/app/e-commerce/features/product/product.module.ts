import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SharedModule } from '../../shared/shared.module';
import { FeatureItemComponent } from './components/feature-item/feature-item.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductDetailNavComponent } from './components/product-detail-nav/product-detail-nav.component';
import { SingleProductDetailComponent } from './components/single-product-detail/single-product-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { ProductMainComponent } from './pages/product-main/product-main.component';
import { FormsModule } from '@angular/forms';

const productRoutes: Routes = [
  {
    path: 'product',
    component: ProductMainComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductDetailsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    FeatureItemComponent,
    ProductDetailNavComponent,
    SingleProductDetailComponent,
    ProductMainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    RouterModule.forChild(productRoutes),
    FormsModule,
  ],
  exports: [
    ProductDetailsComponent,
    ProductListComponent,
    ProductDetailNavComponent,
  ],
})
export class ProductModule {}
