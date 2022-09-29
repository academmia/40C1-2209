import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[later]'
})
export class LaterDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  
  @Input() set later(time: number) {
    setTimeout(()=>{
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, time);
  }
}
