import { Component } from '@angular/core';
import {BodyGlassesDTO, GlassesDTO} from "../../../../shared/models/GlassesDTO";
import {GlassesService} from "../../../services/GlassesService";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  listaDeOculosDaAPI: GlassesDTO[] = []
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
