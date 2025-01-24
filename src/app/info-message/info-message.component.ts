import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-info-message',
  standalone: true,
  imports: [],
  templateUrl: './info-message.component.html',
  styleUrl: './info-message.component.css',
  //onPush strategy (if event or change input value occured inside this (or childs) component, run change detection mechanism):
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoMessageComponent {
  get debugOutput() {
    console.log('[InfoMessages] "debugOutput" binding re-evaluated.');
    return 'InfoMessage Component Debug Output';
  }

  onLog() {
    console.log('Clicked!');
  }
}
