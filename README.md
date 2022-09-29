

# 15_01x Modal Component cu ViewChild si ngContent


---

# Vom crea o componenta care preia continutul ei si il afiseaza in modal 

>> vom scrie cod ca mai jos:

```html
<spm-modal>
    <div class="spm-modal-header">
        header
    </div>
    <div class="app-modal-content">
        Formular de introducere date sau alte informatii
    </div>
    <div class="app-modal-footer">
        <button type="button" class="btn btn-default btn-sm" (click)="spmModal?.hide()">Close</button>
        <button type="button" class="btn btn btn-outline-secondary btn-sm">Save</button>
    </div>
</spm-modal>
```
- tot continutul din interiorul <spm-modal> va fi afisat modal 




#> Cream o componenta noua: SpmModal:

>> general/spm-modal.component.html:

[Snipper: spm-modal.component.html]


>> general/spm-modal.component.ts:



---

## Declaram componenta ca parte a modulului GeneralModule
>> general.module.ts:


- reexportam CommonModule pentru cei care folosesc GeneralModule


---

## Importam modulul in ProjectModule pentru a avea acces la directiva <spm-modal>

>> projects/project.module.ts:


---

## adaugam un buton de editare Proiect in ProjectListComponent
>> project-list.component.html:

- adaugam inainte de delete



---

## Adaugam elementele necesare pentru afisarea continutului: 
>> project-list.component.ts:


>> proprietate noua in clasa ProjectList cu decoratorul @ViewChild 



---

## adaugam componenta ```<spm-modal>``` si continutul pentru ea:
>> project-list.component.html:

>> ultimul element din pagina va fi ```<smp-modal>```


[Snippet: spm-modal-usecode.html]



---

## Add and import spm-modal.component.css

[Snippet: spm-modal.component.css]



- Deschidem modalul din butonul de edit din lista de proiecte

