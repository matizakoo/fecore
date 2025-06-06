import {Component, HostListener} from '@angular/core';
import {AnimationOptions} from "ngx-lottie";

@Component({
  standalone: true,
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../../../styles.css']
})
export class NavComponent {
  open = false;
  menuIcon = '☰';
  visible = false;

  options: AnimationOptions = {
    path: '/assets/x_button.json',
    autoplay: true,
    loop: true
  }

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

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open) {
      this.visible = false;
      this.menuIcon = '☰';
    }
  }

  onFadeEnd() {
    if (!this.visible) {
      this.open = false;
    }
  }

}
