import { Component } from '@angular/core';

@Component({
  selector: 'spm-modal',
  templateUrl: './spm-modal.component.html',
  styleUrls: ['./spm-modal.component.css']
})
export class SpmModalComponent {

  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
}
