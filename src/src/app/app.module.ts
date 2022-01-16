import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { httpInterceotorrovidors } from './interceptors/index';
import { ToastrModule } from 'ngx-toastr'; 
import { OAuthModule } from 'angular-oauth2-oidc';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopPageComponent } from './top-page/top-page.component';
import { FirstHttpComponent } from './first-http/first-http.component';
import { SecondHttpComponent } from './second-http/second-http.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    FirstHttpComponent,
    SecondHttpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    OAuthModule,
    ToastrModule.forRoot({
      timeOut: 10000,
    }),
  ],
  providers: [httpInterceotorrovidors],
  bootstrap: [AppComponent],
})
export class AppModule {}
