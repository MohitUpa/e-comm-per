import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { LoggedUser } from '../../data/models/login.model';
import { RespData } from '../../data/models/responseData.model';
import { User } from '../../data/models/userData.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  user = new BehaviorSubject<LoggedUser>(null);

  signUpUser(userData: any) {    
    return this.http
      .post('http://18.209.167.82:8080/register', {
        firstName: userData.firstName,
        lastName: userData.lastName,
        emailId: userData.email,
        mobileNumber:userData.mobileNumber,
        password: userData.password,
        role: "USER",
        discountCoupons: null
      })
      .pipe(
        catchError(this.handleError),
        tap((respData) => {})
      );
  }

  signInUser(userData: { email: string; password: string }) {
    console.log(userData);


    
    return this.http
      .post('http://18.209.167.82:8080/authenticate', {
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

  addCategory(data: any) { 
    console.log(data.categoryName);

    // var url = "http://localhost:4200/";

    // let config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     'Access-Control-Allow-Origin': '*',
    //     }
    //   }

    // var header = {
    //   headers: new HttpHeaders()
    //     .set('Authorization',  `Bearer ${this.authService.myToken}`)
    // }
    
    // this.http.get(url, header)
       
    return this.http
      .post('http://18.209.167.82:8080/api/category/add', {
        name: data.categoryName
      })
       .pipe(
        catchError(this.handleError),
        tap((respData) => {
          console.log(respData)
          
        })
      );
  }

  addProduct(product:any) {
    console.log(product);
    return this.http
    .post('http://54.173.136.36:8080/api/product/add', {
      name: product.productName,
      description: product.description,
      searchKeywordList: ["Shirt","casual","red shirt"],
      category: {
          id: product.category
      },
      image1: product.imageUrl,
      image2: product.imageUrl2,
      image3: product.imageUrl3,
      price: product.productPrice,
      gst: product.gst,
      qty: product.productQty
    })
    .pipe(
      catchError(this.handleError),
      tap((respData) => {})
    );
      
  }

  signUp(userData: User) {
    return this.http
      .post('http://95.111.202.157/mangoproject/public/api/signup', {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password,
      })
      .pipe(
        catchError(this.handleError),
        tap((respData) => {})
      );
  }


  signIn(userData: { email: string; password: string }) {
    return this.http
      .post<RespData>('http://95.111.202.157/mangoproject/public/api/login', {
        email: userData['email'],
        password: userData['password'],
      })
      .pipe(
        catchError(this.handleError),
        tap((respData: RespData) => {          
          this.handleAuth(
            respData.data.token
          );
        })
      );
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

  myToken : any;

  private handleAuth(token: string) {
 
    this.myToken = token;

    let email = "mohit531531@gmail.com";
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
