import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @Input('appBackground')
  color: string ='';

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = ''
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.resaltar(this.color);
  }

  @HostListener('mouseleave')
  onMouseExit() {
    this.resaltar('');
  }

  resaltar(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
