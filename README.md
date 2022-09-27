
# 01 Project-list - filtru, ngIf

- Adaugare camp pentru filtrare lista proiecte 

- Adaugare mecanism de ascundere lista proiecte daca nu exista niciun proiect 

- Adaugare buton stergere proiect din lista

---

## 1. Adauga camp Filter
>> projects/project-list.component.html:


## 2. Adauga in clasa, proprietate pentru filtru
>> project-list.component.ts 


## 3. Adaugare two-way binding pentru campul de filtrare

>> importa `Forms` in modulul `Project ` 

>> project.module.ts
>> project-list.component.html


### 4. Daca nu avem completat nimic la filtru atunci ascundem textul din dreapta
>> "Filtrare dupa:" ascundem sau afisam in functie de `projectSearchText`

>> project-list.component.html


## 5. Daca nu avem proiecte ascundem toata sectiunea cu filtru si lista:

>> project-list.component.html

- vom testa mecanismul simuland lista vida de proiecte


## 6. Implementam o metoda `delete()` pentru stergerea unui proiect din lista

>> adaugam un x in dreapta sus 
>> project-list.component.html: 


>> implementam metoda `delete()`:
>> project-list.component.ts 

- adaugam metoda delete care scoate elementul trimis ca parametru din "projects"

>> adaugam in view evenimentul (click) cu apelarea metodei delete(project)
>> project-list.component.html


