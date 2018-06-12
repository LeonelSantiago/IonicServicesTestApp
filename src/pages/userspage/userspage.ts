import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
/**
 * Generated class for the UserspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userspage',
  templateUrl: 'userspage.html',
})
export class UserspagePage {

  users: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad UserspagePage');
    this.userService.getUsers()
    .subscribe(
      (data) => {
        this.users = data['results'];
      },(error) => {
        console.error(error);
      }
    )

  }

}
