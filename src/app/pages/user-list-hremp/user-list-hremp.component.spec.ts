import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListHrempComponent } from './user-list-hremp.component';

describe('UserListHrempComponent', () => {
  let component: UserListHrempComponent;
  let fixture: ComponentFixture<UserListHrempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListHrempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListHrempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
