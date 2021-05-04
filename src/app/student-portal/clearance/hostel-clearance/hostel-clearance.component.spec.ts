import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelClearanceComponent } from './hostel-clearance.component';

describe('HostelClearanceComponent', () => {
  let component: HostelClearanceComponent;
  let fixture: ComponentFixture<HostelClearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelClearanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
