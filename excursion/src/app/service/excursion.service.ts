import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {config} from "../info/conf";

@Injectable({
  providedIn: 'root'
})
export class ExcursionService {

  constructor(private http: HttpClient) { }

  getExcursionBeId(id): Observable<any>{
    return this.http.get(`${config.HOST}/excursion/${id}`);
  }

}
