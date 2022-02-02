import { TestBed } from '@angular/core/testing';

import { RightAdministrationService } from './right-administration.service';

describe('RightAdministrationService', () => {
  let service: RightAdministrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightAdministrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
