import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `
  <div class="container">
  <div class="row">
  <div class="col-md-12">
  <ul>
  <li *ngFor="let mobile of mobiles; let i=index;">{{mobile}}
  </li>
  </ul>
  </div>
    </div>
    <div class="row">
  <div class="col-md-12">
  <input type="text" #mobile1>
  <input type="button" value="Add new Mobile" (click)="AddNewMobile(mobile1.value);">
  </div>
    </div>

    </div>

  `,
  styles: [],
  providers : [DataService]
})
export class OneComponent implements OnInit {
  mobiles: Array<string>;

  constructor(private data : DataService) {
    this.mobiles = this.data.getMobiles();
   }

  ngOnInit() {
  }
  AddNewMobile(mobile)
  {
    this.data.addMobile(mobile);
  }

}
