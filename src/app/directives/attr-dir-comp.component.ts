import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-dir-comp',
  template: `
   <div class="container">
   <div class="row">
   <div class="col-md-12">
   <h1>Attribute directives</h1>
   <hr>
   </div>
   </div>
   <div class="row">
   <div class="col-md-8">
   <div [ngClass]="{redBorder:true}">
   this is codekul.com
   </div>
   </div>
   <div class="col-md-4">
  <input type="button" (click)="isShown = !isShown" class="btn btn-primary" value="Show">
   </div>
   </div>
   </div>
  `,
  styles: [`
  .redBorder
  {
    border: 1px solid red;
  }
  `]
})
export class AttrDirCompComponent implements OnInit {
 isShown : boolean;
  constructor() {
    this.isShown = true;
  }

  ngOnInit() {
  }

}
