"# 40C1-2209" 

# 14_03Z Salvare proiect pe server si 404


- Vom crea un modul 404 care sa capteze erorile de URL 

- Vom salva pe server proiectul dupa ce ii modificam categoria

>> Pe masura ce aplicatia devine mai complexa 
    > este necesar sa avem un modul special pentru rutare 

```Vezi fisierul: app-routing.module.ts```


---

## Vrem ca pentru orice url care nu exista, sa incarcam o pagina speciala 

>> Cream o componenta noua Four04:
>> general/four04.component.ts:



> four04.component.html:
(snippet 404.html)



>> four04.css:

```css
.bd-pageheader {
    margin-bottom: 3rem;
    text-align: left;
    padding: 2rem 15px;
    color: #cdcdcd;
    background-color: #3d6c7c;
}
```


---

## Adaugam o ruta Wildcard ( ** ) care va incarca componenta Four04 
>  atunci cand nu gaseste ruta din Url 


### Declaram componenta in modulul ```AppModule```
>> app.module.ts:


### Cream ruta ```**``` in ```app-routing.module.ts```:

- va fi ultima, altfel preia toate rutele



---

## Adaugam o metoda de salvare proiect pe server 
>> Dupa ce modificam categoria in lista vrem sa avem posibilitatea sa salvam proiectul

>> project-service.ts:

- Metoda PUT este folosit apentru a suprascrie cu totul resursa 
- Verbul PATCH este utilizat pentru a modifica doar anumite proprietati

- vom folosi PUT in cazul nostru


```ts
// 
import { ..., Headers, RequestOptions } from '@angular/http';

...
updateProject(project: IProject): Observable<IProject[]> {
    const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
    
    // nu mai este nevoie de Stringify
    // let body = JSON.stringify(project);
    // console.log('Update data: ', body);

    return this._http.put<IProject[]>(this.projectApi + '/' + project.id, project, { headers }).pipe(
        tap(data => console.log(`API call::updateProject ${project.id} `, data)),
        catchError(this.handleError)
    )
} 
```

---

## Adaugam o metoda pt. salvare proiect, componentei project-list 
>> project-list.component.ts:


> Adaugam un buton similar cu Reset Category sau cu Stergerea Proiectului 
>> project-list.component.html:

```html
<!-- project-list.component.html -->

<button (click)="save(project)" type="button" class="btn btn-outline-secondary btn-sm">
    <i class="fa fa-save text-white"></i></button>
```

- Acum daca modificam categorie (click pe imagine) si salvam, putem sa verificam ca noua categorie persista in apiserver/db.1.json

- putem verifica si direct daca s-a modificat proprietatea ("category_id": 54,)

    ```http://localhost:3000/projects/:id```

- ! Daca uitam sa specificam header-ul ContentType, salvarea nu functioneaza corect

