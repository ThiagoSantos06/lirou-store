import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private router: Router, private http:HttpClient) {}

  navigateToProduct(productId: string) {
    this.router.navigate(['/product', productId]);
  }
}