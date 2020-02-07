import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GSeparatedByComma } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';
import { GFieldOptionValues } from '../../gs-forms.models';

@Component({
  selector: 'gs-separated-by-comma',
  templateUrl: './separated-by-comma.component.html',
  styleUrls: ['./separated-by-comma.component.sass']
})
export class GsSeparatedByCommaComponent {
  @Input() public field: GSeparatedByComma;
  @Input() public formGroup: FormGroup;
  @Input() public fieldOption: GFieldOptionValues;

  public fieldValidatorType = GFieldValidatorType;
}
