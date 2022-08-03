import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, exhaustMap, map, take, tap, throwError } from 'rxjs';
import { LoggedUser } from '../../data/models/login.model';
import { RespData } from '../../data/models/responseData.model';
import { User } from '../../data/models/userData.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  productDataOriginal = [
    {
      id: 1,
      name: "watching Machine",
      quantity: "10",
      price: "10000",
      image1: "https://www.pngplay.com/wp-content/uploads/8/Automatic-Washing-Machine-PNG-Images-HD.png",
      image2: "https://www.pngplay.com/wp-content/uploads/8/Automatic-Washing-Machine-PNG-Images-HD.png",
      image3: "https://www.pngplay.com/wp-content/uploads/8/Laundry-Washing-Machine-PNG-HD-Quality.png",
      gst: "450",
      category: "1",
      description: "Best Waching Machine",
    },
    {
      id: 2,
      name: "Watch",
      quantity: "10",
      price: "600",
      image1: "https://www.pngitem.com/pimgs/m/115-1156789_watches-png-image-watch-images-png-transparent-png.png",
      image2: "https://www.pngitem.com/pimgs/m/115-1156813_watch-png-transparent-image-png-transparent-best-watch.png",
      image3: "https://www.pngitem.com/pimgs/m/115-1156824_download-watch-png-image-transparent-rolex-watch-png.png",
      gst: "30",
      category: "1",
      description: "Best Watch",
    },
    {
      id: 4,
      name: "Television",
      quantity: "10",
      price: "25000",
      image1: "https://www.pngitem.com/pimgs/m/195-1950216_led-tv-png-hd-transparent-png.png",
      image2: "https://png.pngitem.com/pimgs/s/175-1755486_hd-tv-png-hisense-curved-smart-tv-transparent.png",
      image3: "https://www.pngitem.com/pimgs/m/175-1755357_huawei-tv-32-inch-hd-png-download.png",
      gst: "1050",
      category: "1",
      description: "Best Machine",
    },
    {
      id: 5,
      name: "Camera",
      quantity: "10",
      price: "20000",
      image1: "https://freepngimg.com/thumb/photo_camera/9-2-photo-camera-png-hd.png",
      image2: "https://freepngimg.com/thumb/photo%20camera/2-photo-camera-png-image.png",
      image3: "https://freepngimg.com/thumb/photo%20camera/4-photo-camera-png-image.png", 
      gst: "1050",
      category: "1",
      description: "Best Camera",
    },
    {
      id: 6,
      name: "refrigerator",
      quantity: "10",
      price: "40000",
      image1: "https://www.pngitem.com/pimgs/m/108-1080472_single-door-refrigerator-png-picture-samsung-refrigerator-single.png",
      image2: "https://www.pngitem.com/pimgs/m/194-1949759_godrej-rd-edge-duo-255-pd-inv-godrej.png",
      image3: "https://www.pngitem.com/pimgs/m/491-4916925_godrej-rd-edge-duo-255-pd-inv-godrej.png",
      gst: "1500",
      category: "1",
      description: "Best refrigerator",
    }
  ]

  categorysAll:any = [
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
  
  cartDataOriginal = [];

  wishlistDataOriginal = [];

  // token = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) { }

  user = new BehaviorSubject<LoggedUser>(null);

  signUpUser(userData: any) {
    return this.http
      .post('http://3.86.33.184:8080/register', {
        firstName: userData.firstName,
        lastName: userData.lastName,
        emailId: userData.email,
        mobileNumber: userData.mobileNumber,
        password: userData.password,
        role: "USER",
        discountCoupons: null
      })
      .pipe(
        catchError(this.handleError),
        tap((respData) => { })
      );
  }

  signInUser(userData: { email: string; password: string }) {
    console.log(userData);

    return this.http
      .post('http://3.86.33.184:8080/authenticate', {
        username: userData.email,
        password: userData.password,
      })
      .pipe(
        catchError(this.handleError),
        tap((respData: any) => {
          console.log(respData);

          this.handleAuth(
            respData.token
          );
        })
      );
  }

  allCategorys() {
    let url = 'http://3.86.33.184:8080/api/category/get-all';
    return this.http.get<any>(url);

    // return this.token.pipe(take(1), exhaustMap(user=> {
    //   return this.http.get<any>(url);
    // }))
  }

  allProducts() {
    let url = 'http://44.204.38.40:8080/api/product/get-all';
    return this.http.get<any>(url);
  }

  addCategory(data: any) {
    console.log(data.categoryName);
    return this.http
      .post('http://44.204.38.40:8080/api/category/add', {
        name: data.name
      })
      .pipe(
        catchError(this.handleError),
        tap((respData) => {
          console.log(respData)

        })
      );
  }

  addProduct(product: any) {
    console.log(product);
    return this.http
      .post('http://44.204.38.40:8080/api/product/add', {
        name: product.name,
        description: product.description,
        searchKeywordList: ["Shirt", "casual", "red shirt"],
        category: {
          id: product.category
        },
        image1: product.image1,
        image2: product.image2,
        image3: product.image3,
        price: product.price,
        gst: product.gst,
        qty: product.quantity
      })
      .pipe(
        catchError(this.handleError),
        tap((respData) => { })
      );

  }

  updateCategory(updatedCatData: any) {
    this.http.put<any>('http://44.204.38.40:8080/api/category/edit',
    {
      id: updatedCatData.id,
      name: updatedCatData.name,
    })
    .subscribe(response => {
      console.log(response);
    });
  }

  updateProduct(updatedData: any) {
    this.http.put<any>('http://44.204.38.40:8080/api/product/edit',
      {
        id: updatedData.id,
        name: updatedData.name,
        description: updatedData.description,
        searchKeywordList: ["T-Shirt", "Polo", "yellow t-shirt"],
        category: {
          "id": updatedData.category
        },
        price: updatedData.price,
        gst: updatedData.gst,
        qty: updatedData.quantity
      })
      .subscribe(response => {
        console.log(response);
      });
  }

  deleteCategory(id: any) {
    let url = 'http://44.204.38.40:8080/api/category/delete?id=' + id;
    return this.http.delete<any>(url);
  }

  deleteProduct(id: any) {
    let url = 'http://44.204.38.40:8080/api/product/delete?id=' + id;
    return this.http.delete<any>(url);
  }

  logOut() {
    this.user.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new LoggedUser(
      userData.email,
      userData.id,
      userData._token,
    );
    this.user.next(loadedUser);
  }

  myToken: any;

  private handleAuth(token: string) {

    this.myToken = token;

    let email = "test@gmail.com";
    let userId = "123";
    const user = new LoggedUser(email, userId, token);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errResponse.error || !errResponse.error.data) {
      return throwError(errorMessage);
    }

    if (errResponse.error.message) {
      errorMessage = errResponse.error.message;
    }

    for (const [key, val] of Object.entries(errResponse.error.data)) {
      switch (key) {
        case 'first_name':
          errorMessage = val[0];
          break;
        case 'last_name':
          errorMessage = val[0];
          break;
        case 'email':
          errorMessage = val[0];
          break;
        case 'password':
          errorMessage = val[0];
          break;
      }
    }

    return throwError(errorMessage);
  }
}
