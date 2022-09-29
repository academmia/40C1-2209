import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ITask } from '../tasks/task';
import { TaskService } from '../tasks/task.service';

import { switchMap } from 'rxjs/operators'

@Component({
    templateUrl: 'project-tasks.component.html',
    styleUrls: ['project-tasks.css']
})
export class ProjectTasksComponent implements OnInit {

    projectid?: number;
    tasks: ITask[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _taskService: TaskService
    ) { }

    ngOnInit() {
        this.route.params.pipe(
            switchMap((params: Params) => this._taskService.getTasksByProjectId(+params['id'])),
        ).subscribe((tasks: ITask[]) => this.tasks = tasks)

        // .subscribe( (params: Params) => {
        //     this.projectid = +params['id']; // force numeric - fara +, projectid devine string
        //     console.log('ProjectTasksComponent::param:projectid: ', this.projectid, typeof this.projectid);
        // } );
    }

    gotoProjects() {
        this.router.navigate(['/projects']);
    }

}
