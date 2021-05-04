import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalsidenavComponent } from './portalsidenav.component';

describe('PortalsidenavComponent', () => {
  let component: PortalsidenavComponent;
  let fixture: ComponentFixture<PortalsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
