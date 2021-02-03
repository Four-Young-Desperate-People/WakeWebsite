import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSoft1Component } from './blog-post-soft-1.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostSoft1Component;
  let fixture: ComponentFixture<BlogPostSoft1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSoft1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostSoft1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
