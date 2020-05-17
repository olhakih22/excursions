import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from '../info/conf';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<any>{
    return this.http.get(`${config.HOST}/comments`);
  }

  postComments(comment): Observable<any>{
    return this.http.post(`${config.HOST}/comments`, comment);
  }

}
