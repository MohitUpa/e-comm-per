import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class RecommendedItemsService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<Product>(
      'http://95.111.202.157/mangoproject/public/api/recommended-filter-product'
    );
  }
}
