import { Component } from '@angular/core';
import { ColorToggleService } from '../services/color-toggle.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(public colorToggleService: ColorToggleService) { }
}
