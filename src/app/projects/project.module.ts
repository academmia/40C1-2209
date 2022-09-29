import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { CategoryModule } from '../categories/category.module';

import { ProjectListComponent } from "./project-list.component";
import { ProjectFilterPipe } from "./project-filter.pipe";
import { ConfirmActionDirective } from "./confirm-action.directive";
import { HoverDisplayDirective } from "./hover-display.directive";
import { LaterDirective } from "./later.directive";
import { ProjectService } from "./project.service";

import { CategoryImageComponent } from "../categories/category-image.component";

@NgModule({
    imports: [BrowserModule, FormsModule, CategoryModule],
    declarations: [
        ProjectListComponent, 
        ProjectFilterPipe,
        ConfirmActionDirective,
        HoverDisplayDirective,
        LaterDirective,
        CategoryImageComponent],
    providers: [ProjectService],
    exports: [ProjectListComponent]
})
export class ProjectModule { }
