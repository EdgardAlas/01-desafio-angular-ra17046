import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  button1 = 'assets/images/icon-menu.svg';
  button2 = 'assets/images/icon-menu-close.svg';
  isOpen = false;

  constructor(private makeRender: ChangeDetectorRef) {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    mediaQuery.addEventListener('change', () => {
      this.isOpen = false;
      this.makeRender.detectChanges();
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
}
