import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceDialogComponent } from './clearance-dialog.component';

describe('ClearanceDialogComponent', () => {
  let component: ClearanceDialogComponent;
  let fixture: ComponentFixture<ClearanceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearanceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
