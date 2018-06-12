import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DgiiServiceProvider} from '../../providers/dgii-service/dgii-service';

/**
 * Generated class for the DgiiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dgii',
  templateUrl: 'dgii.html',
})
export class DgiiPage {
  rnc: string;
  business: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public dgiiService: DgiiServiceProvider) {
  }
  getDgiiBusiness(){
    this.dgiiService.getDgiiBusiness(this.rnc)
    .subscribe(
      (data) => {
        this.business.push(data);
      },(error) => {
        console.error(error);
      }
    )
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DgiiPage');
  }

}
