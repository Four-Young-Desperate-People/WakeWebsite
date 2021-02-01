import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech1Component } from './blog-post-mech-1.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech1Component;
  let fixture: ComponentFixture<BlogPostMech1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
