import { FollowersBarComponent } from './followers_bar.component';
import { Component } from "@angular/core";
import { ViewsBarComponent } from "./views_bar.component";
import { IncomeBarComponent } from './income-bar.component';

@Component({
    selector:"targets",
    standalone:true,
    imports:[ViewsBarComponent, FollowersBarComponent, IncomeBarComponent],
    template:'<div class=panel>\
        <div class="content">\
        <div class="h6">Targets</div>\
        <div class="values">\
        <div class="value">\
            <views-bar/>\
        </div>\
        <div class="value">\
            <followers-bar/>\
        </div>\
        <div class="value">\
            <income-bar/>\
        </div>\
        </div>\
        </div>\
    </div>',
    styles:'.panel{width:100%; background-color:white; border-radius:16px; margin-bottom:15px; display:flex;color: rgb(69, 90, 100);}\
    .h6{font-family: Nunito, sans-serif; font-weight: 800; font-size: 1.125rem;  line-height: 1.334;}\
    .content{margin:25px;width:100%}\
    .values{margin-top:25px; width:100%}\
    .value{width:100%; margin-top:25px;}\
    '
})
export class TargetsComponent{

}