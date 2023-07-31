import { Component, Renderer2 } from '@angular/core';
import { ColorToggleService } from '../services/color-toggle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  progressValueIphone: number = 52;
  progressValueTrip: number = 21;

  defaultValueIphone: number = 40;
  defaultValueLaunch: number = 30;

  constructor(private renderer: Renderer2, public colorToggleService: ColorToggleService) { }
}
