import { Component } from "@angular/core";
import { LikesComponent } from "./likes.component";
import { LovesComponent } from "./love.component";
import { SimlesComponent } from "./smiles.component";

@Component({
    selector:"center-panel",
    imports:[LikesComponent, LovesComponent, SimlesComponent],
    standalone:true,
    template:'<div class=panel>\
        <likes/>\
    </div>\
    <div class=panel>\
        <loves/>\
    </div>\
    <div class=panel>\
        <smiles/>\
    </div>\
    <div class=panel>\
        \
    </div>',
    styles:'.panel{margin-bottom:15px}'
})
export class CenterPanelComponent{

}