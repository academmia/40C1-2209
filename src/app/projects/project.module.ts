import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';    

import { ProjectListComponent } from "./project-list.component";

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ ProjectListComponent ],
    exports: [ ProjectListComponent ]
})
export class ProjectModule { }
