import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProjectListComponent } from "./projects/project-list.component";

const appRoutes: Routes = [
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'profile',    component: ProfileComponent },
    {
      path: 'projects',
      component: ProjectListComponent,
      data: { title: 'Lista proiecte' }
    },
    { path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }
];  

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
