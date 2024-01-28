import { Component, ElementRef,  } from '@angular/core';
import { todosOsOculosComValor } from 'src/assets/sample';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  todosOsOculos = todosOsOculosComValor

  isScrolledRight: boolean = true; // Inicialmente, o botão de rolagem direito está visível
  isScrolledLeft: boolean = false; // Inicialmente, o botão de rolagem esquerdo está invisível

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.activateHorizontalScroll()
  }

  activateHorizontalScroll() {
    const container = document.querySelector('.container-produtos');
    
    if (container) {
      container.addEventListener('scroll', () => {
        this.updateScrollState(); // Atualiza o estado do scroll ao rolar
      });
    }
  }

  updateScrollState() {
    const container = this.elementRef.nativeElement.querySelector('.container-produtos');
    if (container) {
      this.isScrolledLeft = container.scrollLeft > 0; // Verifica se o contêiner foi rolado para a direita
      this.isScrolledRight = container.scrollLeft + container.clientWidth < container.scrollWidth - 1; // Verifica se o contêiner chegou ao final do lado direito
    }
  }

  scrollHorizontally(amount: number) {
    const container = this.elementRef.nativeElement.querySelector('.container-produtos');
    
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + amount,
        behavior: 'smooth' // Adiciona uma animação suave ao rolar
      });
    }
  }
}