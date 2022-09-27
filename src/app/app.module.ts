import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProjectModule } from './projects/project.module';

import { AppComponent } from './app.component';
import { ProjectService } from "./projects/project.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    ProjectModule 
  ],
  providers: [ 
    ProjectService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
