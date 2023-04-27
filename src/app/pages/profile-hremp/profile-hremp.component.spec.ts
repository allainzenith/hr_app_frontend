import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHrempComponent } from './profile-hremp.component';

describe('ProfileHrempComponent', () => {
  let component: ProfileHrempComponent;
  let fixture: ComponentFixture<ProfileHrempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHrempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHrempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
