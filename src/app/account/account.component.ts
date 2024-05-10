import {Component, Input} from '@angular/core';
import {LoggingService} from "../service/logging.service";
import {AccountsService} from "../service/accounts.service";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
