import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHrempComponent } from './navbar-hremp.component';

describe('NavbarHrempComponent', () => {
  let component: NavbarHrempComponent;
  let fixture: ComponentFixture<NavbarHrempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHrempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarHrempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
