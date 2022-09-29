
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'category-image',
    templateUrl: 'category-image.component.html'
})
export class CategoryImageComponent {
    @Input() categoryid: number = 50;
    @Output() categoryChanged: EventEmitter<number> = 
        new EventEmitter<number>();
    imageUrl: string = '';
    baseUrl: string = 'assets/categories/img/64/';
    imageTitle: string = '';
    initialCategory: number = 50;

    getImageUrl(): string {

        switch(this.categoryid){
            case 50:
                this.imageUrl = this.baseUrl + 'general.png';
                this.imageTitle = 'General';
                break;
            case 51:
                this.imageUrl = this.baseUrl + 'web.png';
                this.imageTitle = 'Web';
                break;
            case 52:
                this.imageUrl = this.baseUrl + 'db.png';
                this.imageTitle = 'Database';
                break;
            case 53:
                this.imageUrl = this.baseUrl + 'api.png';
                this.imageTitle = 'API Server';
                break;
            case 54:
                this.imageUrl = this.baseUrl + 'infrastructure.png';
                this.imageTitle = 'Infrastructure';
                break;
            default: {
                this.baseUrl + 'general.png';
                this.imageTitle = 'Infrastructure';
            }
            
        };

        return this.imageUrl;

    }

    nextImage(): void {
        console.log('nextImage current categoryid: ' + this.categoryid);
        this.categoryid =  getNewCategory(this.categoryid);
        this.categoryChanged.emit(this.categoryid);
    }

    ngOnInit() {
        console.log('>>ngOnInit: ' + this.categoryid);
        this.initialCategory = this.categoryid;
    }

    resetCategory(): void {
        console.log('>>resetCategory: ' + this.initialCategory);
        this.categoryid = this.initialCategory;
        this.categoryChanged.emit(this.categoryid);
    }

}

function getNewCategory(categoryid: number) {
  	switch (true) {
      	case (categoryid > 54 || categoryid < 50): 
			return 50;
        case (categoryid < 54): 
			return ++categoryid;
		case (categoryid == 54): 
			return 50;
        default: 
			return 50
      }
}

