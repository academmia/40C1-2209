import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { tap, catchError } from 'rxjs/operators';

import { ITask } from './task';

@Injectable()
export class TaskService {

    private taskApi = 'http://localhost:3000/tasks/';

    constructor(private _http: HttpClient) {}

    getTasks(): Observable<ITask[]> {
        return this._http.get<ITask[]>(this.taskApi).pipe(
            tap(data => console.log('TaskService::getTasks: ', data)),
            catchError(this.handleError)
        )
    }

    getLatestTasks(limit: number): Observable<ITask[]> {

        const params = new HttpParams()
            .set('_sort', 'id')
            .set('_order', 'DESC')
            .set('_limit', limit);

        return this._http.get<ITask[]>(this.taskApi, { params }).pipe(
            tap(data => console.log('TaskService::getTasks: ', data)),
            catchError(this.handleError)
        )
    }

    getTasksByProjectId(projectid: number): Observable<ITask[]> {
        
            let params = new HttpParams()
                .set('project_id', projectid);
        
            return this._http.get<ITask[]>(this.taskApi, { params }).pipe(
                tap(data => console.log('TaskService::getTasksByProjectId: ', data)),
                catchError(this.handleError)
            )
        }

    getTaskById(taskid: number): Observable<ITask> {
        return this._http.get<ITask>(this.taskApi + taskid).pipe(
            catchError(this.handleError)
        )
    }

    updateTask(task: ITask): Observable<ITask[]> {
        const headers = new HttpHeaders()
            .set("Content-Type", "application/json");

        return this._http.put<ITask[]>(this.taskApi + task.id, task, { headers }).pipe(
            tap(data => console.log(`API call::updateTask ${task.id} `, data)),
            catchError(this.handleError)
        )
    }

    newTask(task: ITask): Observable<ITask[]> {
        const headers = new HttpHeaders()
            .set("Content-Type", "application/json");

        return this._http.post<ITask[]>(this.taskApi, task, { headers }).pipe(
            catchError(this.handleError)
        )
    } 

    private handleError(error: Response) {
        let err = `Eroare: ${error.status} la ${error.url}`;
        return throwError(err);
    }

}