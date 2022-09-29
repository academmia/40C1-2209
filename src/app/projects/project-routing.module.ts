import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list.component';
import { ProjectTasksComponent }  from './project-tasks.component';
import { AuthGuard } from '../general/auth-guard.service';

const projectsRoutes: Routes = [
  { path: 'projects',  component: ProjectListComponent },
  { 
    path: 'project/:id', 
    component: ProjectTasksComponent, 
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule { }
