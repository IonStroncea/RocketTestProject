import { Component } from "@angular/core";

@Component({
    selector:'navigation',
    standalone:true,
    template:'\
    <div class="navigation-container">\
    <div class="icon">\
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24" style="fill: none; stroke: currentcolor; stroke-width: 8; stroke-linecap: round; stroke-linejoin: round;"><path d="m 6,7 6,10"></path><path d="M 18,7 V 7"></path></svg>\
    </div>\
    <br/>\
    <div class="navigation-list">\
        <div class="navigation-item active">\
            <div class="navigation-item-image">\
            <svg class="" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>\
            </div>\
            <div class="navigation-item-text">\
                <span>Home</span>\
            </div>\
        </div>\
        <div class="navigation-item">\
            <div class="navigation-item-image">\
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="BarChartIcon"><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path></svg>\
            </div>\
            <div class="navigation-item-text">\
                <span>Dashboard</span>\
            </div>\
        </div>\
        <div class="navigation-item">\
            <div class="navigation-item-image">\
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="PeopleIcon"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>\
            </div>\
            <div class="navigation-item-text">\
                <span>Users</span>\
            </div>\
        </div>\
        <div class="navigation-item">\
            <div class="navigation-item-image">\
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="EventIcon"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></svg>\
            </div>\
            <div class="navigation-item-text">\
                <span>Calendar</span>\
            </div>\
        </div>\
        <div class="navigation-item">\
            <div class="navigation-item-image">\
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="AccountTreeIcon"><path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"></path></svg>\
            </div>\
            <div class="navigation-item-text">\
                <span>Projects</span>\
            </div>\
        </div>\
        <div class="navigation-item">\
            <div class="navigation-item-image">\
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="HelpCenterIcon"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6.99 15c-.7 0-1.26-.56-1.26-1.26 0-.71.56-1.25 1.26-1.25.71 0 1.25.54 1.25 1.25-.01.69-.54 1.26-1.25 1.26zm3.01-7.4c-.76 1.11-1.48 1.46-1.87 2.17-.16.29-.22.48-.22 1.41h-1.82c0-.49-.08-1.29.31-1.98.49-.87 1.42-1.39 1.96-2.16.57-.81.25-2.33-1.37-2.33-1.06 0-1.58.8-1.8 1.48l-1.65-.7C9.01 7.15 10.22 6 11.99 6c1.48 0 2.49.67 3.01 1.52.44.72.7 2.07.02 3.08z"></path></svg>\
            </div>\
            <div class="navigation-item-text">\
                <span>Help</span>\
            </div>\
        </div>\
    </div>\
    <div class="space-holder"></div>\
    <div class="navigation-bottom">\
        <div class="navigation-bottom-item">\
            <div class="navigation-bottom-image">\
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="PersonIcon"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>\
            </div>\
            <div class="navigation-bottom-text">\
                <span>John Smith</span>\
            </div>\
        </div>\
        <div class="navigation-bottom-item">\
            <div class="navigation-bottom-image">\
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="SettingsIcon"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg>\
            </div>\
            <div class="navigation-bottom-text">\
                <span>Settings</span>\
            </div>\
        </div>\
    </div>\
    </div>',
    styles:'.navigation-container{color: rgb(69, 90, 100); padding:20px; height:100%}\
    .icon{margin:10px}\
    .navigation-list{}\
    .navigation-item-image{height:24px; width:24px; padding: 0px 20px 0 20px}\
    .navigation-item-image svg{color: rgb(69, 90, 100);}\
    .navigation-item{display:flex; color: rgb(69, 90, 100); padding:20px 0px 20px 0px; border-radius:16px}\
    .navigation-item.active{width:100%; background-color:rgb(236, 239, 241);}\
    .navigation-item.active:hover{background-color:rgba(41, 98, 255, 0.04);}\
    .navigation-item:hover{background-color:rgb(245,245,245)}\
    .navigation-item-text span{font-family: Nunito, sans-serif;font-weight: 300;font-size: 1rem;}\
    .navigation-item-text {padding-top: 5px}\
    .navigation-bottom{}\
    .space-holder{}\
    .navigation-bottom-item{display:flex; color: rgb(69, 90, 100); padding:10px 0px 10px 0px; border-radius:16px}\
    .navigation-bottom-item:hover{background-color:rgb(245,245,245)}\
    .navigation-bottom-text span{font-family: Nunito, sans-serif;font-weight: 300;font-size: 1rem;}\
    .navigation-bottom-text{padding-top: 10px}\
    .navigation-bottom-image{margin:0px 10px 0px 15px;height:40px; width:40px; background-color:rgb(236, 239, 241); border-radius:50%; display: flex; align-items: center; justify-content: center;}\
    .navigation-bottom-image svg{color: rgb(69, 90, 100);height:24px; width:24px;margin:auto;  width: 50%;  height: 50%;}'
})
export class NavigationComponent{

}