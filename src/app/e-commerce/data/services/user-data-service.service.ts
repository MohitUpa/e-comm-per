import { Injectable } from '@angular/core';
import { LoggedUser } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataServiceService {
  userData:LoggedUser;
  constructor() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  getUserData() {
    return this.userData;
  }
}
