import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'physioNord';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.closeMenu();
      }
    });
  }

  closeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
      const input = menuToggle.querySelector('input[type="checkbox"]') as HTMLInputElement;
      if (input) {
        input.checked = false;
      }
    }
  }
}
