import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GRadioField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';

@Component({
  selector: 'gs-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.sass']
})
export class GsRadioButtonComponent {
  @Input() public field: GRadioField;
  @Input() public formGroup: FormGroup;

  public fieldValidatorType = GFieldValidatorType;
}
