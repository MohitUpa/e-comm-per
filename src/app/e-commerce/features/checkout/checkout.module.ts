import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopperInfoComponent } from './components/shopper-info/shopper-info.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuardService } from '../../core/guards/auth-guard.service';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  { path:'checkout', component:CheckoutComponent,canActivate:[AuthGuardService]}
]

@NgModule({
  declarations: [
    ShopperInfoComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
