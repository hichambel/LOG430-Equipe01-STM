import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanteServiceWebItemComponent } from './sante-service-web-item.component';

describe('SanteServiceWebItemComponent', () => {
  let component: SanteServiceWebItemComponent;
  let fixture: ComponentFixture<SanteServiceWebItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanteServiceWebItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanteServiceWebItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
