import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptFooterComponent } from './transcript-footer.component';

describe('TranscriptFooterComponent', () => {
  let component: TranscriptFooterComponent;
  let fixture: ComponentFixture<TranscriptFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
