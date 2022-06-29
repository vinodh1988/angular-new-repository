import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:number=0;
  record:any;
  constructor(private route:ActivatedRoute,private hs:ServiceService) {
     this.route.params.subscribe(params=> {
         this.id=params["id"]
         this.hs.getDetails(this.id).subscribe({
           next:(x:any)=>{this.record=x},
           error:(error:any)=>this.record={id:0,title:"",description:[]}
         })

     })
   }

  ngOnInit(): void {
  }


}
