import { Component } from '@angular/core';
import { GlassesService } from 'src/app/client/services/GlassesService';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent {
  listaDeOculos = []
  constructor(private glassesService: GlassesService) {
    
  } 
  
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
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "24K",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },
  ]
}