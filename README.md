
# 14_07x Route Guards - project-tasks doar daca owner=usercurent


- Vrem sa limitam afisarea task-urilor per proiect doar pentru owners 

- Daca user-ul curent este ownerul proiectului, atunci afisam informatiile

- Vom folosim Route Guards in colaborare cu un serviciu custom RouteData 

---

>> Folosim Route Guards:

>> Componenta ```projects/project-tasks.component.ts``` 
    > nu va fi afisata daca nu suntem autorizati sa o vedem 

>> Asta poate insemna
- Nu avem dreptul (nu suntem owner)
- Nu suntem logati 
- Pentru afisare poate fi nevoie sa primim alte date inainte
    
>> Deasemenea o ruta poate sa astepte activarea 
    > daca nu am salvat datele pe ruta curenta


>> Daca acest gardian returneaza false nu se poate activa ruta 
>> Gardienii pot anula incarcarea unei rute redirectionand ruta 

>> Un gardian poate returna ```Observable<boolean>``` sau ```Promise<boolean>```pentru o comunicare Async cu ruterul 

---

>> Router Guards:

* CanActivate - permite sau blocheaza navigarea catre o ruta

* CanActivateChild - similar pentru o ruta copil

* CanDeactivate - permite sau blocheaza navigarea de la o ruta 

* Resolve - Nu activeaza ruta pana ce nu primeste toate datele 

* CanLoad - pentru incarcarea asincornica a unui modul 


>> Pot exista mai multi gardieni simultan

>> Ruterul verifica prima data nodurile cele mai departate (```CanActivate/CanActivateChild```)
    > apoi urca mai sus in tree-ul componentelor 

>> Daca oricare dintre garzi returneaza ```false``` navigarea se opreste 
    > si nu se mai verifica nimic mai sus 



---

## Cream un serviciu de autentificare: AuthGuard
>> general/auth-guard.service.ts:


---

## Declaram un provider pentru serviciul AuthGuard 
>> general.module.ts: 



---

## Inregistram modulul General in AppModule
>> app.module.ts:


- acum serviciul (providerul) AuthGuard este diposnibil in toata aplicatia



---

## Vrem ca ruta care are atasata componenta ProjectTasks sa fie securizata
>> serviciul de mai sus va verifica daca userul este autentificat 
>> eventual daca este in rolul care ii permite sa acceseze ruta 

>> sau, daca nu este in rol de admin, 
    > sa pot sa vad toate taskurile de pe proiectul meu

>> projects/project-routing.module.ts:


>>> TEST

- Daca modificam ```return false;``` in serviciul ```AuthGuard / canActivate()```
    - nu se mai incarca componenta ProjectTasksComponent

>> auth-guard.service.ts:


## Simulam existenta unui profil al utilizatorului curent (dupa autentificare)
>> auth-guard.service.ts:


> Vrem sa putem trimite si accesa ```owner_id``` din alte parti ale aplicatiei (vream ca la schimbarea rutei sa primim si aceasta informatie)

> Avem nevoie de date asociate rutei


### ! _Am putea sa folosim NavigationExtras object pentru a trimite ```queryParams```_

>> project-list.component.ts:


>> auth-guard.service.ts:


-  Nu ne putem baza pe ```queryParams``` pentru ca sunt parametri vizibili


---

## Vom crea un serviciu la nivel de aplicatie, pentru trimiterea de date intre rute

>> Vom crea o interfata care va putea transporta atat date custom, cat si date business
>> general/route-data.ts:


>> general/route-data.service.ts:


## Inregistram un provider la nivel de modul (pentru a fi vizibi lin toata app)
>> general.module.ts:


## Utilizam serviciul RouteDataService pentru a trimite owner_id in ProjectListComponent
>> project-list.component.ts:


## In AuthGuard injectam serviciul si citim datele trimise
>> general/auth-guard.service.ts:


- acum pot vedea doar task-urile proiectelor mele (id: 14)
    - cardurile cu Hover verde
