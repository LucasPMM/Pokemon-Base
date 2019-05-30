import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonItemComponent } from 'src/app/components/pokemon-item/pokemon-item.component';

@NgModule({
  declarations: [PokemonListComponent, PokemonItemComponent],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
  ]
})
export class PokemonListModule { }
