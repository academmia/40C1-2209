
# 02A Home page - date de pe server


- Aducem datele de pe server: Proiectele mele si Ultimele x task-uri

- Modificam serviciul de date Project (pentru a adauga o metoda care sa ne furnizeze proiectele userului x)

- Actualizam Home View sa accese si sa afiseze doar proiectele pt. owner_id = 10

- Adaugam un nou serviciu de date TaskService si functia getLatest(limit)

>> json-server params:  _sort: 'id', _order: 'DESC', _limit: limit



---

## 1. Metoda noua getUserProjects() pe serviciul ProjectService
>> /projects/project.service.ts:

>> Pentru a returna toate proiectele unui utilizator:
    http://localhost:3000/projects?owner_id=10

- HTTPParams este immutable, retunreaza un obiect nou

- codul de mai jos nu functioneaza (din cauza imutabilitatii)

```ts
// nu e ok
const params = new HttpParams();

params.set('owner_id', ownerid)
params.set('limit', "10");
```


---

## 2. Serviciul are deja provider 

>> vom avea access la serviciu prin mecanismul de Injection
>> Serviciul este disponibil in toata aplicatia 
    > pentru ca avem un provider la nivel de modul 

>> project.module.ts:

    providers: [ProjectService], 


---

## 3. Aducem proiectele userului curent in componenta Home
>> /home/home.component.ts:

>> pentru a putea folosi *ngFor avem nevoie de CommonModule sau BrowserModule 

* !! Atentie. Nu utilizam BrowserModule decat odata in AppRoot
* Pentru celelate module folosim CommonModule 



> Importam CommonModule in modulul HomeModule

- avem nevoie de el pentru *ngFor


> Listam in view proiectele din proprietatatea myProjects
>> home/home.component.html:

- pastram doar un ```<a>...</a>``` caruia ii aplicam *ngFor: 



## Feature nou Task si serviciu nou TaskService 

>> Cream un nou folder: tasks 

>> adaugam fisierul: task.service.ts 

>> adaugam un modul: task.module.ts 

>> inregistram providerul pentru TaskService in modul 
    > Astfel va fi disponibil in toata aplicatia 



## Cream tipul de date Task 
>> tasks/task.ts:




## Cream serviciul TaskService 
>> tasks/task.service.ts:

- este similar cu project.service 

[Snippet: task.service.angular2-ExercitiuRewriteInAngular5]
- in snippet avem versiunea Angular2
- rescriem sa functioneze in Angular5



## Cream modulul TaskModule si inregistram un provider pentru TaskService
>> tasks/task.module.ts:



## Incarcam modulul in modulul AppModule 
>> app.module.ts:



## Injectam serviciul in HomeComponent (si tipul de date Task - interfata)

>> putem sa facem asta pentru ca avem un provider vizibil in toata aplicatia 
- l-am inregistrat in modulul TaskModule 

>> home/home.component.ts:



## Afisam lista cu task-uri in interfata in dreapta proiectelor
>> home/home.component.html:

>> Copiem structura de la proiecte si scoatem offset-ul de la proiecte
(sau snippet ultimele-taskuri.home)



## (Optional) Putem scoatem selectorii din componente 

>> Acum componentele sunt incarcate prin rutare 
    > putem sa eliminam proprietata selector din @Component 

>> home.component.ts:

@Component({
    //selector: 'spm-home',             // <<<
    templateUrl: 'home.component.html'
})

