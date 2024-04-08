import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGridComponent } from './article-grid.component';

describe('ArticleGridComponent', () => {
  let component: ArticleGridComponent;
  let fixture: ComponentFixture<ArticleGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
