import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGIN_USER } from '../../endpoints/endpoints';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  loginService( user:string,pwd:string ) {

    return this.http.post(LOGIN_USER,{
      email:user,
      password:pwd
    });
    
  }

}
