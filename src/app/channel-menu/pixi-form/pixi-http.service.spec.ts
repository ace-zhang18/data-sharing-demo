import { TestBed } from '@angular/core/testing';

import { PixiHttpService } from './pixi-http.service';

describe('PixiHttpService', () => {
  let service: PixiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
