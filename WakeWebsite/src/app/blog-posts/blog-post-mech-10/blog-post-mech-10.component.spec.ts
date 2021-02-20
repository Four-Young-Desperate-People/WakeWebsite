import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech7Component } from './blog-post-mech-10.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech7Component;
  let fixture: ComponentFixture<BlogPostMech7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
