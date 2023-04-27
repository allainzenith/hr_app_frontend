import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHradmComponent } from './profile-hradm.component';

describe('ProfileHradmComponent', () => {
  let component: ProfileHradmComponent;
  let fixture: ComponentFixture<ProfileHradmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHradmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHradmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
