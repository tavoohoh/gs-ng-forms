import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GTwoDataInput } from '../../gs-forms.widgets';
import { GFieldValidatorType, GFieldValueType } from '../../gs-forms.enums';

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
}
