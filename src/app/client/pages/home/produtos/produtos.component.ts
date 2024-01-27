import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  fotoDosOculos = [
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
    "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png",
  ]

  todosOsOculos = [
    {
      nome: "JULIET 24K - DOURADA",
      valor: "R$ 130,00",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "JULIET",
      valor: "R$ 130,00",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "JULIET 1.0",
      valor: "R$ 130,00",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "JULIET 2.0",
      valor: "R$ 130,00",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "JULIET 3.0",
      valor: "R$ 130,00",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "JULIET 4.0",
      valor: "R$ 130,00",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },
  ]
}