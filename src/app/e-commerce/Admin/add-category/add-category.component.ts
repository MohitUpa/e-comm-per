import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onCatAdd(category:any) {
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
}
  