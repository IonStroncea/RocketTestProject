import { Component } from "@angular/core";
import { LoginService } from "../../loginService";
import { State } from "../../state.model";
import { Store } from '@ngrx/store';
import { selectLogInEmail } from "../../user.selectors";

@Component({
    selector:'left-column',
    standalone:true,
    template:'\
    <div class=leftColumnContainer>\
        <h1 class = "bigh1">Hi {{name}},</h1>\
        <h1 class="smaller-h1">Welcome back!</h1>\
        <p class="p">This page is designed to give some important information about the application. Lets make someting together!</p>\
        <div class="image"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="406" height="306" class="illustration styles_illustrationTablet__1DWOa"><title>#111_report analysis_twocolour</title>\
        <ellipse cx="191.8" cy="266.48" rx="128.3" ry="11.63" class="fill-paper" style="fill:white"></ellipse>\
        <path class="fill-primary" d="M153.46,258s2.29,3,.8,5.81.68,5.22,2.91,3.24,3.12-10.21,3.12-10.21l-5.07-2.93Z"></path><path class="fill-primary" d="M172.34,218s-1,3.63,1.53,5.66,1.41,5.07-1.42,4.12-6.85-8.18-6.85-8.18l3.52-4.67Z"></path><polygon points="212.59 267.76 207.83 264.22 228.6 236.27 228.6 188.13 234.53 188.13 234.53 238.23 212.59 267.76" fill="#a5a5a5"></polygon><rect x="238.39" y="232.03" width="5.92" height="37.53" transform="translate(-101.14 188.74) rotate(-35.83)" fill="#a5a5a5"></rect><path d="M274.65,254.35s-7.32-2-8.91-8.81c0,0,11.34-2.29,11.66,9.41Z" class="fill-primary" opacity="0.58"></path><path d="M275.55,253.62s-5.12-8.08-.62-15.64c0,0,8.62,5.48,4.79,15.66Z" class="fill-primary" opacity="0.73"></path><path d="M276.86,253.63s2.71-8.54,10.87-10.15c0,0,1.53,5.54-5.29,10.17Z" class="fill-primary"></path><polygon points="271.56 253.44 273.04 263.58 282.38 263.62 283.76 253.49 271.56 253.44" fill="#24285b"></polygon><rect x="180.36" y="45.09" width="102.41" height="144.83" fill="#e6e6e6"></rect><rect x="180.36" y="181.36" width="102.41" height="19.46" fill="#c9c9c9"></rect><rect x="207.9" y="141.03" width="47.33" height="9.99" fill="#a5a5a5" opacity="0.39"></rect><rect x="207.9" y="157.52" width="47.33" height="9.99" fill="#a5a5a5" opacity="0.13"></rect><rect class="fill-warning" x="256.74" y="29.07" width="54.04" height="34.44"></rect><rect x="267.4" y="49.21" width="7.33" height="7.33" fill="#24285b"></rect><path d="M133,78.6S168.47,76.13,165.6,119,211,159.48,211,159.48v9.9s-66,8.67-72-28.35S133,78.6,133,78.6Z" class="fill-primary"></path><path d="M221.18,166.17S225,177,211,178.5s-3,11.39-12.75,22.32H181.5L179,165.13Z" opacity="0.08"></path><path d="M133,78.6S168.47,76.13,165.6,119,211,159.48,211,159.48v9.9s-66,8.67-72-28.35S133,78.6,133,78.6Z" fill="#fff" opacity="0.46"></path><rect x="279.75" y="41.34" width="7.33" height="15.21" fill="#24285b"></rect><rect x="292.79" y="36.04" width="7.33" height="20.5" fill="#24285b"></rect><circle cx="231.57" cy="97.86" r="27.5" fill="#fff"></circle><path class="fill-warning" d="M231.57,70.36v27.5l26.92-5.6S254.74,70.18,231.57,70.36Z"></path><path d="M231.57,97.86l-15.29,22.86s15.41,11.73,33.26-2.06c0,0,12.22-8.85,9-26.4Z" fill="#24285b"></path><path d="M109.15,56.61s1.3,5.5.91,9.34a2.84,2.84,0,0,1-3.13,2.52,6.26,6.26,0,0,1-5.53-4L99,59.88a5.07,5.07,0,0,1,1.43-5.68C103.26,51.47,108.53,53.22,109.15,56.61Z" fill="#f4a28c"></path><polygon points="99.48 62.75 101.22 81.17 111.3 79.49 105.99 66.76 99.48 62.75" fill="#f4a28c"></polygon><path d="M98.93,64.32h0a.53.53,0,0,0,.47.45,3.75,3.75,0,0,0,3.94-2.25,4.7,4.7,0,0,0-.75-5.12A22.3,22.3,0,0,0,107.8,57a5.09,5.09,0,0,0,1.65-.59l.83-4.4s1.69-4.53-.92-5.08-3.36,2.43-5.65.68-2.85-2.45-4.78-1,.67,2.71-2.73,3.17-3.27,1.87-3.09,3.42A2.72,2.72,0,0,0,94,54.52,17.33,17.33,0,0,1,98.93,64.32Z" fill="#24285b"></path><path d="M103.92,62.26s-.36-2.14-2-1.74S100.87,64,103.11,64Z" fill="#f4a28c"></path><path d="M109.79,60.11,111.67,62a.9.9,0,0,1-.36,1.48l-2.08.72Z" fill="#f4a28c"></path><path d="M106.67,68.47s-1.3.23-4.2-1c0,0,.92,3.58,5.79,4.71Z" fill="#ce8172" opacity="0.31"></path><path d="M69.83,120.21C64.47,105.13,62.5,97.86,87.7,83.38c12-6.9,30.92-7.93,49.41-4,36.7,7.83,6,55.53,15.34,81.34l-41.63,15.6S81.52,153,69.83,120.21Z" class="fill-primary"></path><path d="M110.82,176.33s15.52,62.64,40.85,82.2l7.33-3.69s-27.53-43.51-17.13-65.39a99,99,0,0,0,3.74-9.41l6.84-19.31Z" fill="#24285b"></path><path d="M98.67,99.23s11,10.37,4.14,27.69c-4.74,11.91,5.61,24.55,18,21.4.37-.1.76-.2,1.15-.32,18.25-5.5,28.59-.17,28.59-.17s.3,10.89,1.86,12.9l-41.63,15.6-1-.64-14.38-14.3S84.79,149.15,80,140.92,98.67,99.23,98.67,99.23Z" opacity="0.08"></path><path d="M152.45,160.73s50.06,1.32,37.05,30.36a175.61,175.61,0,0,1-15.68,28l-8.15-2.93s29-53.6-34-26.69Z" fill="#24285b"></path><path d="M97.64,97.77c-7-8.89-20.42-9.1-28.16-.86-13,13.8-29.57,40.45-10.42,74.7,19.76,35.34,72.61-10.88,72.61-10.88L126.5,150s-51.5,27-49,0C79.53,128.06,110.08,113.58,97.64,97.77Z" class="fill-primary"></path><path d="M97.64,97.77c-7-8.89-20.42-9.1-28.16-.86-13,13.8-29.57,40.45-10.42,74.7,19.76,35.34,72.61-10.88,72.61-10.88L126.5,150s-51.5,27-49,0C79.53,128.06,110.08,113.58,97.64,97.77Z" fill="#fff" opacity="0.46"></path><path d="M128.1,153.33,141.25,148s6.58,9-9.58,12.73Z" fill="#f4a28c"></path><polygon class="fill-warning" points="155.5 146.62 153.47 115.54 116.09 124.7 119.07 150.89 102 155.33 103.01 159.48 155.5 146.62"></polygon><circle cx="136.82" cy="134.76" r="3.85" fill="#fff"></circle><path d="M211,162.52s6.36-2,10.18,1.48S211,168.33,211,168.33Z" fill="#f4a28c"></path><path d="M91,81.7s-.82-6.2,11.46-7.7,18-3.66,19.52,3.29C122,77.29,116.78,87.4,91,81.7Z" class="fill-primary"></path><path d="M91,81.7s-.82-6.2,11.46-7.7,18-3.66,19.52,3.29C122,77.29,116.78,87.4,91,81.7Z" fill="#fff" opacity="0.46"></path></svg></div>\
    <div class="congratulations">\
        <div class=image-star><svg class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-5tf6s3-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></div>\
        <h3>Congratulations {{name}}</h3>\
        <p>You have completed 75% of your profile. Your current progress is great.</p>\
        <div class="view-propile">\
        <a href="">View profile</a>\
    <div>\
    </div>\
    </div>',
    styles:'.p{    font-family: Nunito, sans-serif; font-weight: 400;  font-size: 1rem;  line-height: 1.75;  letter-spacing: 0px; color: rgb(96, 125, 139);}\
    .leftColumnContainer{color:rgb(69,90,100)}\
    .bigh1{font-family: Nunito, sans-serif; font-weight: 800; font-size: 2rem; line-height: 1.167; letter-spacing: 0px;}\
    .smaller-h1{font-family: Nunito, sans-serif; font-size: 2rem; line-height: 1.167; letter-spacing: 0px;font-weight: 400;} \
    .view-propile{ align-items: center;   text-align: center;display: flex; background-color:white; border-radius:16px }\
    a{text-decoration:none;width:80.37px; height:24.5px; padding: 16px 24px 16px 26px; font-family: Nunito, sans-serif;font-weight: 700; font-size: 0.875rem; line-height: 1.75; letter-spacing: 0px; color:rgb(23,23,23)}\
    .view-propile:hover{background-color:rgb(182, 192, 200)}\
    .image svg{width:100%; height:100%;}\
    .congratulations{background-color: rgb(41, 98, 255);color: rgb(255, 255, 255); border-radius:16px; padding:24px; align-items: center;   text-align: center;display: flex; flex-direction: column;}\
    .image-star{width:40px; height:40px; border-radius:50%; background-color:white; display: flex;  align-items: center;  justify-content: center;}\
    .image-star svg {width:24px; height:24px; }\
    .image-star svg path { fill:rgb(41,98,255)}\
    .fill-primary{fill:rgb(83,129,255)}\
    .fill-warning{fill:rgb(255,207,51)}'
})
export class LeftColumnComponent{
    name : string="";

    /*constructor(private loginService:LoginService){
        let email = loginService.getLoggInData().email;
        let names = email?.split("@")[0];
        let first_name = names?.split(".")[0];
        let last_name = names?.split(".")[1];

        first_name = this.titleCaseWord(first_name);
        last_name = this.titleCaseWord(last_name);

        this.name = (first_name??last_name) ?? "";
    }*/

    constructor(private store:Store<State>){
        store.select(selectLogInEmail).subscribe(email =>
        {
            let names = email?.split("@")[0];
            let first_name = names?.split(".")[0];
            let last_name = names?.split(".")[1];

            first_name = this.titleCaseWord(first_name) ??"";
            last_name = this.titleCaseWord(last_name)??"";

            this.name = (first_name??last_name) ?? "";
    });
    }

    private titleCaseWord(word: string|undefined) {
        if (!word) return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
      }
}