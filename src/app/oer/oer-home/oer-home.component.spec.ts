import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OerHomeComponent } from './oer-home.component';

describe('OerHomeComponent', () => {
  let component: OerHomeComponent;
  let fixture: ComponentFixture<OerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
