import { Component } from "@angular/core";

import { ProjectService } from './project.service';
import { IProject } from './project';

@Component({
    selector: "project-list",
    templateUrl: "project-list.component.html"
})
export class ProjectListComponent {
    projects: IProject[] = [];

    constructor( private _projectService: ProjectService ){}

    ngOnInit(){
        this.projects = this._projectService.getProjects();
        console.log('App init::projects: ', this.projects);
    }
}
