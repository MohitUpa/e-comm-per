import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './pages/action/action.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../core/guards/auth-guard.service';

const routes:Routes = [
  { path: 'cart', component: ActionComponent,canActivate:[AuthGuardService]}
]

@NgModule({
  declarations: [
    ActionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CartModule { }
