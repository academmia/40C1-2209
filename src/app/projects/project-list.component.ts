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

    public perPage = 3;
    public currentPage = 1;

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

    getPaginatedProjects() {
        let currentPageFirstElement = (this.currentPage - 1) * this.perPage;

        return this.projects
            .filter(p => this.selectedCategory == null || this.selectedCategory.id == p.category_id)
            .slice(currentPageFirstElement, currentPageFirstElement + this.perPage);
    }

    // paginatie
    selectPage(newPage: number) {
        this.currentPage = newPage;
    }

    setPageSize(pageSize: number) {
        this.perPage = Number(pageSize);
        this.selectPage(1);
    }

    // proprietatea pages are nevoie de logica asa ca folosim getter (read-only)
    get pages(): number[] {
        return Array(Math.ceil(this.getProjects().length / this.perPage))
            .fill(0).map((x, i) => i + 1);
    }
}
