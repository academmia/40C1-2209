import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

import { ITask } from './task';
import { TaskService } from './task.service';

@Component({
    templateUrl: 'task-new.component.html'
})
export class TaskNewComponent {
    errorMessage: string = '';
     taskForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private _taskService: TaskService
    ){
        this.createForm();
    }

    createForm() {
        this.taskForm = this.formBuilder.group({
            subject: ['', Validators.required],              //FormControl
            description: ['', Validators.required],
            status: 'New',
            owner_id: 10,
            owner_name: '',
            project_id: null,
            project_code: '',
            asignee_id: 10,
            asignee_name: '',
            created_date: '',
            start_date: '',
            end_date: '' 
        })
    }

     save() {
        console.log(this.taskForm.value);
        // id-ul se regaseste in this.task 
        let task = Object.assign({}, this.taskForm.value);
        this.create(task);
    }

    create(task: ITask): void {
        this._taskService.newTask(task)
            .subscribe(
                tasks => {
                    console.log(`Taskul ${task.subject} a fost salvat...`);
                },
                error => this.errorMessage = <any>error
            )
    }

 }
