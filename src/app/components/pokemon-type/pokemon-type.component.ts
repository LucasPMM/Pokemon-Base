import { Component, OnInit, Input } from '@angular/core';

export interface TypesColors {
  type: string;
  background: string;
  color: string;
}
@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})

export class PokemonTypeComponent implements OnInit {

  @Input() types: string[];
  @Input() background: string = 'blue';
  @Input() color: string = 'white';

  public typesObj: TypesColors[] = [];

  constructor() { }

  ngOnInit() {
    this.types.forEach((type: string) => {
      let color;
      let background;

      if (type === 'Eletric') {
        background = 'yellow';
        color = 'black';
      } else if (type === 'Fire') {
        background = 'orange';
        color = 'black';
      } else if (type === 'Grass') {
        background = 'green';
        color = 'white';
      } else {
        background = 'gray';
        color = 'white';
      }

      const formatedType: TypesColors = {
        type,
        color,
        background,
      };
      this.typesObj.push(formatedType);
    });
  }

}
