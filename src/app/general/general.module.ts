import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './auth-guard.service';
import { RouteDataService } from './route-data.service';

@NgModule({
    providers:[AuthGuard, RouteDataService]
})
export class GeneralModule {} 
