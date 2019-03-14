import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CreateAccountPage } from '../create-account/create-account';
import { LoginProvider } from '../../providers/login/login';
import { EventsManagerProvider } from '../../providers/events-manager/events-manager';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  loginForm:FormGroup;

  constructor(
    public navCtrl: NavController,
    private fb:FormBuilder,
    private login_provider: LoginProvider,
    private events_manager: EventsManagerProvider) {
      this.loginForm = this.fb.group({
        user:['',Validators.required],
        pwd: ['',Validators.required]
      });
  }

  login() {
    this.events_manager.setIsLoading(true);
    this.login_provider
    .loginService( 
      this.loginForm.get('user').value,
      this.loginForm.get('pwd').value )
      .subscribe( (response) => {
        console.log(response);
        this.events_manager.setIsLoading(false);
        this.navCtrl.push( AboutPage,response );
      }, error => {
          this.events_manager.setIsLoading(false);
          this.events_manager.setMsgToast( error.error.message );
          console.log(error)
        });
  }

  goCreateAccount() {
    this.navCtrl.push( CreateAccountPage );
  }

}
