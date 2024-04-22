import { Injectable } from '@angular/core';

//Service to save logged user data. Saves in sesssion. Now not used. NGrx used instead
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn(){
    return sessionStorage.getItem("email") != "" && sessionStorage.getItem("email") != null;
  }

  loggIn(loginData : {email : string, password:string}) {
    sessionStorage.setItem("email", loginData.email);
    sessionStorage.setItem("password", loginData.password);
  }

  getLoggInData(){
    return {email : sessionStorage.getItem("email"), password :  sessionStorage.getItem("password")}
  }

  loggOut(){
    sessionStorage.clear();
  }
}