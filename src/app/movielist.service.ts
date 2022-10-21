import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IMovielist} from './list';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {
private _url:string="https://634c312a317dc96a3093678e.mockapi.io/movies";
  constructor(private http: HttpClient) { }
  getMovielist():Observable<IMovielist[]>{
    return this.http.get<IMovielist[]>(this._url);
  }
}
