import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environment/environment';
import { AngularFireProvider } from '../providers/angular-fire/angular-fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NeumaticosPage } from '../pages/neumaticos/neumaticos';
import { NeumaticoPage } from '../pages/neumatico/neumatico';
import { FlotaPage } from '../pages/flota/flota';
import { CamionesPage } from '../pages/camiones/camiones';
import { CamionPage } from '../pages/camion/camion';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NeumaticoPage,
    NeumaticosPage,
    FlotaPage,
    CamionesPage,
    CamionPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NeumaticoPage,
    NeumaticosPage,
    FlotaPage,
    CamionesPage,
    CamionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireProvider
  ]
})
export class AppModule {}
