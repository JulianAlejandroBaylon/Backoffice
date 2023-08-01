import { Component, ViewChild, ElementRef } from '@angular/core';
import { ColorToggleService } from '../services/color-toggle.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  constructor(public colorToggleService: ColorToggleService) { }

  
}
