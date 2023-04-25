import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHrempComponent } from './header-hremp.component';

describe('HeaderHrempComponent', () => {
  let component: HeaderHrempComponent;
  let fixture: ComponentFixture<HeaderHrempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHrempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHrempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
