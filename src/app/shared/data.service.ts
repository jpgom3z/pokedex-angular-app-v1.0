import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';


  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
    private selectedPokemonsSubject = new BehaviorSubject<Pokemon[]>([]);
    selectedPokemons$ : Observable<Pokemon[]> = this.selectedPokemonsSubject.asObservable();
    private filteredPokemonsSubject = new BehaviorSubject<Pokemon[]>([]);
    filteredPokemons$ = this.filteredPokemonsSubject.asObservable();

    constructor() { };

    getPokemones(): Observable<Pokemon[]> {
        return this.selectedPokemons$;
    };

    updatePokemones(pokemons: Pokemon[]): void {
        this.selectedPokemonsSubject.next(pokemons);
    };

    getFilteredPokemones(): Observable<Pokemon[]> {
        return this.filteredPokemons$;
    };

    filterPokemonsByType(type: string | null | undefined): void {
      const selectedPokemons = this.selectedPokemonsSubject.getValue();
      const filterType = type || 'todos'; 
    
      if (filterType === 'todos') {
        this.filteredPokemonsSubject.next(selectedPokemons);
      } else {
        const filteredPokemons = selectedPokemons.filter(pokemon =>
          pokemon.types.some(typeObj => typeObj.type.name === filterType)
        );
        this.filteredPokemonsSubject.next(filteredPokemons);
      }
    }
};