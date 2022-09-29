import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
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

    private handleError(error: Response) {
        let err = `Eroare: ${error.status} la ${error.url}`;
        return throwError(err);
    }

}