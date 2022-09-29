
# Nested Components - comunicare parinte copil

- Vrem sa avem posibilitatea sa revenim la categoria initiala
- Prin tehnica urmatoare vom putea apela functii ale componentei copil 

>> Vom avea o functie definita pe componenta    
    > Aceasta va reseta categoria la valoarea initiala 

>> Vom comunica dinspre parinte catre copil cu `ViewChild` 
    > Putem accesa membri de pe componenta copil 


---

## Resetare categorie in `CategoryImageComponent`: 

- definim functia `resetCategory()`

- Vom utiliza si `ngOnInit` pentru a tine minte valoarea initiala a `categoryid` 


>> `category-image.component.ts`:

- In hook-ul `ngOnInit` culegem si fixam `categoryid` original 

// categories/category-image.component.ts



## Din `project-list` vom crea o legatura cu metoda `resetCategory()` a componentei copil

- Folosim decoratorul `@ViewChild` pentru ca Angular sa-mi dea o referinta catre clasa copil
>> `project-list.component.ts`:


>> `project-list.component.html`:

- Adaugam un buton in stanga butonului de stergere pe card-ul de proiect 
- adaugam si un eveniment click ce apeleaza metoda `undoChanges()`
- trimitem elementul curent pe care s-a dat click 


- fa fa-undo sunt clase din librarile FontAwesome
- daca nu e deja instalata, trebuie sa o instalam 



## Instalam font-awesome

- inchidem serverul de dezvoltare inainte

`npm install font-awesome@4.0.0`

apoi configuram angular-cli sa incarce fonturile

// .angular.json

- dupa instalare si configurare trebuie restart (daca nu a fost oprit serverul)
- nu exista watchere decat pe folderul 'src'

- daca sunt probleme la `ng server` trebuie un refresh: `npm install` sau `yarn install`

---


>> implementam metoda `undoChanges()`

>> `project-list.component.ts`:


- cautam in lista de componente `category-image` pe cea curenta 
- din view am trimis indexul proiectului curent 
