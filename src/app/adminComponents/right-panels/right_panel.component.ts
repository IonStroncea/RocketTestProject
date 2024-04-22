import { Component } from "@angular/core";
import { TargetsComponent } from "./targets.component";
import { PersonComponent } from "./person.component";
import { AddPersonComponent } from "./add-persion.component";

@Component({
    selector:"right-panel",
    standalone:true,
    imports:[TargetsComponent, PersonComponent,AddPersonComponent],
    template:'<div class=panel>\
        <targets/>\
        </div>\
    <h2>Meetings</h2>\
    <div class="meetings-panel">\
        <div class="person-panel">\
            <person [order]=0/>\
            <person [order]=1/>\
            <person [order]=2/>\
            <add-person/>\
    </div>\
    </div>\
    ',
    styles:'.panel{margin-bottom:15px}\
    h2{ font-family: Nunito, sans-serif; font-weight: 800; font-size: 1.25rem;line-height: 1.235;letter-spacing: 0px; color:rgb(69,90,100)}'
})
export class RightPanelComponent{

}