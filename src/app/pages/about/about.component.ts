import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
feedbacks:any;
revenue:number= 1000;
types:string[]=["All","Branding and Communication","Inbound & Content Marketing","Film & Webinar","Digital Marketing","ECommerce & Websites",
  "Market Analysis"]
now:string="All";
  constructor(private fs:ServiceService) { }

  ngOnInit(): void {
     this.fs.getFeedbacks().subscribe({
       next: (data:any)=>{this.feedbacks=data},
       error: ()=>this.feedbacks=[]
     })
  }

}
