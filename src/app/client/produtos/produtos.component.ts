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
      nome: "FLAK 10",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },

    {
      nome: "FLAK 10",
      foto: "https://byrbtssdegflenaymewl.supabase.co/storage/v1/object/public/liroustore/lupinha.png"
    },
  ]
}