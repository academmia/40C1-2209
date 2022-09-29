import { Injectable } from '@angular/core';
import { IRouteData } from './route-data';


@Injectable()
export class RouteDataService {
    
    private _data: IRouteData = {};
    
    setData(data: IRouteData) {
        this._data = data;
    }

    getData(): IRouteData {
        return this._data;
    }
}
