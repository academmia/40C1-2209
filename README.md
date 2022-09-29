# 14_01Z Componenta noua - home si rutare


- Vom crea o noua componenta si feature: Home (componenta si modul)

- In aceasta componenta vom afisa informatii despre aplicatie 
    - si o lista cu proiectele userului curent 

- Vom configura router-ul Angular pentru a activa cele doua componente: 
    -   Home si ProjectList 


---

## 1. Componenta noua Home:

>> app/home/home.component.ts:


- definim un selector pentru componenta ca sa facem un test inainte de rutare
- daca componenta este rutabila, nu avem nevoie de selector 


>> template home (snippet: home-my-projects):



## 2. Modul nou HomeModule:
>> home/home.module.ts:



## 3. Testam noua componenta 
>> app.module.ts:
>> app.component.html:

- folosim directiva (selectorul spm-home):


* Avem acum o noua componenta 
* Vrem ca cele doua componente Home si ProjectList sa fie rutabile 



## 4. Configuram rutele:
>> app-routing.module.ts:



## 5. Adaugam link-ul in menu (routerLink si routerLinkActive)
>> layout/layout.component.html:


* !! Atentie. Trebuie nu trebuie sa utilizam ```href="#"``` altfel se reincarca aplicatia 


