import { Component } from "@angular/core";

@Component({
    selector:"followers-bar",
    standalone:true,
    template:'\
        <div class="content">\
            <div class="value-text">\
            <div class="h6">Followers</div>\
            <div class="h6 right">50%</div>\
        </div>\
        <div class="bar"><div class="full-bar"></div></div>\
        </div>\
            ',
    styles:'.h6{font-family: Nunito, sans-serif; font-weight: 700; font-size: 1rem;line-height: 1.6; letter-spacing: 0px;}\
    .content{width:100%}\
    .value-text{display:flex}\
    .right{margin-left:auto; margin-right:0px}\
    .bar{width:100%; border-radius:6px; height:12px; background-color:rgb(255,237,178);margin-top:15px;}\
    .full-bar{width:50%; border-radius:6px 0px 0px 6px; height:12px; background-color:rgb(255,196,0);}\
    '
})
export class FollowersBarComponent{

}