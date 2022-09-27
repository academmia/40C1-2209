

# Directiva Custom Structurala - Later 

- directiva va amana generarea unui element in DOM cu un timp specificat din exterior 

- putem sa utilizam directiva pentru a creste performantele listelor lungi 

- pentru a amana afisarea unor elemente din pagina
    - in special elemente care nu apar in viewport
    - exista in felul asta o perceptie ca aplicatia este mai rapida

- pentru un efect de afisare in cascada a elementelor din DOM


---

## 1. Cream o directiva noua

>> `app/projects/later.directive.ts`



## INFO

- Folosim `set` pentru a putea executa cod atunci cand Angular face bindingul

- Acest `template` il punem ca `embedded view` in Containerul de `view`-uri

- Containerele de View-uri pot avea atasate una sau mai multe view-uri 

- Un `view` este `un layout impreuna cu contextul` sub care este generat 

- Aceste containere sunt atasate componentelor

- Daca schimbam view-ul ce este atasat containerului, componentei i se va modifica aspectul  

- Unui container de view-uri ii pot fi atasate doua tipuri de view-uri:
    - `Host View `- legate de componente 
    - `Embedded View` - legate de un template 

- `Directivele structurale lucreaza cu template-uri` (asa ca vom crea `Embedded View` din template-ul primit)

- Prin `ViewContainerRef` avem acces la containerul de view-uri 

- `createEmbeddedView` ne permite sa `atasam un view` acestui container dupa ce i-am furnizat un template 

- cream view-ul folosind template-ul furnizat(`TemplateRef`) la care este atasata directiva custom 



## 2. Importam directiva in modulul project 

>> `project.module.ts`




## 3. Utilizam directiva in view-ul componentei project-list 

>> `project-list.component.html`


- din cauza ca _nu putem utiliza doua directive structurale pe acelasi element_
    - adaugam un `div` deasupra si mutam `*ngFor`-ul

- avem nevoie si de index pentru efectul de afisare in cascada

- in locul unui extra `div` putem utiliza `ng-container` care nu se randeaza in DOM

```html
<ng-container *ngIf="condition">
  …
</ng-container>
```


