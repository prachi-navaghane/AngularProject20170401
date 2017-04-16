import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  mobiles: Array<any>;
  constructor() {
    this.mobiles = new Array<string>();
    this.mobiles.push('Apple');
    this.mobiles.push('BB');
  }
  getMobiles() {
    return this.mobiles;
  }
  addMobile(mob: string) {
    this.mobiles.push(mob);
  }
}
