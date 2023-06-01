import { Component } from '@angular/core';
import { AccountService } from '../../../_services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogged: boolean = false;

  constructor(private accountService: AccountService) {
    this.isLogged = this.accountService.userValue !== null;
    this.accountService.user.subscribe(user => {
      this.isLogged = user !== null;
    });
  }

  get auth() {
    return this.accountService.userValue?.username;
  }

  logout() {
    this.accountService.logout();
  }
}
