import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketThreadHrempComponent } from './ticket-thread-hremp.component';

describe('TicketThreadHrempComponent', () => {
  let component: TicketThreadHrempComponent;
  let fixture: ComponentFixture<TicketThreadHrempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketThreadHrempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketThreadHrempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
