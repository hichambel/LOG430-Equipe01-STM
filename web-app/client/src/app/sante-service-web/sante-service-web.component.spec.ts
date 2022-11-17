import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanteServiceWebComponent } from './sante-service-web.component';

describe('SanteServiceWebComponent', () => {
  let component: SanteServiceWebComponent;
  let fixture: ComponentFixture<SanteServiceWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanteServiceWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanteServiceWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
