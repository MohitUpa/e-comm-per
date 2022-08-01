import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './e-commerce/Admin/add-category/add-category.component';
import { AddProductComponent } from './e-commerce/Admin/add-product/add-product.component';
import { HomeComponent } from './e-commerce/core/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'admin/product', component: AddProductComponent},
  {path:'admin/category', component: AddCategoryComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
