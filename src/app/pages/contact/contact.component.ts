import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contacts:any;
  constructor(private cs:ContactService) { }

  ngOnInit(): void {
      this.cs.getContacts().subscribe({
        next: (data:any)=> this.contacts=data,
        error:()=>this.contacts=[]
      })
  }

}
