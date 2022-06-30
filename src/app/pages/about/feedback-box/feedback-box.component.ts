import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-box',
  templateUrl: './feedback-box.component.html',
  styleUrls: ['./feedback-box.component.css']
})
export class FeedbackBoxComponent implements OnInit {
@Input("feedback") current:any;
  constructor() { }

  ngOnInit(): void {
  }

}
