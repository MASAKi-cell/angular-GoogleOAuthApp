import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    //プロバイダーのURL
    issuer: 'https://accounts.google.com', 
    //ログイン後に画面遷移するURLの設定
    redirectUri: window.location.origin + '/index.html',
    //SPAのid
    clientId: '000000000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
    responseType: 'code',
    //クライアントを許可する範囲の設定。
    scope: 'openid profile email offline_access api',
    //falseにした場合、エラーとなる。
    showDebugInformation: true,
};