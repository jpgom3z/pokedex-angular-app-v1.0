import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TypeData} from '../../models/type'

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor(
    private http: HttpClient
  ) { }

  public getTypes(): Observable<TypeData> {
    return this.http.get<TypeData>(`https://pokeapi.co/api/v2/type/`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}