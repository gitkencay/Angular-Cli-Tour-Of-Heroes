/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HerpService } from './herp.service';

describe('HerpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerpService]
    });
  });

  it('should ...', inject([HerpService], (service: HerpService) => {
    expect(service).toBeTruthy();
  }));
});
