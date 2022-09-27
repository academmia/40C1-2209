    export class ProjectFilterPipe implements PipeTransform {
        transform(value: any[], filter): any[] {
            return filter ? 
                        value.filter( project => project.name.toLocaleLowerCase().indexOf(filter) !== -1 ) : 
                        value; 
        }
    }