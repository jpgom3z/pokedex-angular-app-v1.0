import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(
    private http: HttpClient
  ) { }

  // Este es el servicio que se comunica con el API y con el que logramos traer un objeto.
  // Creo que esta bien.
  
  public get(id: number): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
