import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalsubheaderComponent } from './portalsubheader.component';

describe('PortalsubheaderComponent', () => {
  let component: PortalsubheaderComponent;
  let fixture: ComponentFixture<PortalsubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalsubheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalsubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
