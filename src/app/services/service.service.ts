import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  httpOptions:any;
  constructor(private http:HttpClient) { }
  
  getServices():Observable<any>{
    return this.http.get("http://localhost:4500/services");
  }

  getFeedbacks():Observable<any>{
    return this.http.get("http://localhost:4500/feedbacks");
  }

  getDetails(x:number):Observable<any>{
    return this.http.get("http://localhost:4500/details/"+x);
  }

  postFeedback(obj:any):Observable<any>{
    this.httpOptions = {
      headers: new HttpHeaders({

        'Content-Type':  'application/json'
      })
    }
    return this.http.post("http://localhost:4500/feedbacks",obj,this.httpOptions);
   }
  
  

}
