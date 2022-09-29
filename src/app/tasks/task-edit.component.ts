import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { TaskService } from './task.service';
import { ITask } from './task';

@Component({
    templateUrl: 'task-edit.component.html'
})
export class TaskEditComponent {
    taskId?: number;
    // subject = new FormControl();

    errorMessage: string = '';
    taskForm = new FormGroup ({
        subject: new FormControl(),
        description: new FormControl(),
        status: new FormControl('New'),
        owner_id: new FormControl(10),
        owner_name: new FormControl(),
        project_id: new FormControl(),
        project_code: new FormControl(),
        asignee_id: new FormControl(10),
        asignee_name: new FormControl(),
        created_date: new FormControl(),
        start_date: new FormControl(),
        end_date: new FormControl()
    });
    task: ITask = { ...this.taskForm.value };
    // taskForm = new FormGroup ({
    //     subject: new FormControl()
    // });

    constructor(
        private _activeRoute: ActivatedRoute,
        private _router: Router,
        private _taskService: TaskService
    ){
        console.log('Construim instanta pentru TaskEditComponent...');
    }

    ngOnInit() {
        this.taskId = +this._activeRoute.snapshot.params['id'];
      
        this._taskService.getTaskById(this.taskId)
        .subscribe( task => { 
            this.task = task;
            this.initTaskForm(this.task);
        })

    }

    private initTaskForm(task: ITask) {
        console.log('Initializare model formular');
        console.log(task);
        this.taskForm.setValue({
            subject: task.subject,
            description: task.description,
            status: task.status,
            owner_id: task.owner_id,
            owner_name: task.owner_name,
            project_id: task.project_id,
            project_code: task.project_code,
            asignee_id: task.asignee_id,
            asignee_name: task.asignee_name,
            created_date: task.created_date,
            start_date: task.start_date,
            end_date: task.end_date 
        })
    }

    save() {
        console.log(this.taskForm.value);
        let task = Object.assign({}, this.task, this.taskForm.value);
        this.update(task);
    }

    update(task: ITask): void {
        this._taskService.updateTask(task)
            .subscribe(
                tasks => {
                    console.log(`Taskul ${task.subject} a fost salvat...`);
                },
                error => this.errorMessage = <any>error
            )
    }

 }
