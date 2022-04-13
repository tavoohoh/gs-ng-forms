import { Component, Input } from '@angular/core';
import { GToggleField } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass']
})
export class GsToggleComponent extends GsGenericFieldComponent {
  @Input() public field: GToggleField;
}
