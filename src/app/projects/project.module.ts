import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { CategoryModule } from '../categories/category.module';

import { ProjectListComponent } from "./project-list.component";
import { ProjectFilterPipe } from "./project-filter.pipe";
import { ConfirmActionDirective } from "./confirm-action.directive";
import { HoverDisplayDirective } from "./hover-display.directive";
import { LaterDirective } from "./later.directive";
import { ProjectService } from "./project.service";

import { CategoryImageComponent } from "../categories/category-image.component";
import { ProjectTasksComponent } from "./project-tasks.component";
import { ProjectRoutingModule } from "./project-routing.module";
import { GeneralModule } from "../general/general.module";
import { ProjectFormComponent } from "./project-form.component";

@NgModule({
    imports: [
        GeneralModule, 
        FormsModule, 
        CategoryModule,
        ProjectRoutingModule
    ],
    declarations: [
        ProjectListComponent, 
        ProjectFilterPipe,
        ConfirmActionDirective,
        HoverDisplayDirective,
        LaterDirective,
        CategoryImageComponent,
        ProjectTasksComponent,
        ProjectFormComponent
    ],
    providers: [ProjectService],
    exports: [ProjectListComponent]
})
export class ProjectModule { }
