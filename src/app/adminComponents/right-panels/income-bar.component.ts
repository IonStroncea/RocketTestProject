import { Component } from "@angular/core";
import { RandomNumberService } from "../../randomNumberService";

@Component({
    selector:"income-bar",
    standalone:true,
    template:'\
        <div class="content">\
            <div class="value-text">\
            <div class="h6">Income</div>\
            <div class="h6 right">{{value}}</div>\
        </div>\
        <div class="bar"><div class="full-bar" style="width:{{value}};"></div></div>\
        </div>\
            ',
    styles:'.h6{font-family: Nunito, sans-serif; font-weight: 700; font-size: 1rem;line-height: 1.6; letter-spacing: 0px;}\
    .content{width:100%}\
    .value-text{display:flex}\
    .right{margin-left:auto; margin-right:0px}\
    .bar{width:100%; border-radius:6px; height:12px; background-color:rgb(255,196,178); margin-top:15px;}\
    .full-bar{ border-radius:6px 0px 0px 6px; height:12px; background-color:rgb(255,61,0);}\
    '
})
export class IncomeBarComponent{
    value:string="0%";
    constructor(private service: RandomNumberService) { 
    }
    ngOnInit() {
        this.service.value$.subscribe((value) => {
          this.value = value.income + "%";
        });
    }
}