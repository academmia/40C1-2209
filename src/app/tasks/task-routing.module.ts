import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskLayoutComponent } from './task-layout.component';
import { TaskListComponent } from './task-list.component';
import { TaskNewComponent } from './task-new.component';

const taskRoutes: Routes = [
  {
    path: 'tasks',
    component: TaskLayoutComponent,
    children: [
      {
        path: '',
        component: TaskListComponent
      },
      {
        path: 'new',
        component: TaskNewComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(taskRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRoutingModule { }