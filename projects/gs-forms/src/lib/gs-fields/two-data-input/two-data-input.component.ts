import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GTwoDataInput } from '../../gs-forms.widgets';
import { GFieldValidatorType, GFieldValueType } from '../../gs-forms.enums';
import { RppGenericFieldComponent } from '../_generic-field/_generic-field.component';

// TODO: add error validators
enum TwoDataInputErrors {
  RIGHT_MIN,
  LEFT_MIN,
  REQUIRED
}

@Component({
  selector: 'gs-two-data-input',
  templateUrl: './two-data-input.component.html',
  styleUrls: ['./two-data-input.component.sass']
})
export class GsTwoDataInputComponent extends RppGenericFieldComponent implements OnChanges {
  @Input() public field: GTwoDataInput;

  public leftFieldValue: any;
  public rightFieldValue: any;
  public leftFieldType: any;
  public rightFieldType: any;
  public leftFieldPlaceholder: string;
  public rightFieldPlaceholder: string;
  public valueType = GFieldValueType;
  public fieldValidatorType = GFieldValidatorType;
  public rightFieldTouched = false;
  public leftFieldTouched = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field.currentValue) {
      this.field = changes.field.currentValue;

      if (this.field.config.value) {
        this.leftFieldValue = this.field.config.value.left || null;
        this.rightFieldValue = this.field.config.value.right || null;
      }

      if (this.field.config.options) {
        this.leftFieldType = this.field.config.options.left ? this.field.config.options.left.type || null : null;
        this.rightFieldType = this.field.config.options.right ? this.field.config.options.right.type || null : null;
        this.leftFieldPlaceholder = this.field.config.options.left ? this.field.config.options.left.placeholder || null : null;
        this.rightFieldPlaceholder = this.field.config.options.right ? this.field.config.options.right.placeholder || null : null;
      }
    }
  }

  public setGrid(): object {
    if (!this.field.config.grid) {
      return null;
    }

    const grid = this.field.config.grid[0] + ' max-content ' + this.field.config.grid[1];
    return { 'grid-template-columns': grid };
  }

  public onUpdateValue(right: boolean) {
    if (!this.rightFieldTouched && right) {
      this.rightFieldTouched = true;
    }

    if (!this.leftFieldTouched && !right) {
      this.leftFieldTouched = true;
    }

    const updatedValue = {
      left: this.leftFieldValue,
      right: this.rightFieldValue
    };

    if (updatedValue.left && updatedValue.right) {
      this.formGroup.controls[this.field.config.model].patchValue(updatedValue);
      this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    } else {
      this.formGroup.controls[this.field.config.model].patchValue(null);
    }
  }

  public checkMinMaxValidator(input: string, validator: string) {
    if (this.field.config.options && this.field.config.options[input] && this.field.config.options[input].type) {
      if (this.field.config.options[input].type === this.valueType.NUMBER) {
        if (this.field.config.options[input].validators
          && this.field.config.options[input].validators[this.fieldValidatorType[validator]]) {
          return this.field.config.options[input].validators[this.fieldValidatorType[validator]];
        } else if (this.field.config.validators && this.field.config.validators[this.fieldValidatorType[validator]]) {
          return this.field.config.validators[this.fieldValidatorType[validator]];
        }
      }
    }

    return null;
  }

  public requiredText(right: boolean) {
    return right
      ? this.formsService.getValidationMessage('ERR_REQUIRED_TWO_DATA_RIGHT')
      : this.formsService.getValidationMessage('ERR_REQUIRED_TWO_DATA_LEFT');
  }

  public validateRequired(right: boolean) {
    const input = right ? 'right' : 'left';

    return this.field.config.options[input].validators &&
      this[`${input}FieldTouched`] &&
      this.field.config.options[input].validators.required &&
      !this[`${input}FieldValue`];
  }

}
