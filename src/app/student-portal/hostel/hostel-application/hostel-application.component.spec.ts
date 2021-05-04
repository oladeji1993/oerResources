import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelApplicationComponent } from './hostel-application.component';

describe('HostelApplicationComponent', () => {
  let component: HostelApplicationComponent;
  let fixture: ComponentFixture<HostelApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
