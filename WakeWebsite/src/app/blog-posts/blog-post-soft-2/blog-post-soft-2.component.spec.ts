import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSoft2Component } from './blog-post-soft-2.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostSoft2Component;
  let fixture: ComponentFixture<BlogPostSoft2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSoft2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostSoft2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
