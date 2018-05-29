import { Component, Input } from '@angular/core';
import { AppService } from './app.service';

const LOGIN = 'Login';
const LOGOUT = 'Logout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  constructor(public appService: AppService) {

  }
  showLog() {
    console.log('pre' + this.appService.isLoggedIn());
    if (this.appService.isLoggedIn()) {
      this.appService.logout();
    }
  }
}

