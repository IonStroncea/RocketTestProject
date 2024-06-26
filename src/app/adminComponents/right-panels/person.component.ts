import { Component, Input } from "@angular/core";
import { RandomService } from "../../randomService";
import { PersonService } from "../../person.service";

@Component({
    selector:"person",
    standalone:true,
    providers:[PersonService],
    template:'<div class=panel>\
        <div class="icon"><img alt="Emmy Anderson avatar" src="{{avatar}}" class="MuiAvatar-img css-1pqm26d-MuiAvatar-img"></div>\
    <div class="info">\
        <div class="h6">{{first_name}} {{last_name}}</div>\
        <div class="p">8:00 - 10:00</div>\
    </div>\
    <a class = "right-sign-container" href="">\
    <svg class="right-sign" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ChevronRightIcon"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>\
</a>\
    </div>',
    styles:'.panel{width:100%; background-color:white; border-radius:16px; margin-bottom:15px; display:flex;}\
    .icon{width:40px;height:40px; border-radius:50%;display: flex;  align-items: center;  justify-content: center; margin:25px 0 25px 25px}\
    .icon img{width:40px;height:40px; border-radius:50%}\
    .info{ margin:25px 0 25px 25px;}\
    .h6{font-family: Nunito, sans-serif; font-weight: 700;  font-size: 1rem;color: rgb(69, 90, 100);}\
    .p{font-family: Nunito, sans-serif;font-weight: 400; font-size: 0.875rem; color: rgb(96, 125, 139); margin-top:5px}\
    .right-sign{width:24px; height:24px;}\
    .right-sign-container{width:40px; height:40px; margin-left:auto; margin-right:25px; margin-top:25px;border-radius:50%;display:flex;  align-items: center; justify-content: center;}\
    .right-sign-container:hover{background-color:rgb(245,245,245)}'
})
export class PersonComponent{
 @Input() order : number = 0;
 first_name:string="";
 last_name:string="";
 avatar:string="";

 constructor(private service: PersonService) { 
 }
 ngOnInit() {
     this.service.value$.subscribe((value) => {
       let person = value.person;

       this.first_name = person.first_name;
       this.last_name = person.last_name;
       this.avatar = person.avatar;
     });
     this.service.getPerson();
 }
}