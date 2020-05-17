import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {config} from "../info/conf";

@Injectable({
  providedIn: 'root'
})
export class FilialService {

  constructor(private http: HttpClient) { }

  getFilial(): Observable<any>{
    return this.http.get(`${config.HOST}/filial`);
  }

}
