import { Color } from './color';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-emitter',
  template: `
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <input type="button" value="Magic" class="btn btn-primary" (click)="onMagic()">
        </div>

    </div>
  `,
  styles: []
})
export class ColorEmitterComponent implements OnInit {
  @Output() magicEvent: EventEmitter<Color>;
  colors = [
    '#ff3434',
    '#002439',
    '#ab2323',
    '#cd5683'
  ]
  constructor() {
    this.magicEvent = new EventEmitter<Color>();
  }

  ngOnInit() {
  }
  onMagic() {
    let color: Color = new Color();
    color.left = this.colors[Math.floor(Math.random() * 3)];
    color.right = this.colors[Math.floor(Math.random() * 3)];
    console.log(color.left);
    console.log (color.right);
    this.magicEvent.emit(color);
  }
}
