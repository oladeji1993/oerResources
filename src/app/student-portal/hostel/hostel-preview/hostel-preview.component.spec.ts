import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelPreviewComponent } from './hostel-preview.component';

describe('HostelPreviewComponent', () => {
  let component: HostelPreviewComponent;
  let fixture: ComponentFixture<HostelPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
