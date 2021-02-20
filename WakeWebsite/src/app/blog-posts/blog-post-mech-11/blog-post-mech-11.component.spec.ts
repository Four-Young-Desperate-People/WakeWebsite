import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech11Component } from './blog-post-mech-11.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech11Component;
  let fixture: ComponentFixture<BlogPostMech11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
