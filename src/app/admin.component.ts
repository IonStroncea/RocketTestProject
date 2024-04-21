import { Component } from "@angular/core";
import { NavigationComponent } from "./adminComponents/navigation.component";
import { LeftColumnComponent } from "./adminComponents/left-panels/left_column.component";
import { CenterPanelComponent } from "./adminComponents/center-panels/center_panel.component";
import { RightPanelComponent } from "./adminComponents/right-panels/right_panel.component";
import { Router } from "@angular/router";
import { LoginService } from "./loginService";

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
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="NotificationsIcon"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>\
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
    .top-panel{width:100%; min-height:104px;}\
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
    constructor(private routes:Router, private loginService:LoginService){}

    logOut(){
        this.loginService.loggOut();
    }
}