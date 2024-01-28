import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  todosOsOculos = [
    {
      nome: "JULIET",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "PENNY",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "ROMEO 2.0",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "VILÃO",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "DOUBLE X",
      foto: "https://eomajdtriisxygrrtrlx.supabase.co/storage/v1/object/public/imagens/Double%20X.jpg"
    },

    {
      nome: "24K",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "CORVETTE",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "FLACK 1.0",
      foto: "https://eomajdtriisxygrrtrlx.supabase.co/storage/v1/object/public/imagens/Flack%201.0.jpg"
    },

    {
      nome: "FLACK 2.0",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "DART",
      foto: "https://eomajdtriisxygrrtrlx.supabase.co/storage/v1/object/public/imagens/Dart.jpg"
    },

    {
      nome: "WIRE",
      foto: "https://eomajdtriisxygrrtrlx.supabase.co/storage/v1/object/public/imagens/Wire.jpg"
    },

    {
      nome: "DESCANSO COM MOLINHAS",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },
  ]

  isScrolledRight: boolean = true; // Inicialmente, o botão de rolagem direito está visível
  isScrolledLeft: boolean = false; // Inicialmente, o botão de rolagem esquerdo está invisível

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const container = document.querySelector('.container-categorias');
    
    if (container) {
      container.addEventListener('wheel', (event) => {
        event.preventDefault();
    
        const wheelEvent = event as WheelEvent;
        const delta = Math.sign(wheelEvent.deltaY);
        container.scrollLeft += delta * 30;
      }, { passive: false });
  
      container.addEventListener('scroll', () => {
        this.updateScrollState(); // Atualiza o estado do scroll ao rolar
      });
    }
  }

  updateScrollState() {
    const container = this.elementRef.nativeElement.querySelector('.container-categorias');
    if (container) {
      this.isScrolledLeft = container.scrollLeft > 0; // Verifica se o contêiner foi rolado para a direita
      this.isScrolledRight = container.scrollLeft + container.clientWidth < container.scrollWidth - 1; // Verifica se o contêiner chegou ao final do lado direito
    }
  }

  scrollHorizontal(amount: number) {
    const container = this.elementRef.nativeElement.querySelector('.container-categorias');
    
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + amount,
        behavior: 'smooth' // Adiciona uma animação suave ao rolar
      });
    }
  }
}