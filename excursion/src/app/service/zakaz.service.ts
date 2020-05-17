import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {config} from "../info/conf";

@Injectable({
  providedIn: 'root'
})
export class ZakazService {

  constructor(private http: HttpClient) { }

  doZakaz(body): Observable<any>{
    return this.http.post(`${config.HOST}/zakaz`, body);
  }
}
