import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GTextField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';

@Component({
  selector: 'gs-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass']
})
export class GsTextInputComponent {
  @Input() public field: GTextField;
  @Input() public formGroup: FormGroup;

  public fieldValidatorType = GFieldValidatorType;
}
