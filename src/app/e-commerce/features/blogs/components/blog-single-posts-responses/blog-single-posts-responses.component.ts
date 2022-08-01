import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/e-commerce/data/services/blogs.service';

@Component({
  selector: 'app-blog-single-posts-responses',
  templateUrl: './blog-single-posts-responses.component.html',
  styleUrls: ['./blog-single-posts-responses.component.css'],
})
export class BlogSinglePostsResponsesComponent implements OnInit {
  constructor(private BlogsService:BlogsService) {}

  ngOnInit(): void {}
  
  comments = this.BlogsService.comments;

  p: number = 1;
  
  responseData = [
    {
      id: 1,
      name: "Naomi Swanson",
      image: 'assets/images/blog/man-two.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 1,
      name: "Tanya Barton",
      image: 'assets/images/blog/man-four.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 1,
      name: "Lucas Phelps",
      image: 'assets/images/blog/man-three.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];
}
