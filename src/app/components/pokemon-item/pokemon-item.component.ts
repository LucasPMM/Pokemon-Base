import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  @Input() pokemonNumber: number = 0;

  public formatedNumber: string = '000';

  constructor() { }

  ngOnInit() {
    if (this.pokemonNumber < 10) {
      this.formatedNumber = `00${this.pokemonNumber}`;
    } else if (this.pokemonNumber < 100) {
      this.formatedNumber = `0${this.pokemonNumber}`;
    } else {
      this.formatedNumber = `${this.pokemonNumber}`;
    }
  }

}
