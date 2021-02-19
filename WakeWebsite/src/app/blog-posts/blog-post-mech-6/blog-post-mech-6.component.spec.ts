import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech6Component } from './blog-post-mech-6.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech6Component;
  let fixture: ComponentFixture<BlogPostMech6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
