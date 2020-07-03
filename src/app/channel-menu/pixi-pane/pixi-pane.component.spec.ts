import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiPaneComponent } from './pixi-pane.component';

describe('PixiPaneComponent', () => {
  let component: PixiPaneComponent;
  let fixture: ComponentFixture<PixiPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixiPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixiPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
