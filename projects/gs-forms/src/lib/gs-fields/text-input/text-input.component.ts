import { Component, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { GTextField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';
import { GsFormsService } from '../../gs-forms.service';

@Component({
  selector: 'gs-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass']
})
export class GsTextInputComponent {
  @Input() public field: GTextField;
  @Input() public formGroup: FormGroup;

  public fieldValidatorType = GFieldValidatorType;

  constructor(private formsService: GsFormsService) {}

  public validateField(): ValidationErrors {
    return this.formGroup.controls[this.field.config.model].dirty && this.formGroup.controls[this.field.config.model].errors;
  }

  public getFieldError(): string {
    return this.formsService.fieldError(this.formGroup.controls[this.field.config.model]);
  }
}
