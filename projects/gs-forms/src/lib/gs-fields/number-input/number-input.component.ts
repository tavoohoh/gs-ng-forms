import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GNumberField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';

@Component({
  selector: 'gs-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.sass']
})
export class GsNumberInputComponent {
  @Input() public field: GNumberField;
  @Input() public formGroup: FormGroup;

  public fieldValidatorType = GFieldValidatorType;
}
