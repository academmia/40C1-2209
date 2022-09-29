
# 14_04Z Rutare independenta pentru Proiecte

- Vom extinde functionalitatea modulului Project 

- Vom crea o componenta noua pentru vizualizarea taskurilor unui proiect

- Vom crea un modul nou pentru rutare la nivel de Proiecte 
    - Complexitatea aplicatiei poate impune propriul mecanism de rutare al unui modul
    - aplicatie in aplicatie

- Vom adauga o metoda serviciului TaskService: getTasksByProjectId(taskid) 

- Vom trimite parametri de la o ruta la alta (de la lista proiecte la lista taskuri)

---

***
>> Componenta noua project-tasks.component 

>> Importam si Declaram componenta in modulul Project 

>> Vom crea un mecanism de rutare la nivel de Proiecte (per Feature de Business)
>> Vom avea un modul special pentru Rutare

>> Incarcam modulul de rutare (ProjectRoutingModule) in modulul ProjectModule 

>> Scoatem definirea rutelor din AppRoutingModule

>> !! Modificam ordinea de import a modulelor in AppModule:

>> Fiecare proiect din lista trebuie sa contina un buton de navigare la ProjectTasksComponent

>> Cream o metoda noua in clasa ProjectListComponent: gotoProjectTasks(project)

>> Captam parametrul primit in ProjectTasksComponent 

>> Cream metoda de returnare Task-uri in serviciul TaskService

>> Folosim metoda getTasksByProjectId in componenta project-tasks 

>> importul operatorului switchMap il mutam in AppModule 

>> Adaugam metoda si buton de navigare la lista anterioara

>> Afisam dinamic campurile din taskurile incarcate


***

---

## Componenta noua project-tasks.component 
>> Componenta va primi un parametru: projectid 
>> Fisiere noi: 
    - projects/project-tasks.component.ts 
    - projects/project-tasks.component.html


>> project-tasks.component.ts:


>> Versiunea statica a view-ului componentei
>> project-tasks.component.html:

[Snippet: project-tasks.component.html]


## Importam si Declaram componenta in modulul Project 
>> project.module.ts:


## Vom crea un mecanism de rutare la nivel de Proiecte (per Feature de Business)

> Vom avea un modul special pentru Rutare

- Ne intereseaza doua componente in mecanismul de rutare 
    - ProjectListComponent si ProjectTasksComponent

- ProjectListComponent nu necesita parametri, se activeaza ruta si este de ajuns 
- ProjectTasksComponent are nevoie de un parametru: id-ul de proiect 
    - in baza lui va trimite un request catre API pentru a primi lista de taskuri (asociate unui proiect)


>> Fisier nou: project-routing.module.ts:


- cream rute la nivel de Proiect 
- importam Componentele pentru care vrem sa definim rutele 
- trimitem mai departe RouterModule 

* Atentie aici folosim RouterModule.forChild(projectsRoutes)
* RouterModule.forRoot il folosim doar pe AppRoutingModule
* In orice alt modul folosim RouterModule.forChild(projectsRoutes)


---

## Incarcam modulul de rutare (ProjectRoutingModule) in modulul ProjectModule 
>> project.module.ts:

- vom avea definita ruta pentru project-list in doua locuri
(AppRoutingModule si ProjectRoutingModule)


---

## Stergem definitia rutei ```projects``` din AppRoutingModule
>> app-routing.module.ts:

>> Stergem ruta projects:
```ts
    // {
    //   path: 'projects',
    //   component: ProjectListComponent,
    //   data: { title: 'Lista proiecte' }
    // },
```


- Verificam ca modulul ProjectModule sa fie importat in app.module.ts:



## !! Modificam ordinea de import a modulelor in AppModule:
>>app.module.ts:

>> Cand utilizam mai multe Module de Rutare ordinea de import conteaza
    > Ruterul accepta prima ruta care satisface conditia
    > AppRoutingModule defineste wildcardul (**), adica orice ruta 
    
>> Daca AppRoutingModule nu este ultimul 
    > orice ruta definita si incarcata dupa ea nu mai este inspectata

>> Stabilim ordinea astfel:


>> Vom avea doua module de rutare complementare
>> Aplicatia ar trebui sa functioneze ca inainte 



## Fiecare proiect din lista trebuie sa contina un buton de navigare la ProjectTasksComponent
>> project-list.component.html:


- urmeaza sa implementam metoda listTasks(project) 
- si definirea unei metode noi in serviciul de date: getTasksByProjectId()



> Cream o metoda noua in clasa ProjectListComponent: gotoProjectTasks(project)

- Metoda va naviga catre alta ruta fara sa fie nevoie de RouterLink-uri
>> project-list.component.ts:

- injectam serviciul de rutare si servicul de date ProjectService



## Captam parametrul primit in ProjectTasksComponent 
>> Vom avea nevoie de parametrul din URL pentru a interoga serverul API 
>> project-tasks.component.ts:

>> vrem sa extragem paraemetrul din url-ul http://localhost:3001/project/2 

>> Vom folosi serviciul ActivatedRoute

>> project-tasks.component.ts:



- in consola trebuie sa apara parametrul extras 
    - mai departe vom folosi acest parametru pentru a trimite un request catre server
    - pentru a primi toate task-urile pentru proiectul cu id-ul respectiv

- switchMap ne permite sa facem o actiune cu valoarea curenta
    - si sa facem un mapping catre alt Observable 
    - abia dupa aceea cream un abonament
    - _**switch to a new observable**_

- providerul lui TaskService este declarat in TaskModule (nu la nivel de componenta)
    deci va fi disponibil in aplicatie


---

## Cream metoda de returnare Task-uri in serviciul TaskService
>> tasks/task.service.ts:

[Snippet Angular:]


## Folosim metoda getTasksByProjectId in componenta project-tasks 
>> project-tasks.component.ts:



## Adaugam metoda si buton de navigare la lista anterioara

>> project-tasks.component.html:


>> project-tasks.component.ts:


## Afisam dinamic campurile din taskurile incarcate
>> project-tasks.component.html:


