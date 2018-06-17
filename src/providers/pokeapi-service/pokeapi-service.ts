import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PokeapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokeapiServiceProvider {

  constructor(public http: HttpClient) {
    // console.log('Hello PokeapiServiceProvider Provider');
  }

  getPokemonByName(pokemonName){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
  }

}
