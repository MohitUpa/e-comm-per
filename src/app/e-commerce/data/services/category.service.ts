import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  getCategory() {
    return this.http.get<Category>("http://95.111.202.157/mangoproject/public/api/shop-category").pipe(
      map( category => {
        return category.data;
      })
    )
  }

}
