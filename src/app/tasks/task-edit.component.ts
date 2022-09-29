import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: 'task-edit.component.html'
})
export class TaskEditComponent {
    taskId?: number;

    constructor(
        private _activeRoute: ActivatedRoute,
        private _router: Router
    ){
        console.log('Construim instanta pentru TaskEditComponent...');
    }

    ngOnInit() {
        this.taskId = +this._activeRoute.snapshot.params['id'];
    }

 }
