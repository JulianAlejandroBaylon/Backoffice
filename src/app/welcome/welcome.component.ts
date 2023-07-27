import { Component } from '@angular/core';
import { ColorToggleService } from '../services/color-toggle.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(public colorToggleService: ColorToggleService,private clipboard: Clipboard) { }
  copyLinkToClipboard(link: string): void {
    this.clipboard.copy(link);
  }
  
}
