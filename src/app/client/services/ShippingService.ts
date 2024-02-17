import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environment/environment";
import { ShippingDTO } from "src/app/shared/models/ShippingDTO";

@Injectable({
    providedIn: 'root'
})

export class ShippingService {
    constructor(private http:HttpClient) {}

    calculateShipping(CEP: string) {
        return this.http.get<ShippingDTO[]>(`${environment.API_URL}/api/shipping/calculate/${CEP}`)  
    }
}