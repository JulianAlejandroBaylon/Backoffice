import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorToggleService {

  isColorsOn: boolean = false;

  toggleColors() {
    this.isColorsOn = !this.isColorsOn;
  }
}
