import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelFormComponent } from './hostel-form.component';

describe('HostelFormComponent', () => {
  let component: HostelFormComponent;
  let fixture: ComponentFixture<HostelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
