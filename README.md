

# Paginare lista proiecte 


---

## 1. Incepem mecanismul de paginatie prin adaugarea a doua variabile

>>project-list.component.ts



## 2. Adaugam o metoda noua, getPaginatedProjects(), care sa tina seama de paginatie

>>project-list.component.ts:



## 3. Modificam view-ul ca sa foloseasca metoda `getPaginatedProjects()`

>> project-list.component.html

    
- in prima instanta vor aparea doar 3 elemente in lista
- apoi vom adauga mecanismul de paginare pentru restul proiectelor din lista



## 4. Metode helpere pentru mecanismul de paginare 

>>project-list.component.ts

`selectPage` `setPageSize` `get pages()`



## 5. Adaugare sectiune paginare in view

>> project-list.component.html
>> snippet `paginatie-proiecte-view.txt`


> afisare setare curenta:

    [value]="perPage"


> la detectare modificare apeleaza metoda `setPageSize()`

1. functioneaza cu setarea `strictTemplates` **dezactivata**
`(change)="setPageSize($event.target.value)" `
- daca avem setarea `tsconfig.json`:  `"strictTemplates": true` linia de mai sus da eroare

2. Functioneaza si cu setarea `strictTemplates`
- putem folosi `(change)="setPageSize($any($event.target).value)"`

3. Best choice
- sau **template refs**
```html
    <select #pageSize [value]="perPage" 
            (change)="setPageSize(+pageSize.value)" 
```

> cand apasam pe un numar de pagina apelam functia `selectPage()`

    (click)="selectPage(page)


> paginii curente ii adaugam clasa `"active"`

    [class.active]="page == currentPage"


!!

- BUG-ul click pe pagina 2 apoi intr-o categorie cu mai putin de 3 elmente este lasat ca exercitiu

