import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech4Component } from './blog-post-mech-4.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech4Component;
  let fixture: ComponentFixture<BlogPostMech4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
