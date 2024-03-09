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
  errorMessage: string = '';
  inputError: boolean = false;

  constructor(private shppingServie: ShippingService) {}

  ngOnInit() {
    this.shppingServie.calculateShipping(this.inputUsuario).subscribe(valoresDosFretes=> {
      this.valoresDosFretes = valoresDosFretes
    })
  }

  private handleError(message: string) {
    this.errorMessage = message;
    this.valoresDosFretes = []; // Limpa as opções de frete
    setTimeout(() => {
      this.inputError = true; // Marca o input como em estado de erro
    }, 1); // Atraso
 }

 calcularOFrete() {
  // Remover o hífen do CEP para a verificação de comprimento
  const cepSemHifen = this.inputUsuario.replace('-', '');

  // Verifica se o campo de CEP está vazio
  if (this.inputUsuario.trim() === '') {
      this.handleError('Preencha esse dado.');
      return; // Interrompe a execução do método
  }

  // Verifica se o CEP tem menos de 8 dígitos
  if (cepSemHifen.length < 8) {
      this.handleError('Digite um CEP de 8 dígitos.');
      return; // Interrompe a execução do método
  }

  this.errorMessage = ''; // Limpar mensagem de erro anterior
  this.inputError = false; // Resetar o estado de erro do input
  this.shppingServie.calculateShipping(this.inputUsuario).subscribe({
      next: (listaDeFretes: ShippingDTO[]) => {
          if(listaDeFretes.length > 0) {
              this.valoresDosFretes = listaDeFretes;
          } else {
              this.handleError('CEP inválido ou não encontrado.');
          }
      },
      error: (err) => {
          this.handleError('Digite um CEP válido.');
      }
  });
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
