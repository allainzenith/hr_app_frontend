import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListHradmComponent } from './user-list-hradm.component';

describe('UserListHradmComponent', () => {
  let component: UserListHradmComponent;
  let fixture: ComponentFixture<UserListHradmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListHradmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListHradmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
