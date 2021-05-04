import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelPrintoutComponent } from './hostel-printout.component';

describe('HostelPrintoutComponent', () => {
  let component: HostelPrintoutComponent;
  let fixture: ComponentFixture<HostelPrintoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelPrintoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelPrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
