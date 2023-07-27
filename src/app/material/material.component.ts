import { Component, ViewChild, ElementRef } from '@angular/core';
import { ColorToggleService } from '../services/color-toggle.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  constructor(public colorToggleService: ColorToggleService) { }
}
