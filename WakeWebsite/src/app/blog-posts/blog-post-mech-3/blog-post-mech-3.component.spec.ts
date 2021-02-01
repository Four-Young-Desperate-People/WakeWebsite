import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech3Component } from './blog-post-mech-3.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech3Component;
  let fixture: ComponentFixture<BlogPostMech3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
