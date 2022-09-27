

# Vom crea o componenta noua care va afisa lista de proiecte

---

## 1. Fisier Template nou

- mutam codul care afiseaza lista de proiecte din `app.component.html`


## 2. Componenta noua

- cream o componenta noua care utilizeaza template-ul anterior
- vom muta codul care importa si furnizeaza lista de proiecte

- utilizam interfata deja definita pentru `Project`
- utilizam service-ul care ne aduce datele despre proiecte
- punem la dispozitie view-ului datele in variabila `projects`


## 3. Cream un modul de business folosind NgModule 

>>  modulul Angular organizeaza caracteristici al aplicatiei legate intre ele dpdv al business-ului 

- vom avea un modul dedicat in care putem sa punem tot ce tine de Proiecte
- vom importa `CommonModule` pentru ca `*ngFor` este definit in `CommonModule` (sau in `BrowserModule` care il re-exporta)


## 4. Modificam Componenta Root si Modulul Root 

>> `AppComponent` si `AppModule` 

>> adaugam noul modul ca dependenta in `AppModule`
>> Actualizam template-ul `AppComponent` ca sa afiseze componenta `project-list`


## 5. Curatam componenta app.component 

- scoatem liniile care importa datele despre proiecte
- eliminam si injectarea serviciului `ProjectService`


