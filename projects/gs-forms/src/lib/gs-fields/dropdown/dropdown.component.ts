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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fieldOption && changes.fieldOption.currentValue) {
      this.fieldOption = changes.fieldOption.currentValue;
      this.updateInputRpp();
    } else {
      this.fieldOption = this.field.config.optionValues;
    }

    if (changes.field && changes.field.currentValue.config && !changes.field.currentValue.config.value) {
      this.field.config.value = '';
      this.inputValue = this.field.config.placeholder || this.field.config.label || this.field.config.model;
    } else if (changes.field && changes.field.currentValue.config && changes.field.currentValue.config.value) { // if changes has a value
      this.field.config.value = changes.field.currentValue.config.value;
      this.updateInputRpp();
    }

    this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
  }

  public deploySelect(toggleValue: boolean) {
    this.displayOptions = toggleValue;
  }

  public changeValue(text: string, value: string) {
    this.inputValue = text;
    this.field.config.value = value;
    this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    this.deploySelect(false);
  }

  private updateInputRpp() {
    if (this.rppStyles) {
      const option = this.fieldOption.find(elem => elem.value === this.field.config.value);
      this.inputValue = option && option.text ? option.text :
        this.field.config.placeholder || this.field.config.label || this.field.config.model;
    }
  }
}
