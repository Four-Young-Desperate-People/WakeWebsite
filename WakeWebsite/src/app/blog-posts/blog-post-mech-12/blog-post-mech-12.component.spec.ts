import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech12Component } from './blog-post-mech-12.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech12Component;
  let fixture: ComponentFixture<BlogPostMech12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
