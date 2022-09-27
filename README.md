

# Vom adauga `posibilitatea sa selectam un proiect` dintr-o lista

- Doar proiectele din acea categorie vor fi afisate 

---


## 1. getCategories in serviciul ProjectService

- definim un model nou de date (`ICategory`)

`//+ categories/category.ts`


- cream o metoda noua ( `getCategories()` ) in serviciul `ProjectService`

`// projects/project.service.ts`



## 2. In componenta, adaugam o `metoda care returneaza categoriile`
>> project-list.component.ts:

- utlizam metoda `getCategories()` din serviciul `ProjectService`

`// projects/project-list.component.ts`


## 3. Adaugam variabila care `stocheaza categoria selectata` 
>> project-list.component.ts


## 4. Adaugam o `metoda care returneaza proiectele` a.i. `sa tina cont de categorie` 

- vom inlocui in view `projects` cu aceasta metoda

>> project-list.component.ts



## 5. Adaugam o metoda care `va modifica valoarea categoriei curente` 

 >> project-list.component.ts  



## 6. Adaugam `zona de afisare categorii` in view-ul project-list

>> project-list.component.html

>> snippet: `category.html.txt`

- trecem la 12 coloane (modificam col-urile)
- folosim mt-1 altfel se depaseste suma pentru 12 coloane (m-1 pune margini si in lateral)
- pentru alinierea filtrului folosim offset: `col-5 offset-3 mt-1`

<!-- projects/project-list.component.html -->



## 7. Afisare lista categorii

>> project-list.component.html

<!-- projects/project-list.component.html -->



## 8. Apelam `metoda de modificare categorie`
>> project-list.component.html


<!-- projects/project-list.component.html -->



## 9. Evidentiere categorie selectata (`ngClass`)

>> project-list.component.html

`<!-- projects/project-list.component.html -->`


>> Mai adaugam si un container alternativ care are mesajul "Nu exista proiecte!"

<!-- projects/project-list.component.html -->

