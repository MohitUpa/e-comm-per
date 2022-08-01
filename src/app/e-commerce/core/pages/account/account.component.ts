import { Component, OnInit } from '@angular/core';
import { LoggedUser } from 'src/app/e-commerce/data/models/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  first_name: string;
  last_name: string;
  email: string;

  onEdit = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.first_name = 'Mohit';
    this.last_name = 'Upadhyay';
    this.email = 'mohitu531@gmail.com';
  }
  edit() {
    this.onEdit = true;
  }

  update(f) {
    console.log(f.value);
    this.onEdit = false;
  }
}
