import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private oAuthService: OAuthService,){
    this.configureWithNewConfigApi();
  }

  private async configureWithNewConfigApi() {
    //token用のバリデーター
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    //トークン取得のメゾット
    this.oAuthService.configure(authConfig);
    await this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }
}
