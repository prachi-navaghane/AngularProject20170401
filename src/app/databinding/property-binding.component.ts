import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
inputValue : string;
inputType ='button';
redBorder='1px solid red';
  constructor() {
    this.inputValue ='apple';
  }

  ngOnInit() {
  }

}
