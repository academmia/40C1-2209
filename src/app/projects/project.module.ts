import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';    

import { ProjectListComponent } from "./project-list.component";
import { ProjectFilterPipe } from './project-filter.pipe';
import { ConfirmActionDirective } from './confirm-action.directive';
import { HoverDisplayDirective } from './hover-display.directive';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ 
        ProjectListComponent, 
        ProjectFilterPipe ,
        ConfirmActionDirective,
        HoverDisplayDirective
    ],
    exports: [ ProjectListComponent ]
})
export class ProjectModule { }
