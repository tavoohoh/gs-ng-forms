import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GRadioField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';
import { GFieldOptionValues } from '../../gs-forms.models';

@Component({
  selector: 'gs-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.sass']
})
export class GsRadioButtonComponent implements OnChanges {
  @Input() public field: GRadioField;
  @Input() public formGroup: FormGroup;
  @Input() public fieldOption: GFieldOptionValues;

  public fieldValidatorType = GFieldValidatorType;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fieldOption && changes.fieldOption.currentValue) {
      this.fieldOption = changes.fieldOption.currentValue;
    } else {
      this.fieldOption = this.field.config.optionValues;
    }
  }
}
