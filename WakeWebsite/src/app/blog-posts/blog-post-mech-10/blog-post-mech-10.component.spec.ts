import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech10Component } from './blog-post-mech-10.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech10Component;
  let fixture: ComponentFixture<BlogPostMech10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
