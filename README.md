
# Filtrare proiecte - custom pipe 

- vom face functional campul de filtrare

- pentru asta vom crea un pipe custom ce va fi folosit pentru filtrare 


---


## 1. Creare pipe: 

>> fisier nou `app/projects/project-filter.pipe.ts`



## 2. Importam filtrul in modulul project:

>> `project.module.ts`



## 3. Utilizarea pipe-ului:

>> `project-list.component.html`



## 4. Daca filtram acum produsele, paginatia ramane

- De exemplu in `'Toate categoriile'` daca apasam pe `h` vom avea rezultate pe prima si ultima pagina 

- Vrem sa scoatem paginatia cand filtram produsele 

>> `project-list.component.ts`



## 5. La filtrare vrem sa ascundem zona de paginatie

>> `project-list.component.html:` 

- Daca avem text in casuta de filtrare atunci acundem zona cu butoanele de paginatie 

- adaugam `[hidden]='projectSearchText'`



### BUG 

>> Daca suntem pe pagina 3 si schimbam pe o categorie cu o pagina 

> ramane selectia de pagina 3 si nu se afiseaza nimic

- Suntem pe categoria "Toate"
- Ne ducem pe pagina 3
- apasam pe categoria General si nu afiseaza nimic 

>> Vom reseta pagina curenta la fiecare modificare a categoriei 

>> `project-list.component.ts:`

