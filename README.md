

# 14_08x Serviciul de date pentru modulul Task.md


- Serviciul de date pentru modulul Task

- Vom dezvolta TaskService cu noi functionalitati

- Vom accesa datele de pe server prin intermediul acestui serviciu 

- Componentele din modulul Task vor lucra cu date reale 

- Accesul se face prin TaskService si ProjectService 


---
## Afisarea task-urilor in TaskListComponent

- Avem deja metoda ```getTasks()``` definita. 

>> task-list.component.ts:

>> injectare serviciu, import tip de date, declarare variabila, 
>> subscriere la date, metoda pe clasa


- de data asta vom folosi async pipe 
- asta inseamna ca nu trebuie sa facem subscrierea in cod 
- iar variabila care stocheaza task-urile este de tipul Observable 


>> Test
>> task-list.component.html:


- Daca rulam acum vom primi un mesaj de genul 
```The pipe 'async' could not be found ```
Sau daca ar lipsi async-ul:
```Can't bind to 'ngForOf' since it isn't a known property of 'tr'```


- inseamna ca nu avem access la CommonModule (BrowserModule re-exporta CommonModule)

- BrowserModule este doar pentru modulul root AppModule, altfel folosim CommonModule

>> Putem sa-l importam in modulul task.module 

>> Putem sa-l exportam din alt modul importat de TaskModule si vor avea acces la el 
    > toate componentele care folosesc acel modul (de ex. TaskRoutingModule)

>> Putem sa cream un modul care sa exporte toate modulele utilizate des in aplicatie
    > AppCoreModule de ex. - apoi acesta va fi importat de alte module 
>> Pe viitor acest modul va putea grupa mai multe module pentru export 
    > Pe masura ce identificam ca se repeta nevoia de a le importa in module 



---

## Acum vom importa CommonModule in TaskModule
>> Componenta care foloseste acest serviciu foarte probabil va folosi *ngFor
>> task.service.ts:


>> O alta eroare ce poate aparea este:

- NgFor only supports binding to Iterables such as Arrays.
- Si asta se intampla daca ati uitat sa folositi async pipe 
    - atunci cand iterati asupra unor observabile (sau promises)



---

## (Optional) scoatem log-urile din serviciul TaskService si TaskProject 
>> comentam metodele .tap(...)


## Modificam interfata sa afisam toate detaliile taskurilor:
>> task-list.component.html:



---

## Mutam actiunile ViewTaskDetail, ViewProjectDetail, EditProject in coloana noua
>> vom crea trei metode pentru actiuni 
>> task-list.component.html:


> Scoatem butoanele vechi:


## Modificam ruta de editare task sa accepte un parametru:
>> task-routing.module.ts:



## Adaugam metodele viewTaskDetails, viewProjectDetails, editTask
>> task-list.component.ts:


## Afisam id-ul primit ca parametru pentru fiecare Componenta
 ```TaskViewComponent, TaskProjectViewComponent, TaskEditComponent```

>> Pentru a primi parametri avem doua abordari:

    > un snapshot, daca avem doar navigare parinte-componenta 
        > nu si componenta-componenta (adica sa modificam doar detaliile afisate)
    > folosin Observable, daca este posibil sa navigam catre aceeasi componenta 
        > folosind alt id 
        > in felul asta vom refolosi instanta 


>> task-view.component.ts:

* Noi vom utiliza ```Observable``` pentru primele doua componente 
* si ```snapshot``` pentru editare



>> Afisam id-ul in view-ul componentei
>> task-view.component.html:


- Observam ca atunci cand navigam de la un task la altul se refoloseste instanta 

- Observabilul detecteaza modificarea id-ului 

- Daca navigam la ProjectView si apoi inapoi vedem ca se construieste alta instanta 
    - componenta a fost scoasa din ```<router-outlet>```
    - acum se face refresh-ul 


* Daca am scrie codul ca mai jos nu se actualizeaza informatiile:
    - nu este Observable


* !
- Daca avem nevoie sa reutilizam parametri in alt cod sau functie
- si apoi sa re-emitem alte elemente in functie de parametri
- folosim switchMap() pentru a genera un nou observabil cu actiunea respectiva

> Exemplu:


```ts
    .pipe(
        switchMap( (params: Params) => this._taskService.getTaskById(+params['id']) )
    ).subscribe( (task: ITask) => this.task = task );
```


---

## Construim componenta TaskProjectView similar cu TaskViewProject 
>> task-project-view.component.ts:


>> task-project-view.component.html:





- Ruta pentru edit s-a modificat (din /edit in /edit/:id)

- asa ca resetarea zonei cu informatii nu mai functioneaza corect 


---

# Vom modifica metoda ```noinfo()``` sa ia in calcul eventualul parametru al rutei ```/edit```

Pasi demo Reset incorect:

1. Click Buton View Task Details
2. Click Edit Task
3. Reset zona de view details
    - Edit Task se va reactualiza cu id-ul ```undefined```

>> task-list.component.ts:


## Pentru componenta TaskEdit vom folosi snapshot pentru a prelua parametrul

>> Cum Editorul odata pus in outlet nu mai dispare 
    > nici informatiile nu vor fi actualizate 
>> Vom modifica Actiunea de inchidere a Editorului sa scoata componenta din outlet


>> task-edit.component.ts 


>> task-edit.component.html


* TEST
- Acum la teste o sa vedem ca nu se modifica informatia 
    - odata cu modificarea parametrului rutei 
    - dam click pe Edit Task ONE, apoi inchidem si dam click pe Edit Task TWO
    - ramane id-ul ONE

- Am putea sa utilizam Observable (ca la celelalte butoane)
    - dar vom scoate componenta din outlet atunci cand se inchide de la "x"




## Modificam actiunea de inchidere Editor sa scoata ruta ```edit/:id``` din outlet 

>> task-list.component.html:

>> In loc sa ascundem editorul il scoatem din ```<router-outlet> ```

- In loc de ```(click)='editVisible=!editVisible'```
    - avem ```(click)='closeEdit()'```



>> Acum definim metoda ```closeEdit()```;

>> task-list.component.ts:


- outlet-ul principal (primary) ramane nemodificat 

