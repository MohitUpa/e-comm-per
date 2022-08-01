import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListBlogsComponent } from './components/blog-list-blogs/blog-list-blogs.component';
import { BlogListBlogsPaginationComponent } from './components/blog-list-blogs-pagination/blog-list-blogs-pagination.component';
import { BlogSinglePostsComponent } from './components/blog-single-posts/blog-single-posts.component';
import { BlogSinglePostsRatingAreaComponent } from './components/blog-single-posts-rating-area/blog-single-posts-rating-area.component';
import { BlogSinglePostsResponsesComponent } from './components/blog-single-posts-responses/blog-single-posts-responses.component';
import { BlogSinglePostsCommentComponent } from './components/blog-single-posts-comment/blog-single-posts-comment.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes:Routes = [
  { path:'blog-list', component:BlogListComponent },
  { path:'blog-single', component:BlogSingleComponent }
]

@NgModule({
  declarations: [
    BlogListBlogsComponent,
    BlogListBlogsPaginationComponent,
    BlogSinglePostsComponent,
    BlogSinglePostsRatingAreaComponent,
    BlogSinglePostsResponsesComponent,
    BlogSinglePostsCommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    BlogListBlogsComponent,
    BlogListBlogsPaginationComponent,
    BlogSinglePostsComponent,
    BlogSinglePostsRatingAreaComponent,
    BlogSinglePostsResponsesComponent,
    BlogSinglePostsCommentComponent
  ]
})
export class BlogModule { }
