import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

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
}
