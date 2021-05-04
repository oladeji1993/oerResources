import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OerLoginComponent } from './oer-login.component';

describe('OerLoginComponent', () => {
  let component: OerLoginComponent;
  let fixture: ComponentFixture<OerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
