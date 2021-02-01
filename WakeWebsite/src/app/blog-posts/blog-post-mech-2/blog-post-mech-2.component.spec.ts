import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostMech2Component } from './blog-post-mech-2.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostMech2Component;
  let fixture: ComponentFixture<BlogPostMech2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostMech2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostMech2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
