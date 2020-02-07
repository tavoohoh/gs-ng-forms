import { Component, Input, ViewChild, ElementRef } from '@angular/core';
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
  public fieldOption: Array<string> = ['red', 'blue', 'green', 'brown', 'purple'];
  @ViewChild('inputElement', { static: true }) inputElement: ElementRef;

  public fieldValidatorType = GFieldValidatorType;

  public value = '';

  public focusInput() {
    this.inputElement.nativeElement.focus();
  }
}
