import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { GRadioField } from '../../gs-forms.widgets';
import { GFieldOptionValues } from '../../gs-forms.models';
import { RppGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.sass']
})
export class GsRadioButtonComponent extends RppGenericFieldComponent implements OnChanges {
  @Input() public field: GRadioField;
  @Input() public fieldOption: GFieldOptionValues;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fieldOption && changes.fieldOption.currentValue) {
      this.fieldOption = changes.fieldOption.currentValue;
    } else {
      this.fieldOption = this.field.config.optionValues;
    }
  }
}
