import { Component } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent {
  fotoDosOculos = [
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
  ]

  todosOsOculos = [
    {
      nome: "CHEFE LIXO",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "PENNY",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "DART",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "FLAK 10",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "ROMEO 2",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "BRUSHED",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "PENNY 24K",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "JULIET 2.0",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "PICA GRANDE",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "PICA PEQUENA",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "JULIET AMANHÃ",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "PENNYS 2.0",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "ROMEO E JULIET",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "JULIET",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "ROMEO 2",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "ROMEO 2",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },
  ]

  ngOnInit() {
    const container = document.querySelector('.container-destaques');
  
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