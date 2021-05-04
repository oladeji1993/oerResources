import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptDashFooterComponent } from './transcript-dash-footer.component';

describe('TranscriptDashFooterComponent', () => {
  let component: TranscriptDashFooterComponent;
  let fixture: ComponentFixture<TranscriptDashFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptDashFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptDashFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
