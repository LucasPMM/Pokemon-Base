import { PipesModule } from './../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { PokemonEvolutionsComponent } from './pokemon-evolutions/pokemon-evolutions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  declarations: [
    PokemonItemComponent,
    PokemonTypeComponent,
    PokemonEvolutionsComponent,
  ],
  exports: [
    PokemonItemComponent,
    PokemonTypeComponent,
    PokemonEvolutionsComponent,
  ],
  entryComponents: [
  ],
  providers: [
  ],
})
export class ComponentsModule { }
