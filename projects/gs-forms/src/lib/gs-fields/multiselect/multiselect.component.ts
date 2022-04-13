import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GDropdownField } from '../../gs-forms.widgets';
import { GFieldOptionValues, GFieldExistsOptionValues, GFieldOptionValueExists, GFieldOptionValue } from '../../gs-forms.models';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.sass']
})
export class GsMultiselectComponent extends GsGenericFieldComponent implements OnChanges {
  @Input() public field: GDropdownField;
  @Input() public fieldOption: GFieldOptionValues;

  public options: GFieldExistsOptionValues = [];
  public noSelection = true;
  public touched = false;
  public showMultiselectOptions = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fieldOption && changes.fieldOption.currentValue) {
      this.fieldOption = changes.fieldOption.currentValue;
    } else {
      this.fieldOption = this.field.config.optionValues;
    }

    this.options = this.fieldOption;

    if (changes.field && changes.field.currentValue.config.value) {
      const currentValues = changes.field.currentValue.config.value;
      currentValues.forEach((option: GFieldOptionValue) => {
        this.toggleOption(option, false);
      });
    }
  }

  public toggleOption(option: GFieldOptionValueExists, touched = true) {
    const selectedOptions: GFieldOptionValues = [];
    this.noSelection = true;
    this.touched = touched;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].value === option.value) {
        this.options[i].exists = !option.exists;
      }

      if (this.options[i].exists === true) {
        this.noSelection = false;

        selectedOptions.push({
          text: this.options[i].text,
          value: this.options[i].value
        });

        this.formGroup.controls[this.field.config.model].patchValue(selectedOptions);
        this.formGroup.controls[this.field.config.model].updateValueAndValidity();
      }
    }
  }

  public toggleMultiselectOptions(value = !this.showMultiselectOptions) {
    this.showMultiselectOptions = value;
  }

  public requiredText() {
    return this.formsService.getValidationMessage('ERR_REQUIRED');
  }

}
