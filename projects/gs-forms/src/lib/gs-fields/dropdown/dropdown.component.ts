import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GDropdownField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';
import { GFieldOptionValues } from '../../gs-forms.models';

@Component({
  selector: 'gs-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class GsDropdownComponent implements OnChanges {
  @Input() public field: GDropdownField;
  @Input() public formGroup: FormGroup;
  @Input() public fieldOption: GFieldOptionValues;
  @Input() public rppStyles: boolean;

  public fieldValidatorType = GFieldValidatorType;

  // rpp-variables
  displayOptions: boolean;
  inputValue = '';
  placeholder = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field && changes.field.currentValue.config && !changes.field.currentValue.config.value) {
      this.field.config.value = '';

      if (this.rppStyles) {
        this.inputValue = this.field.config.value;
        this.placeholder = this.field.config.placeholder || this.field.config.label || this.field.config.model;
      }

      this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
      this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    }

    if (changes.fieldOption && changes.fieldOption.currentValue) {
      this.fieldOption = changes.fieldOption.currentValue;
    } else {
      this.fieldOption = this.field.config.optionValues;
    }
  }

  public deploySelect(toggleValue: boolean) {
    this.displayOptions = toggleValue;
  }

  public changeValue(value: string) {
    this.inputValue = value.toString();
    this.field.config.value = this.inputValue;
    this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    this.deploySelect(false);
  }
}
