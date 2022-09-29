
# 13_01x Incarcarea datelor prin Http - proiecte

- Vom accesa datele de pe un server API (json-server portul 3000)
- Vom incarca lista de proiecte si categoriile de pe server 
- Modificam serviciile de date (proiecte si categorii) 

---

## 1. Pornim serverul de date:

> Terminal (folderul apiserver):

- (daca nu este instalat) rulam:

``` 
    > npm install -g json-server 
```

- pornim serverul api: 
```
> json-server -d 100 db.json 
```

> vom avea un server pe portul 3000 cu urmatoarele resurse:
```
    http://localhost:3000/projects
    http://localhost:3000/tasks
    http://localhost:3000/statuses
    http://localhost:3000/users
    http://localhost:3000/categories
```

---

> ## 2. Incarcam modulul HttpModule 

>> app.module.ts:



> ## 3. Instalam RxJS (daca nu este prezent in package.json)

`npm i rxjs@6.6.7`



> ## 4. In serviciul ProjectService utilizam HttpClient:

- libraria considera implicit ca interogam un API Server care raspunde cu date in format JSON.

>> projects/project.service.ts:



## 5. Modificam componenta ProjectList

>> projects/project-list.component.ts:
