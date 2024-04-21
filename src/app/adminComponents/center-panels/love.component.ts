import { Component } from "@angular/core";
import { RandomNumberService } from "../../randomNumberService";

@Component({
    selector:"loves",
    standalone:true,
    template:'<div class=panel>\
        <div class="icon"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="FavoriteIcon" style="color: rgb(255, 255, 255);"><path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg></div>\
    <div class="info">\
        <div class="h6">{{ value }}</div>\
        <div class="p">Love</div>\
    </div>\
    <svg class="right-sign" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ArrowRightIcon"><path d="m10 17 5-5-5-5v10z"></path></svg>\
    </div>',
    styles:'.panel{width:100%; background-color:white; border-radius:16px; margin-bottom:15px; display:flex;}\
    .icon{width:40px;height:40px; background-color:rgb(255, 61, 0); border-radius:50%;display: flex;  align-items: center;  justify-content: center; margin:25px 0 25px 25px}\
    .icon svg{width:24px;height:24px;}\
    .info{ margin:25px 0 25px 25px;}\
    .h6{font-family: Nunito, sans-serif; font-weight: 700;  font-size: 1rem;color: rgb(69, 90, 100);}\
    .p{font-family: Nunito, sans-serif;font-weight: 400; font-size: 0.875rem; color: rgb(96, 125, 139); margin-top:5px}\
    .right-sign{width:24px; height:24px; margin-left:auto; margin-right:25px; margin-top:35px;}'
})
export class LovesComponent{
    value:string="";
    constructor(private service: RandomNumberService) { 
    }
    ngOnInit() {
        this.service.value$.subscribe((value) => {
          this.value = value.love;
        });
    }
}