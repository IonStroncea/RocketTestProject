import { Component } from "@angular/core";
import { LeftLoginComponent } from "./loginComponents/login_left.component";
import { RightLoginComponent } from "./loginComponents/right_login.component";

@Component({
    selector : 'login-page',
    standalone : true,
    imports : [LeftLoginComponent, RightLoginComponent],
    template : '<left-login-bar/><right-login-bar/>',
    styleUrl : './app.component.css'
})
export class LoginPageComponent{

}