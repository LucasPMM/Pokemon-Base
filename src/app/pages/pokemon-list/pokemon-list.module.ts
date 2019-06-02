import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonItemComponent } from 'src/app/components/pokemon-item/pokemon-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PokemonTypeComponent } from 'src/app/components/pokemon-type/pokemon-type.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonItemComponent,
    PokemonTypeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PokemonListRoutingModule,
    PipesModule,
  ]
})
export class PokemonListModule { }
