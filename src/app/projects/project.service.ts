
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { tap, catchError } from 'rxjs/operators';

import { IProject } from './project';
import db from '../../db.json';

@Injectable()
export class ProjectService {
    private projectApi = 'http://localhost:3000/projects';
    projects: IProject[] = [];

    constructor(private _http: HttpClient){
        this.projects = db['projects'];
    }

    getProjects(): Observable<IProject[]> {
        return this._http.get<IProject[]>(this.projectApi)
            .pipe(
                tap(data => console.log('All: ', data)),
                catchError(this.handleError)
            )
    }

    deleteProject(projectid: number): Observable<IProject[]> {
        return this._http.delete<IProject[]>(this.projectApi + '/' + projectid)
            .pipe(
                catchError(this.handleError)
             )
    }
            
    private handleError(error: HttpErrorResponse) {
        console.error(error);
        let err = `Eroare: ${error.status} la ${error.url}`;
        return throwError(err);
    }
}
