import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:string;
  pwd:string;

  constructor( public navCtrl: NavController, 
    public navParams: NavParams,
    private user_provider: UserProvider,
    private loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goCreateAccount() {
    this.navCtrl.push( CreateAccountPage );
  }

  login() {
    let loading = this.loadingCtrl.create({
      content:'Creando cuenta',
      spinner: 'dots'
    });

    loading.present();

    this.user_provider
      .loginUser( this.user,this.pwd )
      .subscribe( response => {
        console.log(response);
        loading.dismiss()
      }, err => {
        console.log(err);
        loading.dismiss()
      });
  }

}
