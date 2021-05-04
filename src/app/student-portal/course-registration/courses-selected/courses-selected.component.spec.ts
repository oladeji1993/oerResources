import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSelectedComponent } from './courses-selected.component';

describe('CoursesSelectedComponent', () => {
  let component: CoursesSelectedComponent;
  let fixture: ComponentFixture<CoursesSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
