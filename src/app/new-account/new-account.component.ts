import { Component } from '@angular/core';
import { AccountServiceService } from '../services/account-service.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, 
            private accountsService: AccountServiceService){
              this.accountsService.statusUpdated.subscribe(
                (status: string) => alert('New Status: ' + status)
              )
            }
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccoount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus)

  }
}