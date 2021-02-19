import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSoft4Component } from './blog-post-soft-4.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostSoft4Component;
  let fixture: ComponentFixture<BlogPostSoft4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSoft4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostSoft4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
