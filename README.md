

# Directiva Custom tip atribut 

- Modificare aspect la `mouseover` si in functie de alte conditii

>> Vom crea o directiva custom care va opera modificari de aspect,
    > in functie de existenta unui text in elementul `host` 


---

## 1. Directiva noua 

>> `hover-display.directive.ts`


Despre Renderer2
[https://www.digitalocean.com/community/tutorials/angular-using-renderer2]




## 2. Importam directiva in modulul project

>> `project.module.ts`



## 3. Folosim directiva pe elementul care defineste proiectul

>> `project-list.component.html:`

-  Facem primul test.


>> stergem si stilurile inline (vom crea mai jos un fisier `.css`)

~~`style="background-color: #555; border-color: #555;"`~~



## 4. Cream un fisier pentru stilizarea componentei ProjectList

- daca nu facem asta, directiva `hoverDisplay` va returna null la plecarea de pe element si se pierde aspectul


>> importam fisierul `css` in componenta

`// projects/project-list.component.ts`




## 5. Aspect diferit pentru `owner`

- In continuare vrem ca aspectul pe hover sa fie diferit daca Ownerul sunt eu 

>> `(owner_id: 10, owner_name: James Hansen)`

>> Adaugam la card-ul proiectului un footer care sa contina owner_name:

>> `project-list.component.html`



## 6. Directiva verifica textul inainte sa stabileasca culorile

- Modificam directiva sa verifice textul inainte sa stabileasca culorile pentru hover:

>> `hover-display.directive.ts`



## 7. Onwerul va putea veni din exterior

- Adaugam o proprietate `@Input()` pentru a primi textul verificat din afara (`owner`-ul)

>> `hover-display.directive.ts`

- `@Input() ownerName: string = '';`
- `if (this.ownerName && owner.indexOf(this.ownerName) !== -1)` 



## 8. Modificam view-ul sa trimita informatia despre owner din exterior 

>> `project-list.component.html:`

- adaugam atributul `ownerName` 

> `hoverDisplay ownerName='James Hansen'`


- Testam cu `James Hansen`, `Clyde Dorman` etc...

