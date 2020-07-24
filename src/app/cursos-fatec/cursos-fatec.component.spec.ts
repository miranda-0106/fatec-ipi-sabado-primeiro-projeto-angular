import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosFatecComponent } from './cursos-fatec.component';

describe('CursosFatecComponent', () => {
  let component: CursosFatecComponent;
  let fixture: ComponentFixture<CursosFatecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosFatecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosFatecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
