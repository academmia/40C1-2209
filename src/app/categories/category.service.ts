import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { ICategory } from './category';

@Injectable()
export class CategoryService {
    private categoryApi = 'http://localhost:3000/categories';

    constructor(private _http: HttpClient) {}

    getCategories(): Observable<ICategory[]> {
        return this._http.get<ICategory[]>(this.categoryApi)
            .pipe(
                tap(data => console.log('All categories: ', data)),
                catchError(this.handleError)
            )

    }

    private handleError(error: HttpErrorResponse) {
        console.error(error);
        let err = `Eroare: ${error.status} la ${error.url}`;
        return throwError(err);
    }
}