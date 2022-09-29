

# 15_04x Reactive Form - Edit Task


- Vom crea un formular de editare task folosind ReactiveForms


---

## Importam ReactiveFormModule in modulul TaskModule
>> tasks/task.module.ts:



## Modificam componenta TaskEditComponent 
>> tasks/task-edit.component.ts:



>> tasks/task-edit.component.html:
[Snippet: ]

Adauga atribut pe ```<input>```: ```[formControl]="subject" ```


> prin ```[formControl]="subject"``` 
- am creat legatura intre HTML si controlul din clasa


>> Exista trei clase importante in formulare
- ```FormControl``` - corespunde unui inbox sau selector
    - tine evidenta valorii si a validitatii

- avem nevoie atributul ```name``` pentru ReactiveForm
- avem nevoie de ```id``` pentru label
    - la click pe label, browserul cauta input-ul cu id-ul `subject` si pune focus-ul pe el

---

- ```FormGroup``` - grupeaza mai multe controale ```FormControl/FormGroup``` 
    - aduna toti copii sub un singur obiect

    - ne furnizeaza valori si statusuri la nivel de grup 

    - root-ul unui formular este tot ```FormGroup``` 

---

- ```FormArray``` - face o agregare a tuturor copiilor
    - calculeaza statusurile lui in functie de cele ale copiilor 

    - daca un copil este invalid, intreg array-ul devine invalid 

    - ne ajuta sa validam in acelasi timp mai multe controale 

---

>> Toate cele trei clase implementeaza clasa de baza ```AbstractControl``` 


---

## Cream un FormGroup 

- Adaugam mai multe controale de tipul FormControl

>> tasks/task-edit.component.ts:


- formGroup este o directiva Reactive ce asociaza ```<form>``` cu ```FormGroup()```

- bindingul catre ``` [formControl]="subject"``` devine formControlName="subject"

- fara un FormGroup, directiva [formControl] poate functiona si singura 

- ```formControlName="subject"``` va cauta un ```FormGroup``` denumit taskForm 
        ```<form [formGroup]="taskForm" ... >```
    - si in interior va cauta un ```FormControl``` cu numele subject 
        ```<input formControlName="subject"```

- ```novalidate``` pentru ca nu vrem ca Browserul sa ne valideze formularul 
    - (preluam noi controlul)



---

## Acum vom crea un form model cu toate campurile pt. editarea unui Task 
>> tasks/task-edit.component.ts:

[Snippet: taskForm.FormGroup.class.md]


>> tasks/task-edit.component.html:
(snippet form-layout-starter.html)

- vom lega fiecare input de denumire campului declarata in clasa (taskForm)
- id-ul inputul din snippet este chiar numele proprietatii din modelul declarat in cod


- Putem testa editorul de task
- Observam daca apar default-urile
- Putem folosi ```ng.probe($0)``` sau Augury sa verificam legaturile intre model si formular

---

## Adaugam atributul required la subject si description 

- Daca forma nu este valida butonul Salveaza este disabled 

>> tasks/task-edit.component.html:



---

## Avem nevoie de o noua metoda in serviciul de date TaskService

-  ```getTaskById(taskid) ```

>> tasks/task.service.ts:


## Folosim parametrul primit si serviciul TaskService (getTaskById)

- Vom aduce datele task-ului x de pe server si vom initializa FormGroup cu ele 

>> In felul asta vom edita campurile task-ului pe care am dat click 

>> tasks/task-edit.component.ts 


    
- acum in consola va trebuie sa fie afisat un obiect cu task-ul primit de pe server


---


## Vom folosi setValue pentru a initializa modelul atasat formularului taskForm 

>> (daca nu instantiem toate campurile, folosim ```patchValue```)



---

## Metoda noua ```save()``` si verificam daca in consola apar modificarile
>> task-edit.component.ts:


## Extindem TaskService cu metoda updateTask(task)
>> task.service.ts:


## Folosim TaskService (updateTask) in TaskEditComponent:
>> task-edit.component.ts:


 
- acum modificarile se salveaza 

- Obs. nu se face refresh pe lista de task-uri

