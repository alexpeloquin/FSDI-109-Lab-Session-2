import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import for Firebase DB
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore"; //one of the database options in firebase

// this is the credentials for the FB project
var fbConfig = {
  apiKey: "AIzaSyBmp1d_-QechGk8JY2vHoMdRZewKVM006Q",
  authDomain: "fsdi-6aa30.firebaseapp.com",
  databaseURL: "https://fsdi-6aa30.firebaseio.com",
  projectId: "fsdi-6aa30",
  storageBucket: "fsdi-6aa30.appspot.com",
  messagingSenderId: "92558793025"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(fbConfig),
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
