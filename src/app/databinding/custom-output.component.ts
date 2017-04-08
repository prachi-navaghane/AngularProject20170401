
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-output',
  templateUrl: './custom-output.component.html',
  styleUrls: ['./custom-output.component.css']
})
export class CustomOutputComponent implements OnInit {

  @Output() customClick: EventEmitter<string>;
  constructor() {
    this.customClick = new EventEmitter<string>();
  }

  ngOnInit() {
  }
  onBtnClick() {
    this.customClick.emit('' + new Date());
  }
}
