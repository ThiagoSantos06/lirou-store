import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDosProdutosComponent } from './detalhes-dos-produtos.component';

describe('DetalhesDosProdutosComponent', () => {
  let component: DetalhesDosProdutosComponent;
  let fixture: ComponentFixture<DetalhesDosProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesDosProdutosComponent]
    });
    fixture = TestBed.createComponent(DetalhesDosProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => void) {
    throw new Error('Function not implemented.');
}

