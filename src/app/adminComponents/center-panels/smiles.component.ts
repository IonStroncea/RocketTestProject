import { Component } from "@angular/core";
import { RandomNumberService } from "../../randomNumberService";

@Component({
    selector:"smiles",
    standalone:true,
    template:'<div class=panel>\
        <div class="icon"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="EmojiEmotionsIcon" style="color: rgb(255, 255, 255);"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zM12 18c-2.28 0-4.22-1.66-5-4h10c-.78 2.34-2.72 4-5 4zm3.5-7c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg></div>\
    <div class="info">\
        <div class="h6">{{value}}</div>\
        <div class="p">Smiles</div>\
    </div>\
    <svg class="down-sign" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ArrowDropDownIcon"><path class="path-red" d="m7 10 5 5 5-5z"></path></svg>\
    </div>',
    styles:'.panel{width:100%; background-color:white; border-radius:16px; margin-bottom:15px; display:flex;}\
    .icon{width:40px;height:40px; background-color:rgb(255, 196, 0); border-radius:50%;display: flex;  align-items: center;  justify-content: center; margin:25px 0 25px 25px}\
    .icon svg{width:24px;height:24px;}\
    .info{ margin:25px 0 25px 25px;}\
    .h6{font-family: Nunito, sans-serif; font-weight: 700;  font-size: 1rem;color: rgb(69, 90, 100);}\
    .p{font-family: Nunito, sans-serif;font-weight: 400; font-size: 0.875rem; color: rgb(96, 125, 139); margin-top:5px}\
    .down-sign{width:24px; height:24px; margin-left:auto; margin-right:25px; margin-top:35px;}\
    .icon svg path{fill:white}\
    .path-red{fill:rgb(255,61,0)}\
    '
})
export class SimlesComponent{
    value:string="";
    constructor(private service: RandomNumberService) { 
    }
    ngOnInit() {
        this.service.value$.subscribe((value) => {
          this.value = value.smiles;
        });
    }
}