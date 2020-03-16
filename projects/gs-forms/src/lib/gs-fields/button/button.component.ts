import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GButton } from './../../gs-forms.widgets';
import { GFieldValueButtonType } from '../../gs-forms.enums';

@Component({
  selector: 'gs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class GsButtonComponent {
  @Input() public button: GButton;
  @Output() hdlAction = new EventEmitter(null);

  public fieldValueButtonType = GFieldValueButtonType;

  public action(action: string) {
    this.hdlAction.emit(action);
  }
}
