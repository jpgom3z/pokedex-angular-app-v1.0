import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Pokemon } from 'src/app/models/pokemon';
import { DataService } from 'src/app/shared/data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  filteredPokemons: Pokemon[] = [];

  constructor(
    private contentService: ContentService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const allPokemonRequests = Array.from({ length: 150 }, (_, i) => this.contentService.get(i + 1));

    forkJoin(allPokemonRequests).subscribe(allPokemonData => {
      const allPokemons: Pokemon[] = allPokemonData.map((data: any, index: number) => ({
        id: index + 1,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types,
        sprites: data.sprites,
      }));

      this.dataService.updatePokemones(allPokemons);
      this.dataService.filterPokemonsByType('todos');
    });
    this.dataService.getFilteredPokemones().subscribe(filteredPokemons => {
      this.filteredPokemons = filteredPokemons.sort((a, b) => a.id - b.id);
    });
  }

  formatPokemonId(id: number): string {
    let idString = id.toString();
    if (idString.length === 1) {
      idString = '00' + idString;
    } else if (idString.length === 2) {
      idString = '0' + idString;
    }
    return idString;
  }
}