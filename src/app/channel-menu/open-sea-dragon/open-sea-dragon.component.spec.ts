import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSeaDragonComponent } from './open-sea-dragon.component';

describe('OpenSeadragonComponent', () => {
  let component: OpenSeaDragonComponent;
  let fixture: ComponentFixture<OpenSeaDragonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenSeaDragonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSeaDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
