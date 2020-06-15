import { Component, Input } from '@angular/core';
import { GTextField } from '../../gs-forms.widgets';
import { RppGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass']
})
export class GsTextInputComponent extends RppGenericFieldComponent {
  @Input() public field: GTextField;
}
