import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloFatecComponent } from './titulo-fatec.component';

describe('TituloFatecComponent', () => {
  let component: TituloFatecComponent;
  let fixture: ComponentFixture<TituloFatecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloFatecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloFatecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
