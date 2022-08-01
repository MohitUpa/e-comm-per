import { Component, OnInit } from '@angular/core';
import { makeArray } from 'jquery';

@Component({
  selector: 'app-blog-list-blogs',
  templateUrl: './blog-list-blogs.component.html',
  styleUrls: ['./blog-list-blogs.component.css']
})
export class BlogListBlogsComponent implements OnInit {

  constructor() { }

  showPost = [
    {
      id:1,
      name:'Mark Zukerberg',
      image:'assets/images/blog/blog-one.jpg',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id:1,
      name:'Bill Gates',
      image:'assets/images/blog/blog-two.jpg',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id:1,
      name:'Sundar Pichai',
      image:'assets/images/blog/blog-three.jpg',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
  ]

  ngOnInit(): void {
  }


}
