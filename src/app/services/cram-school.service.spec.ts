import { TestBed } from '@angular/core/testing';

import { CramSchoolService } from './cram-school.service';

describe('CramSchoolService', () => {
  let service: CramSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CramSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
