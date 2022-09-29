import { Component, OnInit } from '@angular/core';
import { IProject } from './projects/project';
import { ProjectService } from './projects/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Starter One';

  projects: IProject[] = [];
// projectService

  constructor(private projectService: ProjectService) {

  }

  // lifecycle-hooks
  ngOnInit() {

    this.projects = this.projectService.getProjects();
    console.log('App init: (projects): ', this.projects);

  }

}
