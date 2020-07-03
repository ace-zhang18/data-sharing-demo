import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPaneComponent } from './slider-pane.component';

describe('SliderPaneComponent', () => {
  let component: SliderPaneComponent;
  let fixture: ComponentFixture<SliderPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
