import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { GlassesDTO } from 'src/app/shared/models/GlassesDTO';
import {GlassesService} from "../../../services/GlassesService";

@Component({
  selector: 'app-detalhes-dos-produtos',
  templateUrl: './detalhes-dos-produtos.component.html',
  styleUrls: ['./detalhes-dos-produtos.component.css']
})
export class DetalhesDosProdutosComponent implements OnInit{
  @Input() productIdentifier: string = ''
  glasses!: GlassesDTO

  constructor(private router: Router, private glassesService: GlassesService) {}

  ngOnInit() {
    this.glassesService.getSingleGlasses(this.productIdentifier).subscribe(glasses=> {
      this.glasses = glasses
    })
  }

  navigateToProductDetails(productId: string) {
    this.router.navigate(['/product', productId])
  }
}
