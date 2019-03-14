import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

  back() {
    this.navCtrl.pop();
  }

  backFake() {
    this.navCtrl.push( HomePage );
  }

  logout() {
    this.navCtrl.popToRoot();
  }

}
