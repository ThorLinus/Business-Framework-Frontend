import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsAdministrationComponent } from './rights-administration.component';

describe('RightsAdministrationComponent', () => {
  let component: RightsAdministrationComponent;
  let fixture: ComponentFixture<RightsAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
