import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MessagesService } from '../messages.service';
//import { AsyncPipe } from '@angular/common';

// triggering change detection mechanism is unnecessary when using signals // 

@Component({
  selector: 'app-messages-list',
  standalone: true,
  // triggering change detection via async pipe:
  // imports: [AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  //onPush strategy (if event or change input value occured inside this (or childs) component, run change detection mechanism):
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit {
  private messagesService = inject(MessagesService);

  messages = this.messagesService.allMessages;

  /////////////// triggering change detection mechanism manually via RxJS:
  private changeDetectionRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.messagesService.messages$.subscribe((messages) => {
      // just for example:
      let tempMessages = signal(messages);
      this.messages = tempMessages;

      this.changeDetectionRef.markForCheck();
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  ///////////////

  /////////////// shorter alternative for example ^ via pipe:
  messages$ = this.messagesService.allMessages;
  ///////////////

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
