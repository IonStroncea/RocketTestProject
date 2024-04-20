import { Component } from "@angular/core";
import { NavigationComponent } from "./adminComponents/navigation.component";

@Component({
    selector:'admin-page',
    standalone:true,
    imports:[NavigationComponent],
    template:'<div class="container"><div class="left"><navigation/></div><div class= "right"></div></div>',
    styles:".container{display:flex; height:100%}\
    .left{flex-basis: 15%; background-repeat: no-repeat; background-color:rgb(255, 255, 255);min-height:100%;}\
    .right{flex-basis: 85%; background-color:rgb(236, 239, 241);}"
})
export class AdminComponent{

}