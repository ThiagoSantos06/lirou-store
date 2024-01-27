import { Component } from '@angular/core';
import { GlassesService } from 'src/app/client/services/GlassesService';
import { imagens, todosOsOculos } from 'src/assets/sample';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent {
  listaDeOculosDaAPI = []
  fotosDeExemplo = imagens
  listaDeOculosDeExemplo = todosOsOculos

  constructor(private glassesService: GlassesService) {}

  usarRolagemHorizontalNosConteinteres(){
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
  
  buscarOculosDaAPI(){
    this.glassesService.getGlasses().subscribe((listaDeOculos: any) => {
      this.listaDeOculosDaAPI = listaDeOculos
    })
  }

  ngOnInit() {
    this.usarRolagemHorizontalNosConteinteres()
    this.buscarOculosDaAPI()
  }
}