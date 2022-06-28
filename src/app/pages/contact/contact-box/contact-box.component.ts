import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
  styleUrls: ['./contact-box.component.css']
})
export class ContactBoxComponent implements OnInit {
@Input() contact:any;
  constructor() { }

  ngOnInit(): void {
  }

}
