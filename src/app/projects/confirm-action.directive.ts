import { Directive, HostListener, Input } from '@angular/core';
import { IProject } from './project';

@Directive({
    selector: '[confirmAction]'
})
export class ConfirmActionDirective {
    @Input() confirmAction = (p: IProject)=>{};
    @Input() project?: IProject;
    @Input() confirmMsg = 'Confirmati actiunea?';

    @HostListener('click', ['$event'])
    confirm(event: Event) {
        const confirmed = window.confirm(this.confirmMsg);
        if(confirmed && this.project) {
            this.confirmAction(this.project);
        }
    }
}
