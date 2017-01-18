/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataStoreService } from './data-store.service';

describe('DataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStoreService]
    });
  });

  it('should ...', inject([DataStoreService], (service: DataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
