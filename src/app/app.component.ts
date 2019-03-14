import { Component } from '@angular/core';
import { Platform, LoadingController, Loading, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { EventsManagerProvider } from '../providers/events-manager/events-manager';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  loading:Loading;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private loadingCtrl: LoadingController,
    private events_provider: EventsManagerProvider,
    private toasCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.events_provider
          .getIsLoading()
          .subscribe( ( isLoading ) => {
            if( isLoading ) {
              this.loading = this.loadingCtrl.create({
                content: 'Espera por favor...'
              });
              this.loading.present();
            } else if ( this.loading ) {
              this.loading.dismiss();
            } else if ( !isLoading) {
              this.loading.dismiss();
            }
          });

      this.events_provider
          .getMsgToast()
          .subscribe( (msg) => {  
            this.toasCtrl.create({
              message: msg,
              duration: 3000
            }).present();
          });



    });
  }
}

