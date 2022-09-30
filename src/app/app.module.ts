import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB1vLk8rXmhfnZVGcB7v0AVSPmW7hXrkjg",
      authDomain: "fapan-entregas-bf268.firebaseapp.com",
      projectId: "fapan-entregas-bf268",
      storageBucket: "fapan-entregas-bf268.appspot.com",
      messagingSenderId: "213043003396",
      appId: "1:213043003396:web:7a73a18ba3d561855ab551"
     }),
     AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
