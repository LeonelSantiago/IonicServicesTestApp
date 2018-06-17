import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PokeapiPage } from './pokeapi';

@NgModule({
  declarations: [
    PokeapiPage,
  ],
  imports: [
    IonicPageModule.forChild(PokeapiPage),
  ],
})
export class PokeapiPageModule {}
