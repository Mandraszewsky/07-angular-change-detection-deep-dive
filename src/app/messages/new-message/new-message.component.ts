import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  //onPush strategy (if event or change input value occured inside this (or childs) component, run change detection mechanism):
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMessageComponent {
  private messagesService = inject(MessagesService);

  enteredText = signal('');

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    this.messagesService.addMessage(this.enteredText());
    this.enteredText.set('');
  }
}
