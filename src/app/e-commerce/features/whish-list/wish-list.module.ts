import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishListComponent } from './whish-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'wish-list',
    component: WhishListComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  declarations: [WhishListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WishListModule {}
