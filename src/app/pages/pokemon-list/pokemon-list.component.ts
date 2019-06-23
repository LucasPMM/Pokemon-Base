import { Component, OnInit } from '@angular/core';
import { WrapperService } from 'src/app/services/wrapper/wrapper.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public searchContent: string = '';
  public isLoading: boolean = true;

  constructor(
    private wrapperService: WrapperService,
  ) { }

  private async getPokemonList(): Promise<void> {
    setTimeout(() => {
      this.isLoading = false;
    }, 8000);
    try {
      const query = 'SELECT * FROM Pokemon';
      const res = await this.wrapperService.getDbData(query);
      console.log('res', res);
    } catch (e) {
      console.log('Error getting pokemon list', e);
    }
  }

  ngOnInit() {
    this.getPokemonList();
    console.log('cheguei no pokemon list1!');
  }

}
