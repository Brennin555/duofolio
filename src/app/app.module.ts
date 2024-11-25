import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

import { HttpClientModule } from '@angular/common/http';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
