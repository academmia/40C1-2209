import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectService } from "./projects/project.service";
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
// import { ProjectListComponent } from './projects/project-list/project-list.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { Four04Component } from "./general/four04.component";

import { ProjectModule } from './projects/project.module';
import { HomeModule } from './home/home.module';
import { TaskModule } from './tasks/task.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    // ProjectListComponent,
    NavbarComponent,
    Four04Component
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    HomeModule,
    TaskModule,
    ProjectModule,  // has own routing settings
    AppRoutingModule
  ],
  providers: [ ProjectService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
