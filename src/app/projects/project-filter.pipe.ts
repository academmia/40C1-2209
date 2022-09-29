import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'projectFilter' })
export class ProjectFilterPipe implements PipeTransform {
    transform(value: any[], filter: string): any[] {
        return filter ? 
            value.filter( project => project.name.toLocaleLowerCase().indexOf(filter) !== -1 ) : 
            value; 
    }
}
