import { NgModule } from '@angular/core';
import { TaskService } from './task.service';
import { TaskLayoutComponent } from './task-layout.component';
import { TaskListComponent } from './task-list.component';
import { TaskNewComponent } from './task-new.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
    imports: [ TaskRoutingModule ],
    declarations: [
        TaskLayoutComponent, 
        TaskListComponent,
        TaskNewComponent
    ],
    providers: [TaskService]
})
export class TaskModule {} 

