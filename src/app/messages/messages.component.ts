import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [MessagesListComponent, NewMessageComponent],
  //onPush strategy (if event or change input value occured inside this (or childs) component, run change detection mechanism):
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent {

  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }
}
