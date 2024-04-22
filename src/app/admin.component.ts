import { Component } from "@angular/core";
import { NavigationComponent } from "./adminComponents/navigation.component";
import { LeftColumnComponent } from "./adminComponents/left-panels/left_column.component";
import { CenterPanelComponent } from "./adminComponents/center-panels/center_panel.component";
import { RightPanelComponent } from "./adminComponents/right-panels/right_panel.component";
import { Router } from "@angular/router";
import { State } from "./state.model";
import { Store } from '@ngrx/store';
import { Logout } from "./user.actions";

@Component({
    selector:'admin-page',
    standalone:true,
    imports:[NavigationComponent, LeftColumnComponent, CenterPanelComponent, RightPanelComponent],
    template:'<div class="container"><div class="left"><navigation/></div><div class= "right">\
        <div class="working-area">\
        <div class="top-panel">\
            <div class="logout-icon">\
                <div class="href_hover">\
                <a href="" (click)="logOut()">\
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 384.971 384.971" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Sign_Out"> <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"></path> <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>\
</a></div>\</div>\
        </div>\
        <div class="panels-area">\
            <div class="left-panels">\
                <left-column/>\
            </div>\
            <div class="center-panels">\
                <center-panel/>\
            </div>\
            <div class="right-panels">\
                <right-panel/>\
            </div>\
        </div>\
        </div>\
    </div></div>',
    styles:".href_hover{border-radius:50px; width:48px; height:48px; display:flex; align-items: center; justify-content: center;}\
    .href_hover:hover{background-color:rgb(226, 230, 233)}\
    .container{display:flex; min-height:100%}\
    .left{flex-basis: 15%; background-repeat: no-repeat; background-color:rgb(255, 255, 255);min-height:100%;}\
    .right{min-height:100%}\
    .top-panel{width:100%; min-height:90px;}\
    .working-area{width:100%;}\
    .logout-icon{width:48px; height:48px; margin-right:0; margin-left:auto; margin-top:32px}\
    .logout-icon svg{width:24px; height:24px;}\
    .right{flex-basis: 85%; padding-left:48px; padding-right:48px; background-color:rgb(236, 239, 241);}\
    .panels-area{display:flex;}\
    .left-panels{flex-basis: 33.33%; padding-left:40px;}\
    .center-panels{flex-basis: 33.33%;padding-right:20px;}\
    .right-panels{flex-basis: 33.33%;}\
    .logout-icon path{fill:rgb(69, 90, 100)}\
    "
})
export class AdminComponent{
    //constructor(private routes:Router, private loginService:LoginService){}

    constructor(private store:Store<State>,private routes:Router,){}

    logOut(){
       // this.loginService.loggOut();
       this.store.dispatch(Logout())
    }
}