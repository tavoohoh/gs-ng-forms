import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GTwoDataInput } from '../../gs-forms.widgets';
import { GFieldValidatorType, GFieldValueType } from '../../gs-forms.enums';

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
export class GsTwoDataInputComponent implements OnChanges {
  @Input() public field: GTwoDataInput;
  @Input() public formGroup: FormGroup;

  public leftFieldValue: any;
  public rightFieldValue: any;
  public leftFieldType: any;
  public rightFieldType: any;
  public valueType = GFieldValueType;
  public fieldValidatorType = GFieldValidatorType;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field.currentValue) {
      this.field = changes.field.currentValue;
      this.leftFieldValue = this.field.config.value.left || null;
      this.rightFieldValue = this.field.config.value.right || null;
      this.leftFieldType = this.field.config.options.left.type || null;
      this.rightFieldType = this.field.config.options.right.type || null;
    }
  }

  public setGrid(): object {
    if (!this.field.config.grid) {
      return null;
    }

    const grid = this.field.config.grid[0] + ' max-content ' + this.field.config.grid[1];
    return { 'grid-template-columns': grid };
  }

  public onUpdateValue() {
    const updatedValue = {
      left: this.leftFieldValue,
      right: this.rightFieldValue
    };

    this.formGroup.controls[this.field.config.model].patchValue(updatedValue);
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();

    // TODO: add error validators
    // this.formGroup.controls[this.field.config.model].setErrors({invalid: true});
  }

  public checkMinMaxValidator(input: string, validator: string) {
    if (this.field.config.options[input].type === this.valueType.NUMBER) {
      if (this.field.config.options[input].validators && this.field.config.options[input].validators[this.fieldValidatorType[validator]]) {
        return this.field.config.options[input].validators[this.fieldValidatorType[validator]];
      } else if (this.field.config.validators && this.field.config.validators[this.fieldValidatorType[validator]]) {
        return this.field.config.validators[this.fieldValidatorType[validator]];
      }
    }

    return null;
  }
}
