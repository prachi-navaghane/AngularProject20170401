import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean;
  constructor() { }

  @HostListener('click')
  Clicked() {
    this.isOpen = true;
  }
  @HostListener('mouseenter')
  OnMouseEnter() {
    this.isOpen = true;
  }
  @HostListener('mouseleave')
  OnouseLeft() {
    this.isOpen = false;
  }
}
