import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokeapiServiceProvider} from '../../providers/pokeapi-service/pokeapi-service'
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


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
  pokemon: any[] = [];
  pokemonNotFound: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public pokeapiService: PokeapiServiceProvider, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  getPokemonByName(pokemonName){
    this.pokeapiService.getPokemonByName(this.pokemonName)
    .subscribe(
      (data) => {
          this.presentLoading();
          this.pokemon.push(data);
      },(error) => {
        console.error(error);
        this.showAlert();
      }
    )
    this.pokemon = [];
    this.pokemonNotFound = "";
  }
  
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: `Buscando el Pokemon: ${this.pokemonName}...`,
      duration: 3000
    });
    loader.present();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Pokemon no encontrado!',
      subTitle: 'Favor verificar que el nombre del pokemon buscado es el correcto!',
      buttons: ['OK']
    });
    alert.present();
  }


  ionViewDidLoad() {
    // console.log('ionViewDidLoad PokeapiPage');
  }

}
