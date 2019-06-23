import { Component, OnInit, Input } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  @Input() pokemon: PokemonList;

  constructor() { }

  ngOnInit() {
  }

}
