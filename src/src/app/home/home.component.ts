import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private oauthService: OAuthService,) { }

  ngOnInit(): void{
  }

  public login(): void{ 
    this.oauthService.initLoginFlow();
  }

  public logout(): void{ 
    //トークンをclearにする。
    this.oauthService.logOut();
  }

  public get name(): any{
    //useing the data about the user
    const clamis = this.oauthService.getIdentityClaims();
    if(!clamis){
      return null;
    }
    return clamis;
  }
  
  public get email(): any{
    //useing the data about the user
    const claims = this.oauthService.getIdentityClaims();
    if(!claims){
      return null;
    }
    return claims;
  }

  public get token(): any{
    //useing the data about the token
    const accessToken = this.oauthService.getAccessToken();
    if(!accessToken){
      return null;
    }
    return accessToken;
  }
}
