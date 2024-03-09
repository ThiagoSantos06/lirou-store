import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlassesDTO } from 'src/app/shared/models/GlassesDTO';
import { GlassesService } from "../../../services/GlassesService";
import { ShippingDTO } from 'src/app/shared/models/ShippingDTO';
import { ShippingService } from 'src/app/client/services/ShippingService';

@Component({
  selector: 'app-detalhes-dos-produtos',
  templateUrl: './detalhes-dos-produtos.component.html',
  styleUrls: ['./detalhes-dos-produtos.component.css']
})
export class DetalhesDosProdutosComponent implements OnInit {
  @Input() productIdentifier: string = '';
  glasses!: GlassesDTO;

  valoresDosFretes: ShippingDTO[] = [];
  inputUsuario: string = '';
  opcaoSelecionada: string = 'opcao1';

  constructor(private router: Router, private glassesService: GlassesService, private shppingServie: ShippingService) { }

  ngOnInit() {
    this.glassesService.getSingleGlasses(this.productIdentifier).subscribe(glasses => {
      this.glasses = glasses;
      // Definindo quantidade mínima como 1
      if (this.glasses.quantityInStock < 1) {
        this.glasses.quantityInStock = 1;
      }
    });

    this.shppingServie.calculateShipping(this.inputUsuario).subscribe(valoresDosFretes => {
      this.valoresDosFretes = valoresDosFretes;
    });

    window.scrollTo(0, 0); // Rola para o topo da página
    this.calcularOFrete();
  }

  calcularOFrete() {
    this.shppingServie.calculateShipping(this.inputUsuario).subscribe((listaDeFretes: ShippingDTO[]) => {
      this.valoresDosFretes = listaDeFretes;
    });
  }

  navigateToProductDetails(productId: string) {
    this.router.navigate(['/product', productId]);
  }

  formatarCEP(event: any) {
    let cep = event.target.value;
    cep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos
    cep = cep.substring(0, 8); // Limita a 8 caracteres
    cep = cep.replace(/(\d{5})(\d{1,2})/, "$1-$2"); // Adiciona o traço após os primeiros cinco dígitos
    event.target.value = cep; // Atualiza o valor do input
  }

  onChange() {
    if (this.opcaoSelecionada !== 'nenhum') {
      this.valoresDosFretes = []; // Limpa o array de fretes
    }
  }

  increaseQuantity() {
    this.glasses.quantityInStock++;
    this.glasses.price += this.glasses.price / (this.glasses.quantityInStock - 1);
  }
  
  decreaseQuantity() {
    if (this.glasses.quantityInStock > 1) {
      this.glasses.price -= this.glasses.price / this.glasses.quantityInStock;
      this.glasses.quantityInStock--;
    }
  }

  updatePrice() {
    // Ajuste de preço
    this.glasses.price = this.glasses.price * this.glasses.quantityInStock;
  }
}
