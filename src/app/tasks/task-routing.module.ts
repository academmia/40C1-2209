import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskLayoutComponent } from './task-layout.component';
import { TaskListComponent } from './task-list.component';
import { TaskNewComponent } from './task-new.component';

import { TaskViewComponent } from './task-view.component';
import { TaskProjectViewComponent } from './task-project-view.component';
import { TaskEditComponent } from './task-edit.component';
import { NoInfoComponent } from './noinfo.component';

const taskRoutes: Routes = [
  {
    path: 'tasks',
    component: TaskLayoutComponent,
    children: [
      {
        path: 'list',
        component: TaskListComponent,
        children: [
          { path: '', redirectTo: 'noinfo', pathMatch: 'full' },
          {
            path: 'noinfo',
            component: NoInfoComponent
          },
          {
            path: 'view/:id',
            component: TaskViewComponent
          },
          {
            path: 'project/:id',
            component: TaskProjectViewComponent
          },
          {
            path: 'edit',
            component: TaskEditComponent,
            outlet: 'edittask'
          },
        ],
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