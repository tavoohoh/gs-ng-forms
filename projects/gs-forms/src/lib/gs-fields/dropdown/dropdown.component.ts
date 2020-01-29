import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GDropdownField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';

@Component({
  selector: 'gs-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class GsDropdownComponent implements OnChanges {
  @Input() public field: GDropdownField;
  @Input() public formGroup: FormGroup;

  public fieldValidatorType = GFieldValidatorType;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field.currentValue.config && !changes.field.currentValue.config.value) {
      this.field.config.value = '';
      this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
      this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    }
  }
}
