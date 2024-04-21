import { Component } from "@angular/core";
import { LikesComponent } from "./likes.component";
import { LovesComponent } from "./love.component";
import { SimlesComponent } from "./smiles.component";
import { ViewsGraphComponent } from "./views_graph_panel.component";

@Component({
    selector:"center-panel",
    imports:[LikesComponent, LovesComponent, SimlesComponent, ViewsGraphComponent],
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
        <views-graph/>\
    </div>',
    styles:'.panel{margin-bottom:15px}'
})
export class CenterPanelComponent{

}