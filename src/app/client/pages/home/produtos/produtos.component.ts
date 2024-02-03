import { Component, ElementRef,  } from '@angular/core';
import {BodyGlassesDTO, GlassesDTO} from "../../../../shared/models/GlassesDTO";
import {GlassesService} from "../../../services/GlassesService";
import { ProductService } from 'src/app/client/services/ProductService';
// import { todosOsOculosComValor } from 'src/assets/sample';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  // todosOsOculos = todosOsOculosComValor

  listaDeOculosDaAPI: GlassesDTO[] = []

  isScrolledRight: boolean = true; // Inicialmente, o botão de rolagem direito está visível
  isScrolledLeft: boolean = false; // Inicialmente, o botão de rolagem esquerdo está invisível

  constructor(private elementRef: ElementRef, private glassesService: GlassesService, private ProductService: ProductService) {}
  
  buscarOculosDaAPI(){
    this.glassesService.getGlasses().subscribe((listaDeOculos: BodyGlassesDTO) => {
      this.listaDeOculosDaAPI = listaDeOculos.content
    })
  }

  navigateToProduct(productId: string) {
    this.ProductService.navigateToProduct(productId);
  }

  ngOnInit() {
    this.activateHorizontalScroll()
    this.buscarOculosDaAPI()
  }

  activateHorizontalScroll() {
    const container = document.querySelector('.container-produtos');
    
    if (container) {
      container.addEventListener('scroll', () => {
        this.updateScrollState(); // Atualiza o estado do scroll ao rolar
      });
    }
  }

  updateScrollState() {
    const container = this.elementRef.nativeElement.querySelector('.container-produtos');
    if (container) {
      this.isScrolledLeft = container.scrollLeft > 0; // Verifica se o contêiner foi rolado para a direita
      this.isScrolledRight = container.scrollLeft + container.clientWidth < container.scrollWidth - 1; // Verifica se o contêiner chegou ao final do lado direito
    }
  }

  scrollHorizontally(amount: number) {
    const container = this.elementRef.nativeElement.querySelector('.container-produtos');
    
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + amount,
        behavior: 'smooth' // Adiciona uma animação suave ao rolar
      });
    }
  }
}