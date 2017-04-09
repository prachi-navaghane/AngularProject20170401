import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sub-more',
  template: `
    <div class="container">
    <div class="row">
    <div class="col-md-6">
    <input type="text" #header>
    <input type="button" class="btn btn-primary" (click)="myHeader=header.value" value="Okay">
    <input type="button" class="btn btn-primary" (click)="ChangeHeader()" value="Okay Again">
    </div>
    </div>
    <div class="row">
    <div class="col-md-12">
    <h1>{{myHeader}}</h1>
    </div>
    </div>
    </div>
  `,
  styles: []
})
export class SubMoreComponent implements OnInit {
@ViewChild('header') header : ElementRef;
myHeader:string;
  constructor() { }

  ngOnInit() {
  }
  ChangeHeader()
  {
    this.myHeader = this.header.nativeElement.value;
  }

}
