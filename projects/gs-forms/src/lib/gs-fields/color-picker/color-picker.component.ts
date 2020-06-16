import { Component, Input } from '@angular/core';
import { GColorPickerField } from '../../gs-forms.widgets';
import { RppGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass']
})
export class GsColorPickerComponent extends RppGenericFieldComponent {
  @Input() public field: GColorPickerField;

  public setColorValue() {
    this.formGroup.controls[this.field.config.model].patchValue(
      this.formGroup.value[this.field.config.model]
    );
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
  }
}
