import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  onEdit = false;
  editData:any;

  allCategorys :any;

  subscription: Subscription = new Subscription;

  constructor(private authService: AuthService) {
    this.authService.allCategorys();
  }

  ngOnInit(): void {
    this.allCategorys = this.authService.categorysAll;
    // this.subscription.add(this.authService
    //   .allCategorys()
    //   .subscribe((product) => {
    //     console.log(product);
    //     this.allCategorys.push(product.data);
    //   }));
  }


  onCatAdd(category: any) {
    console.log(category);
    

    this.authService.categorysAll.push(category.value);

    // this.authService.addCategory(category.value)
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (errorMessage) => {
    //       console.log(errorMessage);
    //       alert(errorMessage);
    //     }
    //   );
    category.reset();
  }

  editCat(id: any) {
    this.editData = this.allCategorys.find(item => item.id === id);
    this.authService.categorysAll.splice(this.authService.categorysAll.indexOf(id),1);
    this.onEdit = true;
  }

  onCatUpdate(data: any) {

    this.authService.categorysAll.push(data.value);
    this.allCategorys = this.authService.categorysAll;
    // this.authService.updateCategory(data.value);
    this.onEdit = false;
    data.reset();
  }

  deleteCat(id: any) {
    this.authService.categorysAll.splice(this.authService.categorysAll.indexOf(id),1);
    console.log(id);
    // this.authService.deleteCategory(id).subscribe((a) => {
    //   console.log(a);
    // });
  }
}
