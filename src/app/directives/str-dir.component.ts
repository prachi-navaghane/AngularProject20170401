import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-dir',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">ngFor
        <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
        <ul>
          <li *ngFor="let mobile of mobiles">{{mobile}}</li>
        </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">ngIf, else
        <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <input type="text" *ngIf="isShown; then IfBlock; else ElseBlock;">
          <ng-template #IfBlock>
           If block
          </ng-template>
          <ng-template #ElseBlock>
          Else block
          </ng-template>
        </div>
        <div class="col-md-4">
          <input type="button" value="Toggle ngIf" class="btn btn-primary" (click)="isShown =!isShown">
        </div>
      </div>
      <div class="row">
      <div class="col-md-12">ngSwitch
      <hr>
      </div>
    </div>
      <div class="row">
        <div class="col-md-12">
          <input type="text" #day>
          <input type="button" class="btn btn-primary" value="Select day" (click)="myDay=day.value">
          <div [ngSwitch]="myDay">
            <div *ngSwitchCase="1">Monday</div>
            <div *ngSwitchCase="2">Tuesday</div>
            <div *ngSwitchCase="3">Wednesday</div>
            <div *ngSwitchCase="4">Thursday</div>
            <div *ngSwitchDefault>Sunday</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
        <ng-template [ngIf]="isShown">
          ngIf toggle with basic syntax!
        </ng-template>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class StrDirComponent implements OnInit {
 mobiles =  ['Andriod', 'Apple', 'BB'];
  constructor() { }

  ngOnInit() {
  }

}
