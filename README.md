

# 15_03x Template Form - Validari

# Vom adauga validari pentru ProjectFormComponent 

>> Angular are obiecte si proprietati pentru formulare si campuri 
    > prin care putem afla daca 
        - un camp a fost atins
        - daca valoarea a fost modificata
        - daca valoarea este valida 

>> Are clase CSS pe care le adauga in functie de starile campurilor/formularului

>> Clase CSS: 
- controlul a fost/nu a fost vizitat: ```ng-touched / ng-untouched```

- valoarea a fost/nu a fost modificata: ```ng-dirty / ng-pristine```

- valoarea controlului este /nu este valida: ```ng-valid / ng-invalid```


> ! Debugging: Putem inspecta proprietatile campurilor sau formularului

*   in consola. Selectem elementul pe care vrem sa-l inspectam apoi:
*    ```> ng.probe($0)``` 
* - este similar lui ```angular.element($0).scope()``` pentru AngularJS 



---

## Pregatim formularul ProjectForm pentru validare 
>> project-form.component.html:

>> adaugam atributul novalidate  


- in felul asta vom renunta la validarile implicite HTML5


>> verificam existenta atributului ```name``` pe fiecare camp 



## Vrem sa evidentiem starile formularului folosind clasele CSS automate

> Vom adauga in fisierul global CSS, proprietati pentru clasele respective

>> styles.css:


- campurile invalide au stilizare personalizata


---

## Mutam functia de ascundere modal in clasa 
>> pe viitor este posibil sa adaugam logica la ascunderea modulului

>> Cream o functie noua ```hideEdit()```
>> project-list.component.ts:


>> apelam functia din template:
>> project-list.component.html:


> * acum daca in editorul de proiect stergem un camp required (name), vom avea semnalizare grafica (chenat rosu)



---

## Vrem sa afisam mesaje de eroare descriptive
>> project-form.component.html:

- prima data captam referinta catre FormControl: #name="ngModel" 

- apoi folosim varaibila in interiorul formularului

- acum daca stergem denumirea o sa afiseze si un mesaj cu informatii suplimentare


---

## Daca formularul este invalid vrem ca butonul de Save sa fie disabled
>> project-form.component.html:

- angular adauga directiva ngForm la fiecare element ```<form>```

- putem astfel sa mentinem o referinta catre aceasta directiva 

- vom utiliza variabila pentru a adauga logica de enabled/disabled pentru Save 


