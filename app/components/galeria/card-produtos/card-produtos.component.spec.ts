import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutosComponent } from './card-produtos.component';

describe('CardProdutosComponent', () => {
  let component: CardProdutosComponent;
  let fixture: ComponentFixture<CardProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProdutosComponent]
    });
    fixture = TestBed.createComponent(CardProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
