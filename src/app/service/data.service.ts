import { Injectable, EventEmitter } from '@angular/core';
export interface dataListener {
  listen(mob: string): void;
}
@Injectable()
export class DataService {
  mobiles: Array<any>;
  private eventEmitter: EventEmitter<string>;
  constructor() {
    this.mobiles = new Array<string>();
    this.mobiles.push('Apple');
    this.mobiles.push('BB');
    this.eventEmitter = new EventEmitter<string>();
  }
  getMobiles() {
    return this.mobiles;
  }
  addMobile(mob: string) {
    this.mobiles.push(mob);
    this.eventEmitter.emit(mob);
  }
  listen(dataListener: dataListener) {
    this.eventEmitter.subscribe((mob) => dataListener.listen(mob));
  }
}
