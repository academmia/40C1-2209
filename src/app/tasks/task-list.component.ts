import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'task-list.component.html'
})
export class TaskListComponent { 
    editVisible: boolean = false;
    
    constructor( 
        private router: Router,
        private activeRoute: ActivatedRoute
    ) {}

    noinfo() {
        //console.log(this.activeRoute);
        // console.log(this.activeRoute.snapshot.children); // <<< rutele copii activate
        this.router.navigate(['./', 
            { outlets: { 
                edittask: ['edit'],
                primary: ['noinfo']     // << accesam outlet-ul primar, fara denumire
            }}], 
            { relativeTo: this.activeRoute });
    } 
}
