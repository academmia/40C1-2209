import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskLayoutComponent } from './task-layout.component';
import { TaskListComponent } from './task-list.component';
import { TaskNewComponent } from './task-new.component';

const taskRoutes: Routes = [ ];

@NgModule({
  imports: [
    RouterModule.forChild(taskRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRoutingModule { }
