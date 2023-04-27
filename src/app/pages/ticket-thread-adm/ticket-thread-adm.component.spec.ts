import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketThreadAdmComponent } from './ticket-thread-adm.component';

describe('TicketThreadAdmComponent', () => {
  let component: TicketThreadAdmComponent;
  let fixture: ComponentFixture<TicketThreadAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketThreadAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketThreadAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
