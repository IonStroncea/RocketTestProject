import { Component } from "@angular/core";
import { RandomNumberService } from "../../randomNumberService";

@Component({
    selector:"likes",
    standalone:true,
    template:'<div class=panel>\
        <div class="icon"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-utw1md-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ThumbUpIcon"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"></path></svg></div>\
    <div class="info">\
        <div class="h6">{{ value }}</div>\
        <div class="p">Likes</div>\
    </div>\
    <svg class="up-sign" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ArrowDropUpIcon"><path class="path-green" d="m7 14 5-5 5 5z"></path></svg>\
    </div>',
    styles:'.panel{width:100%; background-color:white; border-radius:16px; margin-bottom:15px; display:flex;}\
    .icon{width:40px;height:40px; background-color:rgb(41, 98, 255); border-radius:50%;display: flex;  align-items: center;  justify-content: center; margin:25px 0 25px 25px}\
    .icon svg{width:24px;height:24px;}\
    .info{ margin:25px 0 25px 25px;}\
    .h6{font-family: Nunito, sans-serif; font-weight: 700;  font-size: 1rem;color: rgb(69, 90, 100);}\
    .p{font-family: Nunito, sans-serif;font-weight: 400; font-size: 0.875rem; color: rgb(96, 125, 139); margin-top:5px}\
    .up-sign{fill:rgb(0,230,118);width:24px; height:24px; margin-left:auto; margin-right:25px; margin-top:35px;}\
    .icon svg path{fill:white}\
    .path-green{fill:rgb(0,230,118)}\
    '
})
export class LikesComponent{
    value:string="";
    constructor(private service: RandomNumberService) { 
    }
    ngOnInit() {
        this.service.value$.subscribe((value) => {
          this.value = value.likes;
        });
    }
}