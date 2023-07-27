import { Component } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { ColorToggleService } from '../services/color-toggle.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  constructor(public colorToggleService: ColorToggleService) { }
}
