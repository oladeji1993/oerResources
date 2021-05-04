import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OerRegisterComponent } from './oer-register.component';

describe('OerRegisterComponent', () => {
  let component: OerRegisterComponent;
  let fixture: ComponentFixture<OerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OerRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
