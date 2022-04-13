import { Component, Input } from '@angular/core';
import { GPasswordField } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';

@Component({
  selector: 'gs-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.sass']
})
export class GsPasswordInputComponent extends GsGenericFieldComponent {
  @Input() public field: GPasswordField;

  public toggle: boolean;

  public toggleInputType() {
    this.toggle = !this.toggle;
  }
}
