import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSoft5Component } from './blog-post-soft-5.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostSoft5Component;
  let fixture: ComponentFixture<BlogPostSoft5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSoft5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostSoft5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
