import { Component, Input } from '@angular/core';
import { GTextareaField } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.sass']
})
export class GsTextareaComponent  extends GsGenericFieldComponent {
  @Input() public field: GTextareaField;
}
