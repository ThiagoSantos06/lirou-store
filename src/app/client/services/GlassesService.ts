import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {BodyGlassesDTO, GlassesDTO} from "src/app/shared/models/GlassesDTO";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
    })
export class GlassesService {

  constructor(private http:HttpClient) {}
    getGlasses() {
        return this.http.get<BodyGlassesDTO>(`${environment.API_URL}/api/glasses`)
    }

    getSingleGlasses(identifier: string) {
      return this.http.get<GlassesDTO>(`${environment.API_URL}/api/glasses/${identifier}`)
    }
}
