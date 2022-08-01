import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSinglePostsResponsesComponent } from './blog-single-posts-responses.component';

describe('BlogSinglePostsResponsesComponent', () => {
  let component: BlogSinglePostsResponsesComponent;
  let fixture: ComponentFixture<BlogSinglePostsResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSinglePostsResponsesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSinglePostsResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
