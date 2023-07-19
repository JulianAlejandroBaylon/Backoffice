import { Component } from '@angular/core';

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
}
