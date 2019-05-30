import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailComponent } from 'src/app/pages/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonDetailRoutingModule
  ]
})
export class PokemonDetailModule { }
