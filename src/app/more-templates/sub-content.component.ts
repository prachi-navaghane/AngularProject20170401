import { Component, ContentChild, ElementRef, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub-content',
  template: `
    <div class="container">
    <div class="row">
        <h1>content and content child</h1>
        <hr>
      </div>
     <div class="row">
        <div class="col-md-12">
          <ng-content select=[header]></ng-content>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="">User Name</label>
          <input type="text">
        </div>
    </div>
      <div class="row">
        <div class="col-md-12">
          <ng-content select=[footer]></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SubContentComponent implements OnInit {
  @ContentChild('ip') ip: ElementRef;
  @Output() actualIp: string;
  constructor() { }

  ngOnInit() {
  }
  myIp() {
    console.log(`called ` + this.ip.nativeElement.value);
    this.actualIp = this.ip.nativeElement.value;
  }

}
