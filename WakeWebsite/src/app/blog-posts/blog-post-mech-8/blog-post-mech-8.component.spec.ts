import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech8Component } from './blog-post-mech-8.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech8Component;
  let fixture: ComponentFixture<BlogPostMech8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
