import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

}
   