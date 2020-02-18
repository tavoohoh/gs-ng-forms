import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GFormFields, GField, GFieldOptionValues } from './gs-forms.models';
import { GFieldValidatorType } from './gs-forms.enums';
import { TranslateService } from '@ngx-translate/core';
import { VALIDATION_MESSAGES } from './gs-forms.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GsFormsService {

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private http: HttpClient
  ) { }

  public buildErrors(validator: string, value: any): Validators {
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
      if (field.config.model && !field.notWidget) {
        this.setDefaultFormObject(field, formObject, field.config.validators ? true : false);
      }
    }

    return this.formBuilder.group(formObject);
  }

  public fieldError(field: any): string {
    const error = field.errors;

    if (error[GFieldValidatorType.MIN]) {
      return this.getValidationMessage('ERR_MIN', error[GFieldValidatorType.MIN].min);

    } else if (error[GFieldValidatorType.MAX]) {
      return this.getValidationMessage('ERR_MAX', error[GFieldValidatorType.MAX].max);

    } else if (error[GFieldValidatorType.REQUIRED]) {
      return this.getValidationMessage('ERR_REQUERID');

    } else if (error[GFieldValidatorType.EMAIL]) {
      return this.getValidationMessage('ERR_EMAIL');

    } else if (error[GFieldValidatorType.MIN_LENGTH]) {
      return this.getValidationMessage('ERR_MIN_LENGTH', error[GFieldValidatorType.MIN_LENGTH].requiredLength);

    } else if (error[GFieldValidatorType.MAX_LENGTH]) {
      return this.getValidationMessage('ERR_MAX_LENGTH', error[GFieldValidatorType.MAX_LENGTH].requiredLength);

    } else if (error[GFieldValidatorType.PATTERN]) {
      return this.getValidationMessage('ERR_PATTERN');

    } else {
      return this.getValidationMessage('DEFAULT');
    }
  }

  private getValidationMessage(key: string, param?: string) {
    let lang = this.translateService.currentLang;

    if (!lang) {
      console.warn(`translateService.currentLang is not set, using default language: 'en'`);
      lang = 'en';
    }

    let messageLang = VALIDATION_MESSAGES.en;

    if (!VALIDATION_MESSAGES[lang]) {
      console.warn(`We don't have support for language ${lang}. Please email us to hi@tavoohoh.com. Using default language: 'en'`);
    } else {
      messageLang = VALIDATION_MESSAGES[lang];
    }

    let message = messageLang[key];

    if (param) {
      message = message.replace('${param}', param);
    }

    return message;
  }

  public getLang(): string {
    return this.translateService.getDefaultLang();
  }

  public uploadFileServices(url: string, method: string, file: File, paramName: string): Observable<Response> {
    const formData = new FormData();
    formData.append(paramName, file);

    return this.http[method](url, formData);
  }

  /**
   * @description
   * Convert an array of values `Array<{[key: string]: any}> | Array<{[key: string]: any, [key: string]: any}>`
   *
   * @param options
   * An array of values
   * @param optionValue
   * The key to be mapped to `GFieldOptionValues` key `value`
   * @param optionText
   * The key to be mapped to `GFieldOptionValues` key `text`
   *
   * @key value
   * The value used in a select option
   * @key text
   * The text used inside of select option
   */
  public mapFieldOptionValues(options: Array<{}>, optionValue: string, optionText: string, ): GFieldOptionValues {
    const mappedValues = options.map(obj => {
      return {
        value: obj[optionValue],
        text: obj[optionText]
      };
    });

    return mappedValues;
  }

  /**
   * @description
   * Patch form values
   *
   * @param formFields your `GFormFields`
   * @param formValues an object of values like `FormGroup` value.
   * The keys of `formValues` most match the model name of your `GFields`
   */
  public patchFormValues(formFields: GFormFields, formValues: {[key: string]: any}): GFormFields {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < formFields.length; i++) {
      if (formValues[formFields[i].config.model]) {
        formFields[i].config.value = formValues[formFields[i].config.model];
      }
    }

    return formFields;
  }


}
