import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {config} from "../info/conf";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCity(): Observable<any>{
    return this.http.get(`${config.HOST}/city`);
  }

  getCitBeIdy(id): Observable<any>{
    return this.http.get(`${config.HOST}/city/${id}`);
  }

}
