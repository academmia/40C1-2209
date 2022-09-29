import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverDisplay]'
})
export class HoverDisplayDirective {
  constructor(private el: ElementRef) { }

  @Input() ownerName: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    let owner = this.el.nativeElement.querySelector('.card-footer').innerText;

    if (this.ownerName && owner.indexOf(this.ownerName) !== -1)
        this.colorElement('#67965a', '#195009');
    else
        this.colorElement('#5a9693', '#065b56');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorElement(null, null);
  }

  private colorElement(bgColor: string | null, color: string | null) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = color;
  }
}
