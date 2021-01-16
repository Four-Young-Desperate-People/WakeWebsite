import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostFirstWeekComponent } from './blog-post-first-week.component';

describe('BlogPostFirstWeekComponent', () => {
  let component: BlogPostFirstWeekComponent;
  let fixture: ComponentFixture<BlogPostFirstWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostFirstWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostFirstWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
