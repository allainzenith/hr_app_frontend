import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketlistHradminComponent } from './ticketlist-hradmin.component';

describe('TicketlistHradminComponent', () => {
  let component: TicketlistHradminComponent;
  let fixture: ComponentFixture<TicketlistHradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketlistHradminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketlistHradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
