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

  allCategorys = [
    {
      id: 1,
      name: 'electronic'
    },
    {
      id: 2,
      name: 'Furniture'
    },
    {
      id: 3,
      name: 'Cloaths'
    },
    {
      id: 4,
      name: 'Mens'
    },
    {
      id: 5,
      name: 'Footwear'
    },
  ];

  subscription: Subscription = new Subscription;

  constructor(private authService: AuthService) {
    this.authService.allCategorys();
  }

  ngOnInit(): void {
    this.subscription.add(this.authService
      .allCategorys()
      .subscribe((product) => {
        console.log(product);
        // this.allCategorys = product.data;
      }));
  }


  onCatAdd(category: any) {
    this.authService.addCategory(category.value)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (errorMessage) => {
          console.log(errorMessage);
          alert(errorMessage);
        }
      );
    category.reset();
  }

  editCat(id: any) {
    this.editData = this.allCategorys.find(item => item.id === id);
    this.onEdit = true;
  }

  onCatUpdate(data: any) {
    console.log(data.value);    
    this.authService.updateCategory(data.value);
    this.onEdit = false;
    data.reset();
  }

  deleteCat(id: any) {
    console.log(id);
    this.authService.deleteCategory(id).subscribe((a) => {
      console.log(a);
    });
  }
}
