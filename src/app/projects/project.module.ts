import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';    

import { ProjectListComponent } from "./project-list.component";
import { ProjectFilterPipe } from './project-filter.pipe';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ ProjectListComponent, ProjectFilterPipe ],
    exports: [ ProjectListComponent ]
})
export class ProjectModule { }
