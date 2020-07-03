import { TestBed } from '@angular/core/testing';

import { SliderPaneHttpService } from './slider-pane-http.service';

describe('SliderPaneHttpService', () => {
  let service: SliderPaneHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderPaneHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
