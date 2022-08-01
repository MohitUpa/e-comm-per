import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from '../models/banner.model';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(private http: HttpClient) {}

  getBanner() {
    return this.http.get<Banner>(
      'http://95.111.202.157/mangoproject/public/api/shop-banner-show'
    );
  }
}
