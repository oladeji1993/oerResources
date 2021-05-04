import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OerFooterComponent } from './oer-footer.component';

describe('OerFooterComponent', () => {
  let component: OerFooterComponent;
  let fixture: ComponentFixture<OerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OerFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
