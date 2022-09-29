
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
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

    deleteProject(projectid?: number): Observable<IProject[]> {
        return this._http.delete<IProject[]>(this.projectApi + '/' + projectid)
            .pipe(
                catchError(this.handleError)
             )
    }

    getUserProjects(ownerid: number): Observable<IProject[]> {
        const params = new HttpParams()
            .set('owner_id', ownerid);

        return this._http.get<IProject[]>(this.projectApi, { params })
            .pipe(
                tap(data => console.log(`API call::getUserProjects for owner_id ${ownerid} `, data)),
                catchError(this.handleError)
            )
    }

    updateProject(project: IProject): Observable<IProject[]> {
        const headers = new HttpHeaders()
            .set("Content-Type", "application/json");
        
        // let body = JSON.stringify(project);
        // console.log('Update data: ', body);
    
        return this._http.put<IProject[]>(this.projectApi + '/' + project.id, project, { headers }).pipe(
            tap(data => console.log(`API call::updateProject ${project.id} `, data)),
            catchError(this.handleError)
        )
    } 
            
    private handleError(error: HttpErrorResponse) {
        console.error(error);
        let err = `Eroare: ${error.status} la ${error.url}`;
        return throwError(err);
    }
}
