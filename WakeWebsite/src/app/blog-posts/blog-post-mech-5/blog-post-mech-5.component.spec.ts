import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech5Component } from './blog-post-mech-5.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech5Component;
  let fixture: ComponentFixture<BlogPostMech5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
