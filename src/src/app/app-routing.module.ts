import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from './top-page/top-page.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FirstHttpComponent } from './first-http/first-http.component';
import { SecondHttpComponent } from './second-http/second-http.component';

const routes: Routes = [
  { path: 'top-http', component: TopPageComponent },
  { path: 'second-http', component: FirstHttpComponent },
  { path: 'third-http', component: SecondHttpComponent },
];

@NgModule({
  imports: [
    OAuthModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
