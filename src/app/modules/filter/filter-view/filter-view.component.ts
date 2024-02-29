import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { FilterService } from '../filter.service';
import {TypeResults, TypeData} from '../../../models/type'

@Component({
  selector: 'app-filter-view',
  templateUrl: './filter-view.component.html',
  styleUrls: ['./filter-view.component.css']
})
export class FilterViewComponent  implements OnInit{

  filterTypes: string[] = [];

  constructor( private dataService: DataService, private filterService: FilterService) {};

  ngOnInit() {
    this.filterService.getTypes().subscribe((typeData: TypeData) => {
      this.filterTypes = typeData.results.map((result: TypeResults) => result.name);
    });
  }

  filterPokemons (pokemon : string) {
    this.dataService.filterPokemonsByType(pokemon);
  }
}