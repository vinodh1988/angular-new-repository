import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 services:any;
  constructor(private ss:ServiceService) { }

  ngOnInit(): void {
     this.ss.getServices().subscribe({
        next: (data:any)=>this.services=data,
        error: ()=>this.services=[]
     })
  }

}
