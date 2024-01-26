import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
    })
export class GlassesService {

constructor(private http:HttpClient) {
}
    getGlasses() {
        return this.http.get("https://lirou-store-api.onrender.com/api/glasses")
    }
}