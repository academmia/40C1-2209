
import { Injectable } from '@angular/core';
import { IProject } from './project';
import db from '../../db.json';
import { ICategory } from '../categories/category';

@Injectable()
export class ProjectService {
    projects: IProject[] = [];
    categories: ICategory[] = [];

    constructor(){
        this.projects = db['projects'];
        this.categories = db['categories'];
    }

    getProjects(): IProject[] {
        return this.projects
    }

    getCategories(): ICategory[] {
        return this.categories
    }
}
