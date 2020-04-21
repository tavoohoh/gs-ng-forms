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

  public setPresicion(input: { value: string }): void {
    const value = input.value;
    const pointIndex = value.indexOf('.');
    if (pointIndex >= 0) {
      const precision = this.field.config.precision || 3;
      const valueLeft = value.substr(0, pointIndex);
      const valueRight = value.substr(pointIndex, precision);
      input.value = valueLeft + valueRight;
    } else {
      input.value = value;
    }
  }
}
