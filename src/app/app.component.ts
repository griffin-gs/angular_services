import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AccountComponent} from "./account/account.component";
import {NgForOf} from "@angular/common";
import {NewAccountComponent} from "./new-account/new-account.component";
import {AccountsService} from "./service/accounts.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccountComponent, NgForOf, NewAccountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'services';
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accountsService.addAccount(newAccount.name, newAccount.status);
  // }
  //
  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
