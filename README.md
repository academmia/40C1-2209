
# 14_05A Rute copil - Modul task-uri


- Vom crea componente noi in modulul de task-uri

- Componenta Layout pentru modulul de task-uri (folosim un nou ```<router-outlet>```)
    - vom avea directive outlet imbricate (in componente imbricate)

- Componenta pentru Listarea task-urilor 

- Componente pentru View Task 

---

## Componenta noua: TaskLayoutComponent 
>> aceasta componenta va avea propria directiva ```<router-outlet>```
>> tasks/task-layout.component.ts:


>> tasks/task-layout.component.html:
(snippet: task-layout.html)

>> folosim snippetul si adaugam ```<router-outlet></router-outlet>```


- Aceasta componenta este similara cu AppComponent (este o mini aplicatie pentru Task-uri)
- nu avem nevoie de selector, va fi activata prin rutare 


---

## Componenta noua: TaskListComponent 
>> task-list.component.ts:



>> task-list.component.html:
(snippet: task-list.html)


## Componenta noua: TaskListComponent 
>> task-new.component.ts:


>> task-new.component.html:
(snippet: task-new.html)



- Am definit trei componente, acum vrem sa le atasam unui modul (TaskModule)


---

## Atasam componentele modulului TaskModule
>> tasks/task.module.ts:


## Acum ne ocupam de rute (child-routes) - definim modul nou pentru rutele Task 

>> Avem o noua componenta care va fi rootul componentelor din TaskModule (TaskLayoutComponent)

>> Aceasta componenta defineste un nou ```<router-outlet>```

>> Alte doua componente sunt copii ale acestei componente.
    > TaskListComponent si TaskNewComponent

---

>> Fisier nou: task-routing.module.ts:

[Snippet: task-routing.module.ts.md]


>> Daca concatenam proprietatile path din arbore gasim url-ul corespondent componentei
- http://localhost:3000/tasks       incarca modulul TaskListComponent ( 'tasks' + ''  )
- http://localhost:3000/tasks/new   incarca modulul TaskNewComponent ( 'tasks' + 'new'  )


---

## Importam modulul de rutare (TaskRoutingModule) in TaskModule
>> task.module.ts:



## Verificam daca modulul TaskModule este importat in AppModule 
>> Pentru a fi disponibil in aplicatie trebuie importat 

>> In cazul nostru modulul este deja importat anterior


---


## Adaugam un link de navigare catre componenta TaskListComponent 
>> verificam in ```task-routing.module.ts``` cum se construieste calea 
>> TaskLayout nu poate fi accesat singur pentru ca unul dintre copii are path='' 
>> app.component.html:


- testam aplicatia si accesam link-ul Tasks
- ar trebui sa vedem incarcata componenta TaskListComponent 


---

## In TaskLayout adaugam link-uri pentru cele doua componente 

>> Modificam butoanele New task si All tasks 
>> tasks/task-layout.component.html:

>> Daca suntem in interiorul componentei am putea sa evitam utilizarea cailor absolute
- Putem utiliza calea absoluta precum in ex. anterior sau
- Putem utiliza calea relativa

- Daca utilizam calea relativa crestem independenta componentei 
- O modificare ulterioara ```path='tasks'``` nu mai genereaza modificari in codul de navigare 


- ./ pentru ruta copil implicita 
- ./new sau new
- ../ un nivel mai sus 
- ../ accesarea unei rute de pe acelasi nivel (sibling)

- Daca folosim Router.navigate trebuie sa-i furnizam ruta curenta (ActivatedRoute)
> Exemplu:

```
constructor(
  private service: TaskService,
  private route: ActivatedRoute,
  private router: Router
) {}

onSelect(task: Task) {
  this.selectedId = task.id;

  // Navigare relativa la detalii despre task-ul id 
  // http://localhost:3000/tasks/8
  this.router.navigate([task.id], { relativeTo: this.route });
}
```
> Navigare inapoi un nivel 


>> Vom utiliza acum rute relative:





