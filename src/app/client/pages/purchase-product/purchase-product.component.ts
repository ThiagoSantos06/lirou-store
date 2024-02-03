import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-purchase-product',
  templateUrl: './purchase-product.component.html',
  styleUrls: ['./purchase-product.component.css']
})
export class PurchaseProductComponent {
  productIdentifier = ''
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.productIdentifier = this.activatedRoute.snapshot.params['id'];
  }

}
