import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GmapComponent } from './component/gmap/gmap.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path:'contact', component:ContactUsComponent }
]

@NgModule({
  declarations: [
    GmapComponent,
    ContactFormComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class ContactModule { }
