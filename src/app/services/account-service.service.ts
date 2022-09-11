import { Injectable } from '@angular/core';

@Injectable()
export class AccountServiceService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  
  addAccoount(name: string, status: string){
    this.accounts.push({name: name, status: status});
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
  }
}