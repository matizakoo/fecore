import {Component, HostListener} from '@angular/core';
import {ButtonComponent} from "../../shared/button/button.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nav',
  imports: [ButtonComponent, NgIf],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../../../styles.css']
})
export class NavComponent {
  open = false;
  menuIcon = '☰';
  visible = false;

  constructor() {
  }

  toggleMenu(button: HTMLElement) {
    const willBeOpen = !this.open;
    if (this.open) {
      this.visible = false;
      this.animateButton(button, willBeOpen);
    } else {
      this.open = true;
      setTimeout(() => {
        this.visible = true;
      }, 10);
      this.animateButton(button, willBeOpen);
    }
  }

  animateButton(button: HTMLElement, willBeOpen: boolean) {
    setTimeout(() => {
      this.menuIcon = willBeOpen ? '✕' : '☰';
      button.style.opacity = '1';
    }, 100);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    if (width >= 768 && this.open) {
      this.open = false;
      this.menuIcon = '☰';
    }
  }

  onFadeEnd() {
    if (!this.visible) {
      this.open = false;
    }
  }
}
