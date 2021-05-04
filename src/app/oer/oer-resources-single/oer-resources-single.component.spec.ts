import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OerResourcesSingleComponent } from './oer-resources-single.component';

describe('OerResourcesSingleComponent', () => {
  let component: OerResourcesSingleComponent;
  let fixture: ComponentFixture<OerResourcesSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OerResourcesSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OerResourcesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
