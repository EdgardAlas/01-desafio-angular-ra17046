import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor() {}

  button1 = 'assets/images/icon-menu.svg';
  button2 = 'assets/images/icon-menu-close.svg';
  isOpen = false;

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
}
