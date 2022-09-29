import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: 'task-project-view.component.html'
})
export class TaskProjectViewComponent implements OnInit {
    projectId?: number;

    constructor(
        private _activeRoute: ActivatedRoute,
        private _router: Router, 
    ){
        console.log('Construim instanta pentru TaskProjectViewComponent...');
    }

    ngOnInit() {
        this._activeRoute.params
            .subscribe( (params: Params) => this.projectId = +params['id'] );
    }

}