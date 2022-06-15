import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: BackendErrorsInterface | null;
  errorMessages: string[] = [];

  ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues() {
    if (this.backendErrorsProps) {
      this.errorMessages = Object.keys(this.backendErrorsProps).map((name) => {
        const messages = this.backendErrorsProps![name].join(', ');

        return `${name} ${messages}`;
      });
    }
  }
}
