import { Component } from "@angular/core";

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
    <div class="field-label">Email address*</div>\
    <input type="text" name="email" class="filed-input"/>\
    </div>\
    <br/>\
    <div class="field">\
    <div class="field-label">Password*</div>\
    <input type="password" name="password" class="filed-input"/>\
    </div>\
    <br/>\
    <div class="forgot-password">\
        <a href="" class="forgot-password-ref">Forgot password?</a>\
    </div>\
    <br/>\
    <div class="sign-button">\
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
    styles :'.form-parent{width:100%}\
    .toolbar{height:104px; text-align:right;}\
    path{color : rgb(69, 90, 100);}\
    .tool-icon{width:24px;height:24px;margin-right:40px;margin-left: auto;margin-top:40px;color : rgb(69, 90, 100);}\
    .form-container{width:500px; margin:auto; text-align: center;margin-top:40px}\
    .svg{color : rgb(69, 90, 100);margin-inline:auto;}\
    .SignInText{color : rgb(69, 90, 100);text-size-adjust: 100%;  font-size: 1.5rem;}\
    form{width:396px; margin:auto; text-align:left;}\
    .field{background-color: rgba(0, 0, 0, 0.06);padding:10px; border-radius: 16px;}\
    .field-label{text-align:left;color: rgb(96, 125, 139);font-family: Nunito, sans-serif;font-weight: 400; font-size: 0.8rem; line-height: 1.4375em; letter-spacing: 0px;}\
    .filed-input{width:100%; border:0; background-color: rgba(0, 0, 0, 0);}\
    input{outline: none;font-size: 1rem;color : rgb(69, 90, 100)}\
    .forgot-password{text-align:right;}\
    .forgot-password-ref:not(:hover){text-decoration:none;}\
    .forgot-password-ref{color: rgb(41, 98, 255);}\
    .sign-button{width:100%; text-align:center;background-color:rgb(41, 98, 255);color:white;border-radius: 16px; padding:17px 0px 17px 0px;}\
    .no-account{background-color:white; width:100%; text-align:center;border-radius: 16px; padding:17px 0px 17px 0px;}\
    .no-account:hover{background-color:rgba(41, 98, 255, 0.04);}\
    .no-account-ref{text-decoration:none;color: rgb(41, 98, 255);font-family: Nunito, sans-serif;font-size: 0.875rem;font-weight: 700;}'
})
export class LoginFormComponent{

}