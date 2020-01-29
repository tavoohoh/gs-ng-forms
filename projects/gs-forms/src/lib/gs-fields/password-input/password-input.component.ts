import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GPasswordField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';

@Component({
  selector: 'gs-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.sass']
})
export class GsPasswordInputComponent {
  @Input() public field: GPasswordField;
  @Input() public formGroup: FormGroup;

  public toggle: boolean;
  public fieldValidatorType = GFieldValidatorType;

  public toggleInputType() {
    this.toggle = !this.toggle;
  }
}
