import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/router';
import { BlogsService } from 'src/app/e-commerce/data/services/blogs.service';

@Component({
  selector: 'app-blog-single-posts-comment',
  templateUrl: './blog-single-posts-comment.component.html',
  styleUrls: ['./blog-single-posts-comment.component.css']
})
export class BlogSinglePostsCommentComponent implements OnInit {

  constructor(private blogs:BlogsService) { }
  
  onSubmit(form: NgForm) {
    this.blogs.getComments(form.value);
    form.reset();
  }  

  ngOnInit(): void {
  }

}
