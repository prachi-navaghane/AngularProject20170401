import { HostBinding } from '@angular/core';
import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[Sizer]'
})
export class SizerDirective implements OnInit {

  // @Input() Sizer: string;
@Input() @HostBinding ('style.width') Sizer  : string;
  constructor(private elRef?: ElementRef, private rend?: Renderer2) {

  }
  ngOnInit(): void {
    // this.rend.setStyle(this.elRef.nativeElement, 'width', this.Sizer);
    // this.elRef.nativeElement.style.width = "500px";
  }
  @HostListener('mouseenter')
  WhenMouseEnters() {
    // this.rend.setStyle(this.elRef.nativeElement, 'width', '500px');
    // this.rend.addClass(this.elRef.nativeElement, 'mixLg');
    // this.rend.removeClass(this.elRef.nativeElement, 'mixMn');
    this.Sizer = '500px';
    console.log(`mouse enter`);
  }
  @HostListener('mouseleave')
  WhenMouseLeaves() {
    // this.rend.removeClass(this.elRef.nativeElement, 'mixLg');
    // this.rend.addClass(this.elRef.nativeElement, 'mixMn');
    // this.rend.setStyle(this.elRef.nativeElement, 'width', this.Sizer);
    this.Sizer ='200px';
    console.log(`mouse leave`);
  }
}
