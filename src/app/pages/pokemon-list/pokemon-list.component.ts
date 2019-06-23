import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public searchContent: string = '';
  public isLoading: boolean = true;

  constructor() { }

  private async getPokemonList(): Promise<void> {
    setTimeout(() => {
      this.isLoading = false;
    }, 8000);
  }

  ngOnInit() {
    this.getPokemonList();
    console.log('cheguei no pokemon list1!');
  }

}
