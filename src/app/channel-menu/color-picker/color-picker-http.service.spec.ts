import { TestBed } from '@angular/core/testing';

import { ColorPickerHttpService } from './color-picker-http.service';

describe('ColorPickerHttpService', () => {
  let service: ColorPickerHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorPickerHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
