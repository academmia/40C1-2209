import { Component, OnInit } from '@angular/core';
import { ProjectService } from './projects/project.service';
import { IProject } from './projects/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Simple Project Manager';
  projects: IProject[] = [];

  constructor( private _projectService: ProjectService ){}

  ngOnInit(){
    this.projects = this._projectService.getProjects();
    console.log('App init::projects: ', this.projects);
  }
}
