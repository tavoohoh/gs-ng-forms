import { Component, Input } from '@angular/core';
import { GsFormsService } from '../../gs-forms.service';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { GFieldValidatorType } from '../../gs-forms.enums';

@Component({
  template: ``
})
export class RppGenericFieldComponent {
  @Input() public field: any;
  @Input() public formGroup: FormGroup;

  public fieldValidatorType = GFieldValidatorType;

  constructor(
    public formsService: GsFormsService
  ) { }

  public validateField(): ValidationErrors {
    return this.formGroup.controls[this.field.config.model].dirty && this.formGroup.controls[this.field.config.model].errors;
  }

  public getFieldError(): string {
    return this.formsService.fieldError(this.formGroup.controls[this.field.config.model]);
  }
}
