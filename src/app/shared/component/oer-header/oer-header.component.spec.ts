import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OerHeaderComponent } from './oer-header.component';

describe('OerHeaderComponent', () => {
  let component: OerHeaderComponent;
  let fixture: ComponentFixture<OerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
