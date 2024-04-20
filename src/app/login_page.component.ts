import { Component } from "@angular/core";
import { LoginFormComponent } from "./loginComponents/login_form.component";

@Component({
    selector : 'login-page',
    standalone : true,
    imports : [LoginFormComponent],
    template : '<div class="container"><div class="left"></div><div class= "right"><login-form></login-form></div></div>',
    styles:".container{display:flex; height:100%}\
    .left{flex-basis: 58.3333%; background-repeat: no-repeat; background-color:rgb(236, 239, 241); max-width:58.3333%;min-height:100%; background-size: cover;padding:0px; margin : 0px;background-image: url(https://m6v3l9.github.io/react-material-admin/img/startup.svg);}\
    .right{flex-basis: 41.6667%; background-color:rgb(255, 255, 255); max-width:41.6667%; min-height:100%;padding:0px; margin : 0px;background-size: cover;}"
})
export class LoginPageComponent{

}