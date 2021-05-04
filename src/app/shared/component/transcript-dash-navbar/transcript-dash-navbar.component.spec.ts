import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptDashNavbarComponent } from './transcript-dash-navbar.component';

describe('TranscriptDashNavbarComponent', () => {
  let component: TranscriptDashNavbarComponent;
  let fixture: ComponentFixture<TranscriptDashNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptDashNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptDashNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
