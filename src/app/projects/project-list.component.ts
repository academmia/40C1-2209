import { Component } from "@angular/core";

import { ProjectService } from './project.service';
import { IProject } from './project';

@Component({
    selector: "project-list",
    templateUrl: "project-list.component.html"
})
export class ProjectListComponent {
    projectSearchText: string = '';

    projects: IProject[] = [];

    constructor( private _projectService: ProjectService ){}

    ngOnInit(){
        this.projects = this._projectService.getProjects();
        console.log('App init::projects: ', this.projects);
    }

    delete(project: IProject): void {
        this.projects = this.projects.filter(function(el) {
                return el.id !== project.id;
            });
    }
}
