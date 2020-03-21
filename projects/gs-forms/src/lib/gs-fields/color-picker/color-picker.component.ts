import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GColorPickerField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';

@Component({
  selector: 'gs-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass']
})
export class GsColorPickerComponent {
  @Input() public field: GColorPickerField;
  @Input() public formGroup: FormGroup;

  public fieldValidatorType = GFieldValidatorType;

  public setColorValue() {
    console.log(this.formGroup.value[this.field.config.model]);
    this.formGroup.controls[this.field.config.model].patchValue(
      this.formGroup.value[this.field.config.model]
    );
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
  }
}
