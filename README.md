

# 15_05x Reactive Form - FormBuilder - Add Task

# Vom contrui un formular de adaugare Task nou folosind FormBuilder


## Adaugam metoda de salvare Task nou pe server 
>> POST /tasks 
>> task.service.ts:


## Vom importa FormBuilder si vom instantia modelul pentru formular 
>> tasks/task-new.component.ts:

[Snippet: task-new-createForm.txt]


- formBuilder.group creaza un FormGroup 

- proprietatile obiectului trimis lui group() sunt de tipul FormControl 

- folosind FormBuilder scapam de new FormControl() 



>> copiem formularul de la task-edit.component.html:


