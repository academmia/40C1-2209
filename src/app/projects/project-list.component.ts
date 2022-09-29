import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";

import { IProject } from './project';
import { ICategory } from '../categories/category';

import { CategoryImageComponent } from '../categories/category-image.component';

import { ProjectService } from './project.service';
import { CategoryService } from '../categories/category.service';
import { Router } from "@angular/router";
import { RouteDataService } from "../general/route-data.service";


@Component({
    selector: "project-list",
    templateUrl: "project-list.component.html",
    styleUrls: ['project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    errorMessage: string = '';
    projectSearchText: string = '';
    public selectedCategory?: ICategory;

    public perPage = 3;
    public currentPage = 1;

    projects: IProject[] = [];
    categories: ICategory[] = [];

    constructor(
        private _projectService: ProjectService,
        private _categoryService: CategoryService,
        private router: Router,
        private routeData: RouteDataService
    ) { }

    @ViewChildren(CategoryImageComponent) categoryImages?: QueryList<CategoryImageComponent>;
   

    ngOnInit(): void {
        console.log('On init code');
        // this.projects = this._projectService.getProjects();

        this._projectService.getProjects().subscribe(
            products => this.projects = products,
            error => this.errorMessage = <any>error,
            () => console.log('projects loaded') 
        );

        // this.categories = this._categoryService.getCategories();
        this._categoryService.getCategories().subscribe(
            categories => this.categories = categories,
            error => this.errorMessage = <any>error,
            () => console.log('Finished loading categories...')
        );
    }

    delete(project: IProject): void {
        // this.projects = this.projects.filter(function (el) {
        //     return el.id !== project.id;
        // });
        this._projectService.deleteProject(project.id)
        .subscribe(
            success => {
                console.log("Deleted");
                // in caz de success scoatem din lista fara request pe server
                this.projects = this.projects.filter(function (el) {
                    return el.id !== project.id;
                });
            },
            error => { console.log("Eroare la stergere..."); },
            () => { console.log("Completed") }
        );
    }

    save(project: IProject): void {
        this._projectService.updateProject(project)
            .subscribe(
                data => { console.log(`Proiectul ${project.name} a fost salvat...`) },
                error => this.errorMessage = <any>error
            )
    }

    getProjects(): IProject[] {
        return this.projects
            .filter(p => this.selectedCategory == null || this.selectedCategory.id == p.category_id);
    }

    getPaginatedProjects(): IProject[] {
        let currentPageFirstElement = (this.currentPage - 1) * this.perPage;

        let projects = this.projects
            .filter(p => this.selectedCategory == null || this.selectedCategory.id == p.category_id)

        if (!this.projectSearchText) 
            projects = projects.slice(currentPageFirstElement, currentPageFirstElement + this.perPage);

        return projects;
    }

    getCategories() {
        return this.categories;
    }

    selectCategory(category?: ICategory): void {
        console.log(`Select category ${category && category.name}`);
        this.selectPage(1);
        this.selectedCategory = category;
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

    updatePagination(){
        if (this.projectSearchText) {
            
        }
    }

    onCategoryChange(data: number, project: IProject) {
        console.log('>>Current Category: ' + project.category_id);
        console.log('>>New Category: ' + data);
        project.category_id = data;
        //console.log(project);
    }

    undoChanges(index: number) {
        let currentCategoryComp = this.categoryImages?.find((item, idx) => idx === index); 
        currentCategoryComp?.resetCategory();
    }

    gotoProjectTasks(project: IProject) {
        this.routeData.setData({ ownerId: project.owner_id });
        this.router.navigate(['/project', project.id]);
    }

}