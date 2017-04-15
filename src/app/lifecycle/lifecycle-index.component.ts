import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-index',
  template: `
    <div class="container">
    <div class="row">
    <app-lifecycle [myData]="date" *ngIf="isVisible"></app-lifecycle>
    </div>
    <div class="row">
        <div class="col-md-12">
          <input type="button" value="okay" (click)="change()"/>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LifecycleIndexComponent implements OnInit {
  isVisible: boolean;
  date: string;
  constructor() { }

  ngOnInit() {
  }
  change() {
    this.date = '' + new Date();
    this.isVisible = !this.isVisible;
  }
}
