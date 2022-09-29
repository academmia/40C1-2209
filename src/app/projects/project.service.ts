import { Injectable } from "@angular/core";
import { IProject } from "./project";

import db from '../../db.json';

@Injectable()
export class ProjectService {

    private projects: IProject[] = [];

    constructor() {
        this.projects = db.projects;
    }

    getProjects(): IProject[] {
        return this.projects
    }

}