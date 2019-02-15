import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesdetailComponent } from './recipesdetail.component';

describe('RecipesdetailComponent', () => {
  let component: RecipesdetailComponent;
  let fixture: ComponentFixture<RecipesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
