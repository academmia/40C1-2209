import {Directive, HostListener, Input, ElementRef} from '@angular/core';
import { IProject } from './project';

@Directive({
  selector: '[confirmAction]'
})
export class ConfirmActionDirective {

  constructor(private el: ElementRef) {}

  @Input() confirmAction = (p: IProject)=>{};
  @Input() project?: IProject;
  @Input() confirmMsg = 'Confirmati actiunea?';

  @HostListener('click', ['$event'])
  confirm(event: Event) {
    const confirmed = window.confirm(this.confirmMsg);
    console.log('Rezultat confirmare:', confirmed);
    console.log(this.project);
    if(confirmed && this.project) {
      this.confirmAction(this.project);
    }

  }
}
