import { Component, OnInit } from '@angular/core';
import { WrapperService } from 'src/app/services/wrapper/wrapper.service';
import { PokemonList } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public searchContent: string = '';
  public isLoading: boolean = true;
  public pokemonList: PokemonList[] = [];

  constructor(
    private wrapperService: WrapperService,
  ) { }

  private async getPokemonList(): Promise<void> {
    setTimeout(() => {
      this.isLoading = false;
    }, 8000);
    try {
      const query = 'SELECT * FROM Pokemon';
      this.pokemonList = await this.wrapperService.getDbData(query);
      this.pokemonList.forEach((pokemon) => {
        const { id_pokemon } = pokemon;
        if (Number(id_pokemon) < 10) {
          pokemon.formatedId = `00${Number(id_pokemon)}`;
        } else if (Number(id_pokemon) < 100) {
          pokemon.formatedId = `0${Number(id_pokemon)}`;
        } else {
          pokemon.formatedId = `${Number(id_pokemon)}`;
        }
        pokemon.img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.formatedId}.png`
      });
    } catch (e) {
      console.log('Error getting pokemon list', e);
    }
  }

  ngOnInit() {
    this.getPokemonList();
    console.log('cheguei no pokemon list1!');
  }

}
