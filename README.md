# Vom crea o componenta care afiseaza imagini simbol pt categorii

- Componenta va fi utilizata de componenta `project-list` pt a afisa vizual categoria proiectului

- Componenta are si functionalitatea de modificare categorie prin click pe imagine 


---

## 1. Cream o componenta noua:
>> `app/categories/category-image.component.ts`


## 2. Prima versiune a template-ului componentei
>> `app/categories/category-image.component.html`:


## 3. Importam componenta in modulul project:
>> `projects/project.module.ts`:


## 4. Folosim componenta in `project-list`
>> `project-list.component.html`

- mutam afisarea codului in corpul card-ului

- vom avea o imagine statica afisata ca simbol de categorie


## 5. Vom prelua dinamic id-ul categoriei si vom afisa imaginea corespondenta
>> `app/categories/category-image.component.ts`:


- avem nevoie din exterior de un `id` de categorie

- in functie de acest `id` construim `url`-ul imaginii categoriei


## 6. Modificam template-ul componentei sa afiseze dinamic imaginea
>> `app/categories/category-image.component.html`:



## 7. La Hover mouse vrem sa apara denumirea categoriei 
>> `app/categories/category-image.component.ts`:
>> `app/categories/category-image.component.html`:



## 8. Gaseste Urmatoarea categorie disponibila 

- Vom da click pe imagine si o functie calculeaza urmatoarea categorie (id-ul)
>> `categories/category-image.component.ts` 

- Daca categoria este ultima (54) trebuie sa returneze (50) ... 


## 9. Modificam template-ul componentei
>> `category-image.component.html`:

- la fiecare click se modifica imaginea cu urmatoarea 
- componenta parinte nu stie nimic despre aceste modificari
- ar trebui sa opereze modificarile in baza de date 


## 10. Mecanism de comunicare dinspre componenta copil catre componenta parinte
>> `category-image.component.ts`:

>> adaugam o proprietate `@Output` de tipul `EventEmitter` 


## 11. Utilizam informatia trimisa de componenta `category-image` in `project-list `
>> `project-list.component.html`:

