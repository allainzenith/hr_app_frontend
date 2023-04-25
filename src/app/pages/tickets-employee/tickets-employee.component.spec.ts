import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsEmployeeComponent } from './tickets-employee.component';

describe('TicketsEmployeeComponent', () => {
  let component: TicketsEmployeeComponent;
  let fixture: ComponentFixture<TicketsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
