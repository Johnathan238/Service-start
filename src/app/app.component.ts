import { Component } from '@angular/core';
import { AccountServiceService } from './services/account-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountServiceService]
})
export class AppComponent {
  accounts: {name: string, status: string}[] = []

  constructor(private accountsService: AccountServiceService){}

  ngOnInit(){
    this.accounts = this.accountsService.accounts
  }
}
