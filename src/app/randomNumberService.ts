import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Person } from "./person";

@Injectable({
    providedIn: 'root'
  })
export class RandomNumberService{
    private messageSubject1 = new BehaviorSubject<{likes:string,love:string, smiles:string, views:number, followers:number, income:number, people:Person[]}>({likes:"50", love:"56", smiles:"89", views:0, followers:0, income:0, people:[new Person(),new Person(),new Person()]});
    value$=this.messageSubject1.asObservable();

    constructor(private http: HttpClient) {
        let minValue :number = 30000;
        let maxValue:number = 50000;
        this.http.get<any>('https://random-data-api.com/api/v3/projects/d124761f-3744-4c74-af50-9d33e9a41dc9?api_key=UemHgkx9mXsP1Eci6UizhA').subscribe(data => {
            let generatedData1 : number = 0;
            generatedData1 = data.random_decimal1;

            let generatedData2 : number = 0;
            generatedData2 = data.random_decimal2;

            let generatedData3 : number = 0;
            generatedData3 = data.random_decimal3;

            let generatedData4 : number = 0;
            generatedData4 = Math.round(50 + data.random_decimal4*4.5);

            let generatedData5 : number = 0;
            generatedData5 =Math.round(50 + data.random_decimal5*4.5);

            let generatedData6 : number = 0;
            generatedData6 = Math.round(50 + data.random_decimal6*4.5);
            
            let difference : number = maxValue - minValue;

            let result1 : number = minValue + ((generatedData1 * difference * 10) /100)
            let result2 : number =minValue + ((generatedData2 * difference * 10) /100)
            let result3 : number = minValue + ((generatedData3 * difference * 10) /100)
            let person1: Person = new Person();

            person1.first_name = data.first_name1;
            person1.last_name = data.last_name1;
            person1.avatar = data.avatar1;

            let person2: Person = new Person();

            person2.first_name = data.first_name2;
            person2.last_name = data.last_name2;
            person2.avatar = data.avatar2;

            let person3: Person = new Person();

            person3.first_name = data.first_name3;
            person3.last_name = data.last_name3;
            person3.avatar = data.avatar3;

            let result: Person[] = [person1, person2, person3];

            this.messageSubject1.next({likes:this.numberWithCommas(result1), love:this.numberWithCommas(result2), smiles:this.numberWithCommas(result3),
                views:generatedData4, followers: generatedData5, income:generatedData6, people:result
            });
        })
        
    }
    private numberWithCommas(x:number) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
}