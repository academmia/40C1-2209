import { NgModule } from '@angular/core';
import { TaskService } from './task.service';
import { TaskLayoutComponent } from './task-layout.component';
import { TaskListComponent } from './task-list.component';
import { TaskNewComponent } from './task-new.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskViewComponent } from './task-view.component';
import { TaskProjectViewComponent } from './task-project-view.component';
import { TaskEditComponent } from './task-edit.component';
import { NoInfoComponent } from './noinfo.component';

@NgModule({
    imports: [ TaskRoutingModule ],
    declarations: [
        TaskLayoutComponent, 
        TaskListComponent,
        TaskNewComponent,
        TaskViewComponent,
        TaskProjectViewComponent,
        TaskEditComponent,
        NoInfoComponent
    ],
    providers: [TaskService]
})
export class TaskModule {} 

