import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlassesDTO } from 'src/app/shared/models/GlassesDTO';

@Component({
  selector: 'app-detalhes-dos-produtos',
  templateUrl: './detalhes-dos-produtos.component.html',
  styleUrls: ['./detalhes-dos-produtos.component.css']
})
export class DetalhesDosProdutosComponent {
  listaDosProdutos: GlassesDTO[] = []

  constructor(private router: Router) {}

  navigateToProductDetails(productId: string) {
    this.router.navigate(['/product', productId]);
  }
}
