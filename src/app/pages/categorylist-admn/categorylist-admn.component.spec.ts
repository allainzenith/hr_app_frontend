import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorylistAdmnComponent } from './categorylist-admn.component';

describe('CategorylistAdmnComponent', () => {
  let component: CategorylistAdmnComponent;
  let fixture: ComponentFixture<CategorylistAdmnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorylistAdmnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorylistAdmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
