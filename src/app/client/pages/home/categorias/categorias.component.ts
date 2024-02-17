import { Component, ElementRef } from '@angular/core';
import {BodyGlassesDTO, GlassesDTO} from "../../../../shared/models/GlassesDTO";
import {GlassesService} from "../../../services/GlassesService";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  listaDeOculosDaAPI: GlassesDTO[] = []

  isScrolledRight: boolean = true; // Inicialmente, o botão de rolagem direito está visível
  isScrolledLeft: boolean = false; // Inicialmente, o botão de rolagem esquerdo está invisível

  constructor(private elementRef: ElementRef, private glassesService: GlassesService) {}

  buscarOculosDaAPI(){
    this.glassesService.getGlasses().subscribe((listaDeOculos: BodyGlassesDTO) => {
      this.listaDeOculosDaAPI = listaDeOculos.content
    })
  }

  ngOnInit() {
    this.buscarOculosDaAPI()
    this.activateHotizontalScroll()
  }

  activateHotizontalScroll() {
    const container = document.querySelector('.container-categorias');
    
    if (container) {
      container.addEventListener('wheel', (event) => {
        event.preventDefault();
    
        const wheelEvent = event as WheelEvent;
        const delta = Math.sign(wheelEvent.deltaY);
        container.scrollLeft += delta * 30;
      }, { passive: false });
  
      container.addEventListener('scroll', () => {
        this.updateScrollState(); // Atualiza o estado do scroll ao rolar
      });
    }
  }

  updateScrollState() {
    const container = this.elementRef.nativeElement.querySelector('.container-categorias');
    if (container) {
      this.isScrolledLeft = container.scrollLeft > 0; // Verifica se o contêiner foi rolado para a direita
      this.isScrolledRight = container.scrollLeft + container.clientWidth < container.scrollWidth - 1; // Verifica se o contêiner chegou ao final do lado direito
    }
  }

  scrollHorizontally(amount: number) {
    const container = this.elementRef.nativeElement.querySelector('.container-categorias');
    
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + amount,
        behavior: 'smooth' // Adiciona uma animação suave ao rolar
      });
    }
  }
}