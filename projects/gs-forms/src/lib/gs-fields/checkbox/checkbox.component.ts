import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GCheckboxField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';

@Component({
  selector: 'gs-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass']
})
export class GsCheckboxComponent {
  @Input() public field: GCheckboxField;
  @Input() public formGroup: FormGroup;

  public fieldValidatorType = GFieldValidatorType;
}
