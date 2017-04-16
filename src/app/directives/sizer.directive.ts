import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[Sizer]'
})
export class SizerDirective implements OnInit {

  constructor(private elRef?: ElementRef, private rend?: Renderer2) {
  }
  ngOnInit(): void {
    this.rend.setStyle(this.elRef.nativeElement, 'width', '500px');
    // this.elRef.nativeElement.style.width = "500px";
  }
  @HostListener('mouseenter')
  WhenMouseEnters() {
    //this.rend.setStyle(this.elRef.nativeElement, 'width', '500px');
    this.rend.addClass(this.elRef.nativeElement, 'mixLg');
    this.rend.removeClass(this.elRef.nativeElement, 'mixMn');
    console.log(`mouse enter`);
  }
  @HostListener('mouseleave')
  WhenMouseLeaves() {
    this.rend.removeClass(this.elRef.nativeElement, 'mixLg');
    this.rend.addClass(this.elRef.nativeElement, 'mixMn');
   console.log(`mouse leave`);
  }
}
