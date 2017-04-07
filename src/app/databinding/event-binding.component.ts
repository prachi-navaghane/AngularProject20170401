import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  inputData?: string;
  inputWidth: string = '100px';
  constructor() {
    this.inputData = '';
  }

  ngOnInit() {
  }
  toUpperCase(ipData: string): void {
    this.inputData = ipData.toUpperCase();
  }
  enlargeOrReduce() {
    if (this.inputWidth === '100px') {
      this.inputWidth = '200px';
    }
    else {
      this.inputWidth = '100px';
    }
  }
}
