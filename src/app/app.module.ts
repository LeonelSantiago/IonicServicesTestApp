import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UserspagePage } from '../pages/userspage/userspage';
import { DgiiPage } from '../pages/dgii/dgii';
import { PokeapiPage } from '../pages/pokeapi/pokeapi';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { DgiiServiceProvider } from '../providers/dgii-service/dgii-service';
import { PokeapiServiceProvider } from '../providers/pokeapi-service/pokeapi-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserspagePage,
    DgiiPage,
    ListPage,
    PokeapiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserspagePage,
    DgiiPage,
    ListPage,
    PokeapiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    DgiiServiceProvider,
    PokeapiServiceProvider
  ]
})
export class AppModule {}
