import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private authService:AuthService) { }

  addCategory(data: any) { 
    console.log(data.categoryName);
    var url = "http://localhost:4200/";

    // var header = {
    //   headers: new HttpHeaders()
    //     .set('Authorization',  `Bearer ${this.authService.myToken}`)
    // }
    
    // this.http.get(url, header)
       
    return this.http
      .post('http://3.89.117.1:8080/api/category/add', {
        name: data.categoryName
      })
      .pipe(
        tap((respData) => {
          console.log(respData);
          
        })
      );
  }
}
   