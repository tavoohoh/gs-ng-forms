import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GCheckboxField } from '../../gs-forms.widgets';
import { RppGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass']
})
export class GsCheckboxComponent extends RppGenericFieldComponent implements OnChanges {
  @Input() public field: GCheckboxField;

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.field && changes.field.currentValue) {
      this.field = changes.field.currentValue;
    }
  }
}
