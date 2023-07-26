import { TestBed } from '@angular/core/testing';

import { ColorToggleService } from './color-toggle.service';

describe('ColorToggleService', () => {
  let service: ColorToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
