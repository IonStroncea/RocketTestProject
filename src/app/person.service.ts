import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Person } from "./person";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
  export class PersonService{
    private messageSubject = new BehaviorSubject<{person:Person}>({person: new Person()});
    value$=this.messageSubject.asObservable();

    constructor(private http: HttpClient){}

    getPerson(){
        this.http.get<any>('https://randomuser.me/api/').subscribe(data => {
            let person : Person = new Person();

            person.avatar = data.results[0].picture.large;
            person.first_name = data.results[0].name.first;
            person.last_name = data.results[0].name.last;
            this.messageSubject.next({person:person});
        });
    }
  }