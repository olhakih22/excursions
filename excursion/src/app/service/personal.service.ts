import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {config} from "../info/conf";

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }

  getPersonal(): Observable<any>{
    return this.http.get(`${config.HOST}/personal`);
  }
}
