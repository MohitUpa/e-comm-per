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

  // token = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) { }

  user = new BehaviorSubject<LoggedUser>(null);

  signUpUser(userData: any) {
    return this.http
      .post('http://3.84.210.45:8080/register', {
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
      .post('http://3.84.210.45:8080/authenticate', {
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
    let url = 'http://3.84.210.45:8080/api/category/get-all';
    return this.http.get<any>(url);

    // return this.token.pipe(take(1), exhaustMap(user=> {
    //   return this.http.get<any>(url);
    // }))
  }

  allProducts() {
    let url = 'http://3.84.210.45:8080/api/product/get-all';
    return this.http.get<any>(url);
  }

  addCategory(data: any) {
    console.log(data.categoryName);
    return this.http
      .post('http://3.84.210.45:8080/api/category/add', {
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
      .post('http://3.84.210.45:8080/api/product/add', {
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
    this.http.put<any>('http://3.84.210.45:8080/api/category/edit',
    {
      id: updatedCatData.id,
      name: updatedCatData.name,
    })
    .subscribe(response => {
      console.log(response);
    });
  }

  updateProduct(updatedData: any) {
    this.http.put<any>('http://3.84.210.45:8080/api/product/edit',
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
    let url = 'http://3.84.210.45:8080/api/category/delete?id=' + id;
    return this.http.delete<any>(url);
  }

  deleteProduct(id: any) {
    let url = 'http://3.84.210.45:8080/api/product/delete?id=' + id;
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
