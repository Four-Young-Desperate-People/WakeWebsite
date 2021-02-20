import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech9Component } from './blog-post-mech-9.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech9Component;
  let fixture: ComponentFixture<BlogPostMech9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
