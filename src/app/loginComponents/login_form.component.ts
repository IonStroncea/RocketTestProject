import { Component } from "@angular/core";
import { LoginService } from "../loginService";
import { Router } from "@angular/router";
import { State } from "../state.model";
import { Store } from '@ngrx/store';
import { Login } from "../user.actions";

@Component({
    selector:'login-form',
    template:'<div class="form-parent">\
        <div class="toolbar">\
            <div class="tool-icon">\
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="SettingsIcon"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg>\
        </div>\
        </div>\
        <div class="form-container">\
    <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24" style="fill: none; stroke: currentcolor; stroke-width: 8; stroke-linecap: round; stroke-linejoin: round;"><path d="m 6,7 6,10"></path><path d="M 18,7 V 7"></path></svg></div>\
    <h1 class="SignInText">Sign in</h1>\
    <form>\
    <div class="field">\
    <div class="field-label" style="color:{{emailColor}}">Email address*</div>\
    <input type="text" (focus)="emailFocus()" (blur)="emailBlur()" (keyup)="onEmailChange($event)" name="email" value="demo@example.com" class="filed-input"/>\
    </div>\
    <span class="ErrorMessage">{{emailError}}</span>\
    <br/>\
    <div class="field">\
    <div class="field-label" style="color:{{passwordColor}}">Password*</div>\
    <input type="password" (focus)="passwordFocus()" (blur)="passwordBlur()" (keyup)="onPasswordChange($event)" name="password" value="123456789123456789" class="filed-input"/>\
    </div>\
    <span class="ErrorMessage">{{passwordError}}</span>\
    <br/>\
    <div class="forgot-password">\
        <a href="" class="forgot-password-ref">Forgot password?</a>\
    </div>\
    <br/>\
    <div class="sign-button" (click)="submitForm()">\
        Sign in\
    </div>\
    <br/>\
    <div class="no-account">\
    <a href="" class="no-account-ref">Do not have an account? Sign Up!</a>\
    </div>\
    </form>\
    </div>\
</div>',
    standalone : true,
    styles :'.form-parent{font-family: Nunito, sans-serif;}\
    .ErrorMessage{color: rgb(255, 61, 0); font-family: Nunito, sans-serif; font-weight: 400; font-size: 0.75rem; line-height: 1.66;   letter-spacing: 0px;   text-align: left; margin: 3px 14px 0px;}\
    .form-parent{width:100%}\
    .toolbar{height:104px; text-align:right;}\
    path{color : rgb(69, 90, 100);}\
    .tool-icon svg{width:24px;height:24px;}\
    path{fill:rgb(112,112,112)}\
    .tool-icon{display:flex;align-items: center;  justify-content: center; width:60px;height:60px;margin-right:20px;margin-left: auto;margin-top:20px;color : rgb(69, 90, 100); border-radius:50%}\
    .tool-icon:hover{background-color:rgb(245,245,245)}\
    .form-container{width:500px; margin:auto; text-align: center;margin-top:40px}\
    .svg{color : rgb(69, 90, 100);margin-inline:auto;}\
    .SignInText{color : rgb(69, 90, 100);text-size-adjust: 100%;  font-size: 1.5rem;}\
    .SignInText{ font-family: Nunito, sans-serif;font-weight: 800;font-size: 1.125rem;line-height: 1.334;letter-spacing: 0px;}\
    form{width:396px; margin:auto; text-align:left;}\
    .field{background-color: rgba(0, 0, 0, 0.06);padding:10px; border-radius: 16px;}\
    .filed-input:focus + .field-label{color:rgb(41,98,255)}\
    .field-label{text-align:left;color: rgb(96, 125, 139);font-family: Nunito, sans-serif;font-weight: 400; font-size: 0.8rem; line-height: 1.4375em; letter-spacing: 0px;}\
    .filed-input{width:100%; border:0; background-color: rgba(0, 0, 0, 0);}\
    input{outline: none;font-size: 1rem;color : rgb(69, 90, 100)}\
    .forgot-password{text-align:right;}\
    .forgot-password-ref:not(:hover){text-decoration:none;}\
    .forgot-password-ref{color: rgb(41, 98, 255);}\
    .sign-button{width:100%; text-align:center;background-color:rgb(41, 98, 255);color:white;border-radius: 16px; padding:17px 0px 17px 0px;cursor: pointer;}\
    .sign-button:hover{background-color:rgb(0, 68, 255)}\
    .no-account{background-color:white; width:100%; text-align:center;border-radius: 16px; padding:17px 0px 17px 0px;}\
    .no-account:hover{background-color:rgba(41, 98, 255, 0.04);}\
    .no-account-ref{text-decoration:none;color: rgb(41, 98, 255);font-family: Nunito, sans-serif;font-size: 0.875rem;font-weight: 700;}'
})
export class LoginFormComponent{
    emailColor:string="rgb(69, 90, 100);"
    passwordColor:string="rgb(69, 90, 100);"
    emailError:string="";
    passwordError:string="";
    email:string="demo@example.com";
    password:string="123456789123456789";
    passwordFocus(){
        this.passwordColor = "rgb(41,98,255);";
    }
    passwordBlur(){
        this.passwordColor = "rgb(69, 90, 100);";
    }
    emailFocus(){
        this.emailColor = "rgb(41,98,255);";
    }
    emailBlur(){
        this.emailColor = "rgb(69, 90, 100);";
    }
    submitForm(){
        if(this.verifyEmail() && this,this.verifyPassword()){
        //this.loginService.loggIn({email : this.email, password : this.password});
        this.store.dispatch(Login({user:{loggedIn:true, email:this.email, password:this.password}}))
        this.router.navigate(['admin']);
        }
    }

    verifyEmail(){
        if(this.email.length == 0){
              this.emailError = "Required";  
              this.emailColor = "rgb(255, 61, 0);";
              return false;
        }
        else if(this.password.toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )){
            this.emailError = "Invalid email address"; 
            this.emailColor = "rgb(255, 61, 0);";
            return false; 
        }
        else{
            this.emailColor = "rgb(69, 90, 100);";
            this.emailError = ""; 
            return true; 
        }
    }

    verifyPassword(){
        if(this.password.length == 0){
              this.passwordError = "Required";  
              this.passwordColor = "rgb(255, 61, 0);";
              return false;
        }
        else if(this.password.length < 8){
            this.passwordError = "Must be 8 characters or more"; 
            this.passwordColor = "rgb(255, 61, 0);";
            return false; 
        }
        else{
            this.passwordColor = "rgb(69, 90, 100);";
            this.passwordError = ""; 
            return true; 
        }
    }

    onPasswordChange(event: any) { 
        this.password = event.target.value;
        this.verifyPassword();
      }

    onEmailChange(event: any) { 
        this.email = event.target.value;
        this.verifyEmail();
      }
    //constructor(private loginService:LoginService, private router: Router){}
    constructor(private store:Store<State>, private router: Router){}
}