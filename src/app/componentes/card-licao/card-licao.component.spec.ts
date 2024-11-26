import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLicaoComponent } from './card-licao.component';

describe('CardLicaoComponent', () => {
  let component: CardLicaoComponent;
  let fixture: ComponentFixture<CardLicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLicaoComponent]
    });
    fixture = TestBed.createComponent(CardLicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
