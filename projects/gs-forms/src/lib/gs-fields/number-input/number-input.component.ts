import { Component, Input } from '@angular/core';
import { GNumberField } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.sass']
})
export class GsNumberInputComponent extends GsGenericFieldComponent {
  @Input() public field: GNumberField;

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
