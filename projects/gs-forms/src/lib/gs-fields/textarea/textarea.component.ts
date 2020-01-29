import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GTextareaField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';

@Component({
  selector: 'gs-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.sass']
})
export class GsTextareaComponent {
  @Input() public field: GTextareaField;
  @Input() public formGroup: FormGroup;

  public fieldValidatorType = GFieldValidatorType;
}
