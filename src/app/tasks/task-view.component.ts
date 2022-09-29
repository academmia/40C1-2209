import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: 'task-view.component.html'
})
export class TaskViewComponent implements OnInit {
    taskId?: number;
    
    constructor(
        private _activeRoute: ActivatedRoute,
        private _router: Router, 
    ){
        console.log('Construim instanta pentru TaskViewComponent...');
    }

    ngOnInit() {
        this._activeRoute.params
            .subscribe( (params: Params) => this.taskId = +params['id'] );
    }    
}
