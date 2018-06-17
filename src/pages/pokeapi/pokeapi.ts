import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokeapiServiceProvider} from '../../providers/pokeapi-service/pokeapi-service'

/**
 * Generated class for the PokeapiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokeapi',
  templateUrl: 'pokeapi.html',
})
export class PokeapiPage {
  pokemonName: string;
  pokemon: any[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public pokeapiService: PokeapiServiceProvider) {
  }

  getPokemonByName(pokemonName){
    this.pokeapiService.getPokemonByName(this.pokemonName)
    .subscribe(
      (data) => {
        this.pokemon.push(data);
      },(error) => {
        console.error(error);
      }
    )
    this.pokemon = [];
  }
  

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PokeapiPage');
  }

}
