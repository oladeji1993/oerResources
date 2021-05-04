import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptHeaderComponent } from './transcript-header.component';

describe('TranscriptHeaderComponent', () => {
  let component: TranscriptHeaderComponent;
  let fixture: ComponentFixture<TranscriptHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
