import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  AfterViewChecked,
  SimpleChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() myData:string;
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit() {
    this.lg('ngOnInit');
  }

  ngDoCheck(): void {
    this.lg('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.lg('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    this.lg('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.lg('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    this.lg('ngOnDestroy');
  }
  lg(msg) {
    console.log(msg);
  }

  ngAfterContentChecked(): void {
    this.lg('ngAfterContentChecked');
  }
}
