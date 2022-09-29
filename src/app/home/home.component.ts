import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../projects/project.service';
import { TaskService } from '../tasks/task.service';
import { IProject } from '../projects/project';
import { ITask } from '../tasks/task';

@Component({
    selector: 'spm-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    title: string = 'Home Page';
    errorMessage: string = '';
    myProjects: IProject[] = [];
    latestTasks: ITask[] = [];

    constructor(
        private _projectService: ProjectService,
        private _taskService: TaskService ) {}
    
    ngOnInit(): void {
        this._projectService.getUserProjects(10)
            .subscribe( 
                projects => this.myProjects = projects,
                error => this.errorMessage = <any>error
            )
        this._taskService.getLatestTasks(5)
            .subscribe( 
                projects => this.latestTasks = projects,
                error => this.errorMessage = <any>error
            )        
    }
}
