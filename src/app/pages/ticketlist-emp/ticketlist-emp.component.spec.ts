import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketlistEmpComponent } from './ticketlist-emp.component';

describe('TicketlistEmpComponent', () => {
  let component: TicketlistEmpComponent;
  let fixture: ComponentFixture<TicketlistEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketlistEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketlistEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
