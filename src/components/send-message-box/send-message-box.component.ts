import {Component, EventEmitter, Output} from '@angular/core';

/**
 * Generated class for the SendMessageBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-send-message-box',
  templateUrl: 'send-message-box.component.html'
})
export class SendMessageBoxComponent {

  @Output() sendMessage = new EventEmitter<string>();
  content: string;

  constructor() {
  }

  send() {
    this.sendMessage.emit(this.content);
    this.content = "";
  }

}
