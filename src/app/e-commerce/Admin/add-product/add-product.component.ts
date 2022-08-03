import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productData:any;

  onEdit = false;
  editData: any;

  subscription: Subscription = new Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.productData = this.authService.productDataOriginal;
    // this.subscription.add(this.authService
    //   .allProducts()
    //   .subscribe((product) => {
    //     console.log(product);
    //     this.productData.push(product.data);
    //   }));
  }

  imageUrl: any;
  imageUrl2: any;
  imageUrl3: any;
  readURL(val: any) {
    console.log(val);
    this.imageUrl = val.value;
  }
  readURL2(val1: any) {
    console.log(val1);
    this.imageUrl2 = val1.value;
  }
  readURL3(val2: any) {
    console.log(val2.value);
    this.imageUrl3 = val2.value;
  }

  onProductAdd(productData: any) {
    console.log(productData.value);
    this.authService.productDataOriginal.push(productData.value);
    console.log(this.authService.productDataOriginal);
    
    
    // this.authService.addProduct(productData.value).subscribe(
    //   (response) => {
    //   },
    //   (errorMessage) => {     
    //     alert(errorMessage);
    //   }
    // );
    productData.reset();
  }

  editProduct(id: any) {
    this.editData = this.productData.find(item => item.id === id);
    this.authService.productDataOriginal.splice(this.authService.productDataOriginal.indexOf(id),1);
    this.onEdit = true;
  }

  onProductUpdate(data: any) {
    console.log(data.value);

    this.authService.productDataOriginal.push(data.value);
    this.productData = this.authService.productDataOriginal;
    // this.productData = [data.value];
    // this.authService.updateProduct(data.value);
    this.onEdit = false;
    data.reset();
  }

  deleteProduct(id: any) {
    console.log(id);
    this.authService.productDataOriginal.splice(this.authService.productDataOriginal.indexOf(id),1);
    // this.authService.deleteProduct(id).subscribe((a) => {
    //   console.log(a);
    // });
  }
}
