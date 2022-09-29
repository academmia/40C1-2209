
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../categories/category.service';

import { IProject } from './project';
import { ICategory } from '../categories/category';
import { ProjectService } from './project.service';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html'
})
export class ProjectFormComponent {

  @Input() project: IProject = {
            "id": undefined,
            "code": "",
            "name": "",
            "description": "",
            "owner_id": 10,
            "owner_name": "",
            "category_id": 50,
            "created_date": "",
            "end_date": ""
          };
  @Output() projectSaved: EventEmitter<boolean> = 
  new EventEmitter<boolean>();   


  categories: ICategory[] = [];

  submitted = false;
  errorMessage: string = '';

  constructor(
    private _categoryService: CategoryService,
    private _projectService: ProjectService
  ) { }

  ngOnInit(): void {

    //this.categories = this._categoryService.getCategories();
    this._categoryService.getCategories()
      .subscribe(
      categories => this.categories = categories,
      error => this.errorMessage = <any>error);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.project); 
    // select si ngModel fac category_id sa fie string 
    this.project.category_id = this.project.category_id;
    this.update(this.project); 
  }

  update(project: IProject): void {
    this._projectService.updateProject(project)
        .subscribe(
            projects => { 
              console.log(`Proiectul ${project.name} a fost salvat...`);
              this.projectSaved.emit(true);
            },
            error => this.errorMessage = <any>error
        )
    }
}
