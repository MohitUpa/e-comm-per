import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/e-commerce/core/services/auth.service';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('signUpForm') signUpForm: NgForm;
  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  onLogin() {
    
    this.authService.signInUser(this.loginForm.value).subscribe(
      (response) => {        
        this.router.navigate(['']);
        this.cartService.getCartProducts().subscribe();
      },
      (errorMessage) => {
        alert(errorMessage);
      }
    );
    this.loginForm.reset();
  }

  onSignUp() {    
    this.authService.signUpUser(this.signUpForm.value).subscribe(
      (response) => {       
        alert('Registered Successfully,Please Login to Continue');
      },
      (errorMessage) => {
       alert(errorMessage);
      }
    );
    this.signUpForm.reset();


    
    // this.authService.signUp(this.signUpForm.value).subscribe(
    //   (response) => {
    //     alert('Registered Successfully,Please Login to Continue');
    //   },
    //   (errorMessage) => {
    //    alert(errorMessage);
    //   }
    // );
    // this.signUpForm.reset();
  }
}
