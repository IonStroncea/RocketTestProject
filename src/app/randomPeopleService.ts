import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Person } from "./person";

@Injectable({
    providedIn: 'root'
  })
export class RandomPeopleService{
    private messageSubject1 = new BehaviorSubject<Person[]>([new Person(),new Person(),new Person()]);
    value$=this.messageSubject1.asObservable();

    constructor(private http: HttpClient) {
        this.http.get<any>('https://random-data-api.com/api/v2/users?size=3').subscribe(data => {
            let person1: Person = new Person();

            person1.first_name = data[0].first_name;
            person1.last_name = data[0].last_name;
            person1.avatar = data[0].avatar;

            let person2: Person = new Person();

            person2.first_name = data[1].first_name;
            person2.last_name = data[1].last_name;
            person2.avatar = data[1].avatar;

            let person3: Person = new Person();

            person3.first_name = data[2].first_name;
            person3.last_name = data[2].last_name;
            person3.avatar = data[2].avatar;

            let result: Person[] = [person1, person2, person3];

            this.messageSubject1.next(result);
            });
        
    }
}