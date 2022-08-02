import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productData = [
    {
      id: 1,
      name: "watching Machine",
      quantity: "10",
      price: "10000",
      image1: "waching1.png",
      image2: "waching2.png",
      image3: "waching3.png",
      gst: "450",
      category: "1",
      description: "Best Waching Machine",
    },
    {
      id: 2,
      name: "Machine",
      quantity: "10",
      price: "1000",
      image1: "wach1.png",
      image2: "wach2.png",
      image3: "wach3.png",
      gst: "50",
      category: "1",
      description: "Best Machine",
    }
  ]

  onEdit = false;
  editData: any;

  subscription: Subscription = new Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription.add(this.authService
      .allProducts()
      .subscribe((product) => {
        console.log(product);
        // this.allCategorys = product.data;
      }));
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
    this.authService.addProduct(productData.value).subscribe(
      (response) => {
      },
      (errorMessage) => {     
        alert(errorMessage);
      }
    );
    productData.reset();
  }

  editProduct(id: any) {
    this.editData = this.productData.find(item => item.id === id);
    this.onEdit = true;
  }

  onProductUpdate(data: any) {
    console.log(data.value);
    this.productData = [data.value];
    this.authService.updateProduct(data.value);
    this.onEdit = false;
    data.reset();
  }

  deleteProduct(id: any) {
    console.log(id);
    this.productData.splice(this.productData.indexOf(id), 1);
    this.authService.deleteProduct(id).subscribe((a) => {
      console.log(a);
    });
  }
}
