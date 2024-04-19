import { Component } from "@angular/core";
import { LoginFormComponent } from "./login_form.component";

@Component({
    selector:'right-login-bar',
    template:'<div><login-form></login-form></div>',
    standalone : true,
    imports:[LoginFormComponent],
    styles :'div{ flex: 1; display: inline-block; background-color:rgb(255, 255, 255); width:33.333%; min-height:100%;padding:0px; margin : 0px;background-size: cover;}'
})
export class RightLoginComponent{

}