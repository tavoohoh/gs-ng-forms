import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GFieldValueButtonType } from './../../gs-forms.enums';
import { GButton } from './../../gs-forms.widgets';
import { GsFormsService } from './../../gs-forms.service';

@Component({
  selector: 'gs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class GsButtonComponent {
  @Input() public button: GButton;

  constructor(private gsFormService: GsFormsService) { }

  public action(action: string) {
    switch (action) {
      case GFieldValueButtonType.SAVE:
        this.gsFormService.submitForm();
        break;
      case GFieldValueButtonType.RESET:
        this.gsFormService.resetForm();
        break;
    }

  }
}
