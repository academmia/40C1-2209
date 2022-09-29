

# 15_02x Template Form - Edit Project

- Vom crea o componenta pentru editarea unui proiect

- Componenta va fi afisata modal in project-list.component.html 


---

## Componenta noua: FormEditComponent
>> projects/project-form.component.ts:



>> projects/project-form.component.html:

[Snippet: project-form.component.html]


## Declaram componenta in modulul ProjectModule:
>> project.module.ts:


## Folosim componenta ca directiva in interiorul componentei modale ```<spm-modal>```
>> project-list.component.html:


- acum la deschiderea modalului de editare proiect ar trebui sa apara un formular cu doua input-uri si un select


---

## Importam categoriile pentru a crea un ```<select>``` in formular 
>> project-form.component.ts:


> Adaugam date dinamice la select-ul de Categorie

>> project-form.component.html:


## Utilizam ngModel pentru two-way databinding intre form si model 

>> project-form.component.ts:


>> actualizam onSubmit():


>> project-form.component.html:


- definim si un nume pentru fiecare proprietate 
    - cand folosim ngModel este obligatoriu 

- angular creaza instante ale clasei FormControl si le inregistreaza cu formularul
    - numele utilizat pentru instante este valoarea atributului "name"


## Initializam this.proiect cu un obiect de tipul IProiect
>> copiem un obiect de pe serverul de API
 http://localhost:3000/projects

```json   
{
    "id": 3,
    "code": "THREE",
    "name": "Project THREE",
    "description": "This is the description of Project THREE",
    "owner_id": 10,
    "owner_name": "James Hansen",
    "category_id": 51,
    "created_date": "29/10/2051",
    "end_date": "2051-11-30T21:00:00.000Z"
}
```

>> project-form.component.ts:


- am introdus un obiect de test
    - formularul de editare modal ar trebui sa-l afiseze



---

## Adaugam posibilitatea de a primi o instanta de proiect ce trebuie editata
>> project-form.component.ts:


## Trimitem proiectul curent componentei project-form
>> Componenta project-form poate primi o instanta de proiect prin atributul project


>> project-list.component.ts:
  

>> project-list.component.html:    


- acum la fiecare click ar trebui sa se populeze campurile formularului
    - cu proiectul selectat 



---

## Salvam pe server datele modificate de formularul <project-form>
>> project-form.component.ts:


- Daca proiectul a fost salvat cu succes atunci vom emite un eveniment 

> * In momentul asta se salveaza pe server datele, dar nu se inchide modalul la Save



---

## Gazda componentei va putea inchide modalul 
>> project-form.component.ts:


- acum componenta de editare emite o notificare atunci cand salveaza cu success un proiect

- ramane ca parintele sa utilizeze informatia


---


## Ne abonam la evenimentul projectSaved emis de <project-form>

>> project-list.component.html:


>> project-list.component.ts:
  

