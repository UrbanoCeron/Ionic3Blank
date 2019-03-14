import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { CustomerPage } from '../pages/customer/customer';
import { PipesModule } from '../pipes/pipes.module';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { StudentsServiceProvider } from '../providers/students-service/students-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { LoginProviderMock } from '../mock/loginProviderMock';
import { EventsManagerProvider } from '../providers/events-manager/events-manager';
import { CardComponent } from '../components/card/card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    CustomerPage,
    CreateAccountPage,
    CardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    CustomerPage,
    CreateAccountPage,
    CardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentsServiceProvider,
    // {
    //   provide: LoginProvider,
    //   useClass: LoginProviderMock
    // }
    LoginProvider,
    EventsManagerProvider
  ]
})
export class AppModule {}
