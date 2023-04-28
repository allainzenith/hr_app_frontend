import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportlistsadminComponent } from './reportlistsadmin.component';

describe('ReportlistsadminComponent', () => {
  let component: ReportlistsadminComponent;
  let fixture: ComponentFixture<ReportlistsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportlistsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportlistsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
