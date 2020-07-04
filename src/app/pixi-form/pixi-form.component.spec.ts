import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiFormComponent } from './pixi-form.component';

describe('PixiFormComponent', () => {
  let component: PixiFormComponent;
  let fixture: ComponentFixture<PixiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
