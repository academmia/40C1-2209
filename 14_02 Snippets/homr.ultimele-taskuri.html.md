
    <div class="col-md-6">
        <h2 class="mt-3">Ultimele taskuri:</h2>
        <div class="list-group">
            <a *ngFor="let task of latestTasks" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{task.subject}}</h5>
                    <small>Deadline: {{task.end_date | date:"dd/MM/yyyy" }}</small>
                </div>
                <p class="mb-1">{{task.description}}</p>
                    <small>Owner: {{task.owner_name}}</small>
                    <small>Asignee: {{task.asignee_name}}</small>
            </a>
        </div>
    </div>  

    