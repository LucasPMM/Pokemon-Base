import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-evolutions',
  templateUrl: './pokemon-evolutions.component.html',
  styleUrls: ['./pokemon-evolutions.component.scss']
})
export class PokemonEvolutionsComponent implements OnInit {

  public pokemonEvolutions = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
