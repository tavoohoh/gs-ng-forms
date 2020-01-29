import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GToggleField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';

@Component({
  selector: 'gs-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass']
})
export class GsToggleComponent {
  @Input() public field: GToggleField;
  @Input() public formGroup: FormGroup;

  public fieldValidatorType = GFieldValidatorType;
}
