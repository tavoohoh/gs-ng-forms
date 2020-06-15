import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GDropdownField } from '../../gs-forms.widgets';
import { GFieldOptionValues } from '../../gs-forms.models';
import { RppGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class GsDropdownComponent extends RppGenericFieldComponent implements OnChanges {
  @Input() public field: GDropdownField;
  @Input() public fieldOption: GFieldOptionValues;

  public dropdownTextValue: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fieldOption && changes.fieldOption.currentValue) {
      this.fieldOption = changes.fieldOption.currentValue;
    } else {
      this.fieldOption = this.field.config.optionValues;
    }

    if (changes.field && changes.field.currentValue.config && !changes.field.currentValue.config.value) {
      this.field.config.value = null;
      this.dropdownTextValue = this.field.config.placeholder || this.field.config.label || this.field.config.model;
    } else if (changes.field && changes.field.currentValue.config && changes.field.currentValue.config.value) { // if changes has a value
      this.field.config.value = changes.field.currentValue.config.value;
      this.dropdownTextValue = this.setDropdownValue();
    }

    this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
  }

  public changeValue(text: string, value: string) {
    this.dropdownTextValue = text;
    this.field.config.value = value;
    this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
  }

  private setDropdownValue(): string {
    const option = this.fieldOption.find(elem => elem.value === this.field.config.value);
    return option && option.text ? option.text :
      this.field.config.placeholder || this.field.config.label || this.field.config.model;
  }

}
