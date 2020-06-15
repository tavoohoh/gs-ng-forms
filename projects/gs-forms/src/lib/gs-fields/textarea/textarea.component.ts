import { Component, Input } from '@angular/core';
import { GTextareaField } from '../../gs-forms.widgets';
import { RppGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.sass']
})
export class GsTextareaComponent  extends RppGenericFieldComponent {
  @Input() public field: GTextareaField;
}
