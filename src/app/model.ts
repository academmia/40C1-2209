export class Project {
    name;
    tasks;
    constructor() {
        this.name = "Website Development";
        this.tasks = [new TaskItem(1, "Task ONE", 'Closed', 'James Hansen', '03/11/2051'),
        new TaskItem(2, "Task TWO", 'Working', 'Louise Meyer', '23/11/2051'),
        new TaskItem(3, "Task THREE", 'Rejected', 'Todd Fields', '	30/11/2051'),
        new TaskItem(4, "Task FOUR", 'New', 'Louise Meyer', '05/12/2051')]
    }
}
export class TaskItem {
    constructor(
        public id: number, 
        public subject, 
        public status, 
        public asignee, 
        public deadline) { 

    }
}