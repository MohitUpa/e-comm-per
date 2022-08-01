import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',  
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

   imageUrl:any;
  imageUrl2:any;
  imageUrl3:any;
  readURL(val:any) {
    console.log(val);
    this.imageUrl = val.value;
  }
  readURL2(val1:any) {
    console.log(val1);
    this.imageUrl2 = val1.value;
  }
  readURL3(val2:any) {
    console.log(val2.value);
    this.imageUrl3 = val2.value;
  }

  onProductAdd(productData:any) {
    console.log(productData.value);
    this.authService.addProduct(productData.value).subscribe(
      (response) => {        
      },
      (errorMessage) => {
        alert(errorMessage);
      }
    );
    productData.reset();
    
  }
}
