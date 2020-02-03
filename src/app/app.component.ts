import { Component, OnInit } from '@angular/core';

import {
  GFormFields,
  GTextField,
  GFieldValidatorType,
  GNumberField,
  GToggleField,
  GRadioField,
  GTextareaField,
  GPasswordField,
  GDropdownField,
  GCurrencyField,
  GFieldCountryCode,
  GPhoneField,
  GCheckboxField,
  GDatePickerField,
  GFormOptions,
  GTaxDocumentTypeField
} from 'projects/gs-forms/src/public-api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public formOptions: GFormOptions = {
    onErrorDisableSubmit: false,
    layout: {
      columns: 'repeat(5, 1fr)',
      innerPadding: '6px'
    },
    context: {
      saveButton: {
        text: 'Save',
        show: true
      }
    }
  };

  public formFields: GFormFields = [
    // text input
    new GTextField({
      model: 'text',
      label: 'TEXT',
      placeholder: 'TEXT_INPUT',
      value: 'Hello text input',
      validators: {
        [GFieldValidatorType.MIN_LENGTH]: 2,
        [GFieldValidatorType.MAX_LENGTH]: 30,
        [GFieldValidatorType.REQUIRED]: true
      },
    }),

    // textarea input
    new GTextareaField({
      model: 'textarea',
      label: 'Textarea',
      placeholder: 'Textarea input',
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      },
    }),

    // password input
    new GPasswordField({
      model: 'password',
      label: 'Passoword',
      placeholder: 'Password input',
      validators: {
        [GFieldValidatorType.REQUIRED]: true,
        [GFieldValidatorType.MIN_LENGTH]: 8,
        [GFieldValidatorType.MAX_LENGTH]: 30,
      },
    }),

    // email input
    new GTextField({
      model: 'email',
      label: 'Email Address',
      placeholder: 'What is your email address?',
      validators: {
        [GFieldValidatorType.EMAIL]: true,
        [GFieldValidatorType.REQUIRED]: true
      },
    }),

    // numberic input
    new GNumberField({
      model: 'age',
      label: 'Age',
      placeholder: 'What is your age?',
      value: 22,
      validators: {
        [GFieldValidatorType.MIN]: 18,
        [GFieldValidatorType.MAX]: 50,
        [GFieldValidatorType.REQUIRED]: true
      }
    }),

    // datepicker input
    new GDatePickerField({
      model: 'datepicker',
      label: 'Date Picker',
      placeholder: 'datepicker',
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      },
      value: '1992-09-15'
    }),

    // toggle input
    new GToggleField({
      model: 'toggle',
      label: 'Toggle',
      value: true,
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      }
    }),

    // checkbox input
    new GCheckboxField({
      model: 'checkbox',
      label: 'Checkbox',
      value: 'red',
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      },
      optionValues: [
        {
          value: 'blue',
          text: 'blue'
        },
        {
          value: 'yellow',
          text: 'yellow'
        },
        {
          value: 'red',
          text: 'red'
        }
      ]
    }),

    // radio input
    new GRadioField({
      model: 'radio',
      label: 'Radio',
      value: 'blue',
      placeholder: 'Radio placeholder',
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      },
      optionValues: [
        {
          value: 'blue',
          text: 'blue'
        },
        {
          value: 'yellow',
          text: 'yellow'
        },
        {
          value: 'red',
          text: 'red'
        }
      ]
    }),

    // dropdown input
    new GDropdownField({
      model: 'dropdown',
      label: 'Dropdown',
      // value: 'red',
      placeholder: 'Dropdown placeholder',
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      },
      optionValues: [
        {
          value: 'blue',
          text: 'Blue'
        },
        {
          value: 'red',
          text: 'Red'
        },
        {
          value: 'yellow',
          text: 'Yellow'
        }
      ]
    }),

    // currency input
    new GCurrencyField({
      model: 'currency',
      label: 'Currency',
      value: 302300,
      placeholder: 'Currency',
      validators: {
        [GFieldValidatorType.MIN]: 100000,
        [GFieldValidatorType.MAX]: 500000,
        [GFieldValidatorType.REQUIRED]: true
      }
    }),

    // phone input
    new GPhoneField({
      model: 'phone',
      label: 'Phone',
      placeholder: 'Phone',
      validators: {
        [GFieldValidatorType.REQUIRED]: false
      },
      country: GFieldCountryCode.UY,
      editCountry: true
    }),

    // tax type
    new GTaxDocumentTypeField({
      model: 'taxType',
      label: 'Tax type',
      placeholder: 'Tax type placeholder',
      validators: {
        [GFieldValidatorType.REQUIRED]: false
      },
      country: GFieldCountryCode.BR
    }),

  ];

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  public onSubmit(form: any) {
    console.log('form', form);
  }
}
