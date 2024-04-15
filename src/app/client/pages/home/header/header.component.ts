import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menuAnimation', [
      state('open', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('closed', style({
        opacity: 1,
        transform: 'translateX(-100%)'
      })),
      transition('open <=> closed', [
        animate('0.5s')
      ])
    ])
 ]
})

export class Header {
  menuState: string = 'closed';

  toggleMenu() {
    this.menuState = this.menuState === 'open' ? 'closed' : 'open';
    // Define a propriedade overflow do body com base no estado do menu
    document.body.style.overflow = this.menuState === 'open' ? 'hidden' : '';
  }
}
