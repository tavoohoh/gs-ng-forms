import { Component, Input } from '@angular/core';
import { GToggleField } from '../../gs-forms.widgets';
import { RppGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass']
})
export class GsToggleComponent extends RppGenericFieldComponent {
  @Input() public field: GToggleField;
}
