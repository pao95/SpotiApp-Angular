import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaComponenteComponent } from './tarjeta-componente.component';

describe('TarjetaComponenteComponent', () => {
  let component: TarjetaComponenteComponent;
  let fixture: ComponentFixture<TarjetaComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
