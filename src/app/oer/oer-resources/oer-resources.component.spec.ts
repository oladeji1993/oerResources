import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OerResourcesComponent } from './oer-resources.component';

describe('OerResourcesComponent', () => {
  let component: OerResourcesComponent;
  let fixture: ComponentFixture<OerResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OerResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OerResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
