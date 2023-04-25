import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketThreadEmpComponent } from './ticket-thread-emp.component';

describe('TicketThreadEmpComponent', () => {
  let component: TicketThreadEmpComponent;
  let fixture: ComponentFixture<TicketThreadEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketThreadEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketThreadEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
