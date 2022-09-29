import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './auth-guard.service';
import { RouteDataService } from './route-data.service';
import { SpmModalComponent } from './spm-modal.component';

@NgModule({
    imports: [CommonModule],
    declarations:[SpmModalComponent],
    providers:[AuthGuard, RouteDataService],
    exports: [SpmModalComponent, CommonModule] 
})
export class GeneralModule {} 
