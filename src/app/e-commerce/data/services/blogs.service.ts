import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }

  comments =[];

  getComments(blog) {
    this.comments.push(blog);
    console.log(this.comments);
    
  }

}
