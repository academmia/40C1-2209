import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from './task.service';
import { ITask } from './task';

@Component({
    templateUrl: 'task-list.component.html'
})
export class TaskListComponent { 
    editVisible: boolean = false;
    tasks?: Observable<ITask[]>;
    
    constructor( 
        private router: Router,
        private activeRoute: ActivatedRoute,
        private _taskService: TaskService
    ) {}

    ngOnInit() {
        this.tasks = this._taskService.getTasks();
    }

    noinfo() {
        // daca ruta edit este activa si are un parametru avem nevoie de el
        let editParam = this.activeRoute.snapshot.children[1] &&
            this.activeRoute.snapshot.children[1].params['id'];
        console.log(`TaskListComponent::noinfo:editParam: ${editParam}`);   
        this.router.navigate(['./', 
            { outlets: { 
                edittask: ['edit', editParam],
                primary: ['noinfo']     // << accesam outlet-ul primar, fara denumire
            }}], 
            { relativeTo: this.activeRoute });
    } 

    viewTaskDetails(taskid: number) {
        this.router.navigate(['view', taskid], { relativeTo: this.activeRoute });
    }
    
    viewProjectDetails(projectid: number) {
        this.router.navigate(['project', projectid], { relativeTo: this.activeRoute });
    }
    
    editTask(taskid: number) {
        
        this.editVisible=!this.editVisible;
    
        this.router.navigate(['./', 
            { outlets: { 
                edittask: ['edit', taskid]
            }}], 
            { relativeTo: this.activeRoute });
    }

    closeEdit() {
        this.editVisible=!this.editVisible;
        this.router.navigate(['./', 
            { outlets: { 
                edittask: null,     // << scoatem editorul din outlet 
            }}], 
            { relativeTo: this.activeRoute });
    }  
    
}
