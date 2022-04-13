import { Component, Input } from '@angular/core';
import { GColorPickerField } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass']
})
export class GsColorPickerComponent extends GsGenericFieldComponent {
  @Input() public field: GColorPickerField;

  public setColorValue() {
    this.formGroup.controls[this.field.config.model].patchValue(
      this.formGroup.value[this.field.config.model]
    );
    this.formGroup.controls[this.field.config.model].updateValueAndValidity();
  }
}
