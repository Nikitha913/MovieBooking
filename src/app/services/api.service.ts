import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postList(data:any){
    return this.http.post<any>("http://localhost:3000/movielist/",data);
  }
  getList(){
    return this.http.get<any>("http://localhost:3000/movielist/");
  }
  getCurrentData(id:any){
    return this.http.get(`http://localhost:3000/movielist/${id}`);
  }
  updatedata(id:any,data:any){
    return this.http.put(`http://localhost:3000/movielist/${id}`,data);
  }
}
