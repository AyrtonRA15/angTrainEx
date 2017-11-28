import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onHover() {
    this.el.nativeElement.style.color = '#2e2e2e';
    this.el.nativeElement.style.backgroundColor = '#cecece';
    this.el.nativeElement.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2)';
    this.el.nativeElement.style.borderRadius = '5px';
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.color = null;
    this.el.nativeElement.style.backgroundColor = null;
    this.el.nativeElement.style.boxShadow = null;
    this.el.nativeElement.style.borderRadius = null;
  }

  constructor(private el: ElementRef) { }

}
