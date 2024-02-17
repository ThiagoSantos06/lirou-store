import { Component } from '@angular/core';
import { ShippingDTO } from 'src/app/shared/models/ShippingDTO';
import { ShippingService } from 'src/app/client/services/ShippingService';

@Component({
  selector: 'app-calculate-shipping',
  templateUrl: './calculate-shipping.component.html',
  styleUrls: ['./calculate-shipping.component.css']
})
export class CalculateShippingComponent {
  valoresDosFretes: ShippingDTO[] = []
  inputUsuario: string = ''
  opcaoSelecionada: string = 'opcao1';

  constructor(private shppingServie: ShippingService) {}

  ngOnInit() {
    this.shppingServie.calculateShipping(this.inputUsuario).subscribe(valoresDosFretes=> {
      this.valoresDosFretes = valoresDosFretes
    })
  }

  calcularOFrete() {
    this.shppingServie.calculateShipping(this.inputUsuario).subscribe((listaDeFretes: ShippingDTO[]) => {
      this.valoresDosFretes = listaDeFretes
    })
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
}
