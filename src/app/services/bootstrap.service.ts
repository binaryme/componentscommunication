import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {
  isOpen: any = 'isOpen';
  @Output() change: any = new EventEmitter();
  constructor() {}
  toggle() {
    this.change.emit(this.isOpen);
    console.log(this.isOpen);
  }
}
