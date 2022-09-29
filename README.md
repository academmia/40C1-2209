

# 15_06x Reactive Form - Validari custom

- Vom crea un modul nou pentru validari custom

- Vom crea validator pentru numere pare/impare

- Vom crea un validator parametrizabil
    - array de valori string primit din exterior

- Vom crea directiva pentru afisarea mesajelor de eroare
    - Mesajele de eroare vor fi diferite in functie de tipul de eroare

---

## Cream un nou modul in aplicatie: ValidationModule



## Vom crea un nou serviciu injectabil in componentele aplicatiei



## Definim un provider pentru el si incarcam modulul in App

> incarcam modulul in aplicatia principala



## Utilizam cele doua validari in formularul TaskEdit



- la forma initTaskForm puteam folosi patchValue, si atunci nu ar fi fost nevoie sa specificam proprietatile.

- daca lasam ```setValue()``` vom avea eroare in consola

```Must supply a value for form control with name: 'fake_one'.```


> Adaugam doua campuri in formularul de editare:



- acum ar trebuie sa avem vizual semnalizat erori de date pentru numere pare / impare

    - in Fake One trebuie sa avem minim 2 caractere si sa fie par

    - in Fake Two trebuie sa avem maxim 4 caractere si sa fie impar


---

## Cream un nou validator configurabil

- vom putea sa trimitem parametri de configurare pentru Validator

- Vom trimite un array de status-uri, iar campul respectiv va fi valid doar daca introducem una din acele valori

- va fi de fapt un FunctionFactory (returneaza o functie de validare)



- de data asta avem o functie Factory configurabila prin parametru

- asta inseamna ca din ReactiveForms putem sa specificam valori diferite pentru campuri diferite
    - iar validarea se adapteaza


> Utilizam validatorul pentru campul ```Status```



## Directiva pentru afisarea mesajelor de eroare

- Va primi un FormControl si calculeaza automat daca trebuie sa afiseze mesaje de eroare



> stilizam mesajul de eroare afisat


> Declaram componenta in modulul validation.module.ts



## Utilizam componenta in task-edit.component

> mai intai importam ValidationModule in TaskModule

- ca sa avem acces la componenta ```validation-message```


> Utilizam componenta in task-edit.component


## Configuram individual mesajele pentru fiecare tip de eroare


> Utilizam noua functie a serviciului in componenta de afisare mesaje



- Acum fiecare tip de eroare afiseaza un mesaj personalizat.

- La campul status avem minLength(2) si nu putem folosi decat valori prestabilite

