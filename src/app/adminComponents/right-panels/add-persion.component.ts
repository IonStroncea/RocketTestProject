import { Component } from "@angular/core";

@Component({
    selector:"add-person",
    standalone:true,
    template:'<div class=panel>\
        <div class="href">\
            <a href="">\
        <div class="icon"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="AddIcon"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg></div>\
        </a>\
    </div>\
     </div>',
    styles:'.href{border-radius:16px; margin-bottom:15px; display:flex;align-items: center;  justify-content: center; background-color:white;}\
    .href:hover{background-color:rgb(182, 192, 200)}\
    .panel{width:100%;}\
    .icon{width:40px;height:40px;border-radius:50%;display: flex;  align-items: center;  justify-content: center; margin:10px 0 10px 0px}\
    .icon svg{width:24x;height:24px; border-radius:50%}\
    .info{ margin:25px 0 25px 25px;}\
    .h6{font-family: Nunito, sans-serif; font-weight: 700;  font-size: 1rem;color: rgb(69, 90, 100);}\
    .p{font-family: Nunito, sans-serif;font-weight: 400; font-size: 0.875rem; color: rgb(96, 125, 139); margin-top:5px}\
    .right-sign{width:24px; height:24px; margin-left:auto; margin-right:25px; margin-top:35px;}'
})
export class AddPersonComponent{

}