import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequestTranscriptComponent } from './dashboard-request-transcript.component';

describe('DashboardRequestTranscriptComponent', () => {
  let component: DashboardRequestTranscriptComponent;
  let fixture: ComponentFixture<DashboardRequestTranscriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRequestTranscriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRequestTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
