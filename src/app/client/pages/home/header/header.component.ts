import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class Header {
  showDiv: boolean = false;

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const isMenuButton = target.classList.contains('menu');
    const isOverlay = target.closest('.overlay');

    if (!isMenuButton && !isOverlay) {
      this.showDiv = false;
    }
  }
}