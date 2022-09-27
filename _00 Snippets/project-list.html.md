```html
<!-- app.component.html -->

  <main className="container pt-3">
      <div className="row justify-content-center">
          <h1 class="bg-primary p-3 text-center text-white"> {{ title }} </h1>
      </div>
      <div class="row justify-content-center text-white">
        <div class="col-8 m-1">
            <div *ngFor="let project of projects" 
              class="card card-inverse card-outline-default m-2"
              style="background-color: #555; border-color: #555;">
                <h4 class="card-header">
                    {{project.name}}
                    <span class="float-right badge badge-default">
                        {{project.code}}
                    </span>
                </h4>
                <div class="card-text p-2">{{project.description}}</div>
            </div>
        </div>
      </div>
  </main>

```