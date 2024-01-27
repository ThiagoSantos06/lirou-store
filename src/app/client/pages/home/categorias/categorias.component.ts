import { Component } from '@angular/core';

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

  ngOnInit() {
    const container = document.querySelector('.container-categorias');
  
    if (container) {
      container.addEventListener('wheel', function(event) {
        event.preventDefault();
  
        const wheelEvent = event as WheelEvent;
        const delta = Math.sign(wheelEvent.deltaY);
        container.scrollLeft += delta * 30;
      }, { passive: false });
    }
  }
}