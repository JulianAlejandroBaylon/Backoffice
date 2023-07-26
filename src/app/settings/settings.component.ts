import { Component } from '@angular/core';
import { ColorToggleService } from '../services/color-toggle.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  selectedPart: string = 'part1';
  changeContent(part: string) {
    this.selectedPart = part;
  }

  constructor(public colorToggleService: ColorToggleService) {} 
  
  toggleColors() {
    this.colorToggleService.toggleColors();
  }
 
}
