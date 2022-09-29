
# 14_06x Componente multiple in acelasi view


- Mai multe componente afisate in acelasi timp in acelasi template

- Vom utiliza named outlets


>> Router-ul suporta un singur outlet fara nume 
    > Acesta poate fi accesat cu numele "primary"

>> Un template poate avea oricate diretive outlet cu nume 

>> Mai multe directive outlet pot afisa in acelasi timp componente diferite
- in functie de rutele definite per outlet 


>> Rutele secundare au ca target outlet-urile denumite 

>> Rutele secundare se configureaza similar cu cele primare 


***

* Cream trei componente simple si template-urile asociate

* Adaugam componentele in TaskModule (declarations)

* Adaugam doua directive <router-outlet> in TaskListComponent

* Adaugam rutele pentru cele trei componente

* Modificam linkul din navbar (am adaugat ```path='list'```, trebuie actualizat)

* Modificam link-ul (All Tasks) din view-ul task-layout

* Adaugam link-uri pentru a testa rutele (in TaskListComponent)

* Mecanism de afisare ascundere Edit Box 


* Pe zona de informatii de sus vrem un mecanism de Ascundere informatii curente 

* Declaram noua componenta, NoInfoComponent, in modulul TaskModule

* Adaugam o noua ruta copil pentru TaskListComponent 

* Adaugam un redirect pentru ca ruta implicita /tasks/list sa fie /tasks/list/noinfo

* Adaugam un buton care va reseta card-ul cu detalii (primary outlet)

***


## Cream trei componente simple si template-urile asociate

>> task-view.component 
(snippet: task-view.component.html)


---

>> task-project-view.component
(snippet: task-project-view.component.html)



---

>> task-edit.component 
(snippet: task-edit.component.html)


- Trei componente noi. Ale cui sunt?


---

## Adaugam componentele in TaskModule (declarations)



---

## Adaugam doua directive ```<router-outlet>``` in TaskListComponent
>> task-list.component.html:

>> fiecare va fi plasata in zona evidentiata in snippet 

[task-list.component.html]


```html
<router-outlet></router-outlet>
<router-outlet name="edittask"></router-outlet>
```


---

## Adaugam rutele pentru cele trei componente:
>> task-routing.module.ts:



## Modificam linkul din navbar (am adaugat path='list')

>> layout/navbar/navbar.component.html:


## Modificam link-ul (All Tasks) din view-ul task-layout
>> task-layout.component.html:


## Adaugam link-uri pentru a testa rutele (in TaskListComponent)
>> task-list.component.html


## Mecanism de afisare ascundere Edit Box 

>> task-list.component.ts
>> adauga variabila booleana editVisible


>> Tabelul cu lista taskuri se modifica astfel:

```ts
// tasks/task-list.component.html
<table class="table table-inverse" [hidden]='editVisible'> 
...

```
- daca editorul de task este vizibil, atunci tabelul este ascuns 


>> In momentul cand editam un Task se ascunde tabelul (toggle variabila)



>> In functie de aceasta variabila ascundem/afisam editorul (in oglinda cu tabelul)

>> Tot in zona editorului vom avea un buton x de ascundere editor (toggle variabila)
```[hidden]='!editVisible'```  
```(click)='editVisible=!editVisible'```




---

## Mecanism de Ascundere informatii curente 

- Pe zona de informatii de sus vrem un mecanism prin care sa ascundem informatiile curente

>> Daca nu mai vrem sa afiseze informatii, vom schimba ruta la ```tasks/list/noinfo```

>> Daca forma de editare este activa vrem sa ramana activa 

>> componenta noua cu un card fara informatii:
>> tasks/noinfo.component.ts:



## Declaram noua componenta, NoInfoComponent, in modulul TaskModule
>> task.module.ts:


## Adaugam o noua ruta copil pentru TaskListComponent 
>> task-routing.module.ts:



## Adaugam un redirect pentru ca ruta implicita /tasks/list sa fie /tasks/list/noinfo
>> task-routing.module.ts:


## Adaugam un buton care va reseta card-ul cu detalii (primary outlet)

>> task-list.component.html:

- copiem butonul de la Edit



>> Adaugam metoda noinfo() clasei TaskListComponent
>> task-list.component.ts:



- daca am naviga this.router.navigate(['noinfo', ...
    - ar incarca /noinfo in outletul lui /list    
    - dar /noinfo nu are un outlet cu numele edittask si edit-ul va disparea

- dorim sa navigam catre ruta compusa {noinfo pe 'primary si edit pe 'edittask'}
- daca am naviga catre this.router.navigate(['list', ...
    - si nu specificam primary nu obtinem incarcarea componentei NoInfo
    - noi suntem deja pe ruta /list si nu se face redirectTo (care ar incarca /noinfo)

- daca nu folosim { relativeTo: this.activeRoute } 
    - trebuie sa specificam calea absoluta /tasks/list 


