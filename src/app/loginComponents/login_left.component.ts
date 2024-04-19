import { Component } from "@angular/core";

@Component({
    selector:'left-login-bar',
    template:'<div class="back"></div>',
    standalone : true,
    styles :'.back{display: inline-block;    background-repeat: no-repeat; background-color:rgb(236, 239, 241); width:66.6666%;min-height:100%; background-size: cover;padding:0px; margin : 0px;background-image: url(https://m6v3l9.github.io/react-material-admin/img/startup.svg);}'
})
export class LeftLoginComponent{

}