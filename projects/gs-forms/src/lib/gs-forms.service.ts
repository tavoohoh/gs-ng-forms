import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GFormFields, GField } from './gs-forms.models';
import { GFieldValidatorType } from './gs-forms.enums';

@Injectable({
  providedIn: 'root'
})
export class GsFormsService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  private buildErrors(validator: string, value: any): Validators {
    switch (validator) {
      case GFieldValidatorType.MIN:
        return Validators.min(value);

      case GFieldValidatorType.MAX:
        return Validators.max(value);

      case GFieldValidatorType.REQUIRED:
        return Validators.required;

      case GFieldValidatorType.EMAIL:
        return Validators.email;

      case GFieldValidatorType.MIN_LENGTH:
        return Validators.minLength(value);

      case GFieldValidatorType.MAX_LENGTH:
        return Validators.maxLength(value);

      case GFieldValidatorType.PATTERN:
        return Validators.pattern(value);
    }
  }

  private setDefaultFormObject(field: GField, formObject: object, hasValidators: boolean): object {
    formObject[field.config.model] = [];
    formObject[field.config.model].push({
      value: field.config.value,
      disabled: false
    });

    const validators = [];
    const fields = field.config.validators;

    for (const validator in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, validator) && fields[validator]) {
        validators.push(this.buildErrors(validator, fields[validator]));
      }
    }

    formObject[field.config.model].push(Validators.compose(validators));
    return formObject;
  }

  public buildForm(formField: GFormFields): FormGroup {
    const formObject = new Object();

    for (const field of formField) {
      if (field.config.model) {
        this.setDefaultFormObject(field, formObject, field.config.validators ? true : false);
      }
    }

    return this.formBuilder.group(formObject);
  }

  public fieldError(field: any): string {
    const error = field.errors;

    if (error[GFieldValidatorType.MIN]) {
      return `The value must be greater than or equal to ${error[GFieldValidatorType.MIN].min}`;
    } else if (error[GFieldValidatorType.MAX]) {
      return `The value must be less than or equal to ${error[GFieldValidatorType.MAX].max}`;
    } else if (error[GFieldValidatorType.REQUIRED]) {
      return 'This field is required';
    } else if (error[GFieldValidatorType.EMAIL]) {
      return 'The email must have a valid format';
    } else if (error[GFieldValidatorType.MIN_LENGTH]) {
      return `The value must be at least ${error[GFieldValidatorType.MIN_LENGTH].requiredLength} characters`;
    } else if (error[GFieldValidatorType.MAX_LENGTH]) {
      return `The value must have a maximum of ${error[GFieldValidatorType.MAX_LENGTH].requiredLength} characters`;
    } else if (error[GFieldValidatorType.PATTERN]) {
      return 'The value format is not correct';
    } else {
      return 'This field has an unknow error';
    }
  }

}
