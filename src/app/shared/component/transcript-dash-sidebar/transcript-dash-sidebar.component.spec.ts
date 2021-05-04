import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptDashSidebarComponent } from './transcript-dash-sidebar.component';

describe('TranscriptDashSidebarComponent', () => {
  let component: TranscriptDashSidebarComponent;
  let fixture: ComponentFixture<TranscriptDashSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptDashSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptDashSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
