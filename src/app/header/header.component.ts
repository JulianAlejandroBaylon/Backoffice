import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  selected = 'USA';
  isSelected: boolean = false;

  toggleSelected() {
    this.isSelected = !this.isSelected;
  }
  pageTitle = '';

  section(sec: string) {
    this.pageTitle = sec;
  }
}
