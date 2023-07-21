import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';



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
  navmode: MatDrawerMode = 'side'; 

  constructor(private breakpointObserver: BreakpointObserver) {
    this.updateNavMode(); // Llamamos a la función inicialmente para establecer el valor inicial de navmode
  }

  @HostListener('window:resize')
  onResize() {
    this.updateNavMode(); // Llamamos a la función cada vez que se redimensiona la pantalla para actualizar el valor de navmode
  }

  private updateNavMode() {
    if (this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait)) {
      this.navmode = 'over';
    } else {
      this.navmode = 'side';
    }
  }
}
