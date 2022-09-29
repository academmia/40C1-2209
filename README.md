
# 13_02x Http - categorii si delete project

- Vom modifica serviciul CategoryService sa aduca datele de pe server
- Vom implementa stergerea de pe server pentru ProjectService


## 1. Importam modulele Http si Observable

>> category.service.ts


## 2. Modificam project-list.component sa utilizeze corect noul serviciu 
>> projects/project-list.component.ts:


## 3. Adaptam metoda delete() din componenta ProjectList

>> project-list.component.ts:



> in caz de succes am putea sa ne ducem cu un request pe server, 
    > ca sa luam datele actualizate

> in cazul de fata putem sa economisim un request 
    > actualizand manual lista (am lasat codul anterior in functiune)

