import { Component } from '@angular/core';
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
}
