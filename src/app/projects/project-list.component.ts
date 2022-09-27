import { Component } from "@angular/core";

import { ProjectService } from './project.service';
import { IProject } from './project';
import { ICategory } from "../categories/category";

@Component({
    selector: "project-list",
    templateUrl: "project-list.component.html"
})
export class ProjectListComponent {
    projectSearchText: string = '';

    projects: IProject[] = [];
    categories: ICategory[] = [];
    public selectedCategory?: ICategory;

    constructor( private _projectService: ProjectService ){}

    ngOnInit(){
        this.projects = this._projectService.getProjects();
        this.categories = this._projectService.getCategories();
        console.log('App init::projects: ', this.projects, this.categories);
    }

    getCategories() {
        return this.categories;
    }

    getProjects() {
        return this.projects
            .filter(p => this.selectedCategory == null || this.selectedCategory.id == p.category_id);
    }

    selectCategory(category?: ICategory): void {
        this.selectedCategory = category;
    }

    delete(project: IProject): void {
        this.projects = this.projects.filter(function(el) {
                return el.id !== project.id;
            });
    }
}
