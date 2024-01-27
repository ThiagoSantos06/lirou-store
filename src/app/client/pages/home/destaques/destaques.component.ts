import { Component } from '@angular/core';
import { GlassesService } from 'src/app/client/services/GlassesService';
import { BodyGlassesDTO, GlassesDTO } from 'src/app/shared/models/GlassesDTO';
import { imagens, todosOsOculos } from 'src/assets/sample';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent {
  listaDeOculosDaAPI: GlassesDTO[] = []
  fotosDeExemplo = imagens
  listaDeOculosDeExemplo = todosOsOculos

  constructor(private glassesService: GlassesService) {}
  
  buscarOculosDaAPI(){
    this.glassesService.getGlasses().subscribe((listaDeOculos: BodyGlassesDTO) => {
      this.listaDeOculosDaAPI = listaDeOculos.content
    })
  }

  ngOnInit() {
    this.buscarOculosDaAPI()
  }
}