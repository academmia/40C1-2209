

# Vom crea o directiva custom de tip atribut

- Prezenta directivei va deschide o fereastra de confirmare actiune

- Atunci cand stergem proiectele din lista vrem confirmare inainte


---

## 1. Directiva noua `deleteConfirm`

>> `app/projects/confirm-action.directive.ts`


- Folosim `@HostListener` pentru a asculta evenimentele `host`-ului 
    - adica elementului caruia i se ataseaza directiva


## 2. Import in modul si aplicare pe butonul de stergere

>> nu va functia inca corect dar vrem sa vedem in consola rezultatul 

>> `project.module.ts`



## 3. Cautam butonul de stergere proiect si atasam directiva

>> `project-list.component.html` 

`<button (click)='delete(project)' ... >x</button>`

- indiferent daca confirmam sau nu actiunea proiectul va fi sters
- dar rezultatul in consola arata valoarea returnata de fereastra de confirmare:



## 4. Rescriem directiva sa lucreze cu handler-ul componentei
>> `confirm-action.directive.ts:`

- importam decoratorul `Input`
- adaugam un input cu acelasi nume ca directiva, `confirmAction`
- initializam `confirmAction` cu o functie care nu face mai nimic (returneaza `undefined`)
    - `confirmAction` va contine o functie venita din exterior



## 5. Directiva `confirmAction` se va ocupa de stergere
>> `project-list.component.html:`

> modificam linia urmatoare
```html
<button (click)='delete(project)' confirmAction  ...
```

> sa utilizeze directiva (si in directiva vom apela functia de stergere)

> avem nevoie sa specificam si ce proiect este cel vizat de stergere 


- vom renunta la `(click)='delete(project)'` 
    - de stergere se va ocupa `confirmAction`


> ! 
- folosim `bind()` pentru a stabili contextul de executie ca fiind al componentei 
- altfel functia `delete()` va fi rulata in alt context si nu poate sterge proiectul din lista 

* ! pentru teste putem sa trimitem fara `bind()`: `[confirmAction]='delete' `
    - va fi eroare la confirmare stergere ca projects este `undefined` 
    - contextul de executie este contextul directivei 


## 6. Daca vrem mesaj customizat mai adaugam un `@Input` de tip string

>> `confirm-action.directive.ts`


## Putem utiliza si atributul `confirmMsg` pentru a customiza mesajul (Optional)

>> `project-list.component.html`


