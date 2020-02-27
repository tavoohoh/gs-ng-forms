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
  GTaxDocumentTypeField,
  GFieldFile,
  GSeparatedByComma,
  GDivider,
  GTwoDataInput,
  GFieldValueType,
  GMultiselectField
} from 'projects/gs-forms/src/public-api';
import { TranslateService } from '@ngx-translate/core';
import { GsFormsService } from 'projects/gs-forms/src/public-api';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private toMapOptions = [
    {
      value: true,
      key: 'true'
    },
    {
      value: false,
      key: 'false'
    }
  ];

  public formOptions: GFormOptions = {
    onErrorDisableSubmit: false,
    country: GFieldCountryCode.BO,
    fieldValues: {
      dropdown: [
        {
          value: 'hola',
          text: 'hola'
        },
        {
          value: 'chao',
          text: 'chao'
        }
      ]
    },
    layout: {
      columns: 'repeat(3, 1fr)',
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
    // divider
    new GDivider({
      seccionName: 'Section',
      hideLine: false,
      padding: '1rem 0',
      model: null,
      dividerColor: '#e3bec4',
      gridColumn: '1 / 4'
    }),

    // text input
    new GTextField({
      model: 'text',
      label: 'TEXT',
      placeholder: 'TEXT_INPUT',
      value: 'Hello text input',
      validators: {
        [GFieldValidatorType.MIN_LENGTH]: 2,
        [GFieldValidatorType.MAX_LENGTH]: 30
      },
    }),

    // separated by comma
    new GSeparatedByComma({
      model: 'comma',
      label: 'Separated by comma',
      placeholder: 'separated by comma placeholder',
      value: 'red, blue'
    }),

    // textarea input
    new GTextareaField({
      model: 'textarea',
      label: 'Textarea',
      placeholder: 'Textarea input'
    }),

    // password input
    new GPasswordField({
      model: 'Password',
      label: 'Password',
      placeholder: 'Password input',
      validators: {
        [GFieldValidatorType.MIN_LENGTH]: 8,
        [GFieldValidatorType.MAX_LENGTH]: 30,
      },
      autocomplete: 'false',
    }),

    // email input
    new GTextField({
      model: 'email',
      label: 'Email Address',
      placeholder: 'What is your email address?',
      validators: {
        [GFieldValidatorType.EMAIL]: true
      },
    }),

    // numberic input
    new GNumberField({
      model: 'age',
      label: 'Age',
      placeholder: 'What is your age?',
      validators: {
        [GFieldValidatorType.REQUIRED]: true,
        [GFieldValidatorType.MAX]: 100,
        [GFieldValidatorType.MIN]: 0
      }
    }),

    // two data input
    new GTwoDataInput({
      model: 'twoDataInput',
      label: 'Two data input',
      divider: '-',
      grid: [
        'auto',
        '24px'
      ],
      options: {
        left: {
          type: GFieldValueType.STRING,
          validators: {
            [GFieldValidatorType.REQUIRED]: true
          },
          placeholder: 'left value'
        },
        right: {
          type: GFieldValueType.NUMBER,
          validators: {
            [GFieldValidatorType.REQUIRED]: true,
            [GFieldValidatorType.MAX]: 9
          },
          placeholder: '0'
        }
      }
    }),

    // datepicker input
    new GDatePickerField({
      model: 'datepicker',
      label: 'Date Picker',
      placeholder: 'datepicker',
      value: '1992-09-15'
    }),

    // toggle input
    new GToggleField({
      model: 'toggle',
      label: 'Toggle',
      value: true,
      displayIf: {
        model: 'showHideDropdown',
        hasValue: 'show'
      },
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      },
    }),

    // multiselect field
    new GMultiselectField({
      model: 'multiselect',
      label: 'Multiselect',
      placeholder: 'Multiselect placeholder',
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      },
      // value: [
      //   {
      //     value: 'bogota',
      //     text: 'Bogotá'
      //   },
      //   {
      //     value: 'santa_marta',
      //     text: 'Santa Marta'
      //   },
      // ],
      externalOptions: true,
      optionValues: [
        {
          value: 'bogota',
          text: 'Bogotá'
        },
        {
          value: 'cali',
          text: 'Calí'
        },
        {
          value: 'cartagena',
          text: 'Cartagena'
        },
        {
          value: 'barranquilla',
          text: 'Barranquilla'
        },
        {
          value: 'santa_marta',
          text: 'Santa Marta'
        },
        {
          value: 'bucaramanga',
          text: 'Bucaramanga'
        }
      ]
    }),

    // checkbox input
    new GCheckboxField({
      model: 'checkbox',
      label: 'Checkbox',
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
      placeholder: 'Radio placeholder',
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

    // file input
    new GFieldFile({
      model: 'file',
      label: 'File type',
      placeholder: 'Click to upload file',
      validators: {
        [GFieldValidatorType.REQUIRED]: false
      },
      api: {
        url: 'http://www.googleapis.com/upload/drive/v2/files?uploadType=multipart',
        method: 'post',
        fileParamName: 'file'
      },
      accept: '.jpg, .jpeg, .png',
    }),

    // dropdown input
    new GDropdownField({
      model: 'dropdown',
      label: 'Dropdown',
      placeholder: 'Dropdown placeholder',
      externalOptions: true,
      optionValues: [
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

    // Show/hide dropdown
    new GDropdownField({
      model: 'showHideDropdown',
      label: 'Show or hide the dynamic field',
      placeholder: 'Dropdown placeholder',
      optionValues: [
        {
          value: 'show',
          text: 'Show dynamic input'
        },
        {
          value: 'hide',
          text: 'Hide dynamic input'
        }
      ]
    }),

    // divider
    new GDivider({
      seccionName: 'Select one option',
      hideLine: false,
      padding: '1rem 0',
      model: null,
      dividerColor: '#e3bec4',
      gridColumn: '1 / 4',
      displayIf: {
        model: 'showHideDropdown',
        hasValue: 'show'
      },
    }),

    // dynamic input
    new GTextField({
      model: 'dynamicInput',
      label: 'Dinamic input',
      displayIf: {
        model: 'showHideDropdown',
        hasValue: 'show'
      },
      validators: {
        [GFieldValidatorType.REQUIRED]: true,
        [GFieldValidatorType.MIN_LENGTH]: 3
      }
    }),

    // currency input
    // TODO (Gustavo): when default value does not include decimal and de formatter requires it, add decimals automatic
    new GCurrencyField({
      model: 'currency',
      label: 'Currency',
      value: 30230000,
      placeholder: 'Currency',
      validators: {
        [GFieldValidatorType.MIN]: 100000,
        [GFieldValidatorType.MAX]: 500000
      }
    }),

    // phone input
    new GPhoneField({
      model: 'phone',
      label: 'Phone',
      placeholder: 'Phone',
      country: GFieldCountryCode.CO,
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      },
      editCountry: true
    }),

    // tax type
    new GTaxDocumentTypeField({
      model: 'taxType',
      label: 'Tax type',
      placeholder: 'Tax type placeholder',
      country: GFieldCountryCode.BR
    }),

  ];


  constructor(
    private translate: TranslateService,
    private gsFormService: GsFormsService
  ) { }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    // map an array of values to a valid form field option values
    const mappedValues = this.gsFormService.mapFieldOptionValues(this.toMapOptions, 'value', 'key');

    // update fields values
    this.formOptions.fieldValues = {
      ...this.formOptions.fieldValues,
      dropdown: [
        {
          value: 'hola',
          text: 'hola'
        },
        {
          value: 'chao',
          text: 'chao'
        }
      ]
    };

    // patch values
    const toPatchValues = {
      email: 'email@patched.com',
      age: 40,
      datepicker: '1992-09-30',
      // multiselect: [
      //   {
      //     value: 'bogota',
      //     text: 'Bogotá'
      //   }
      // ]
    };
    this.formFields = this.gsFormService.patchFormValues(this.formFields, toPatchValues);
  }

  public onSubmit(form: any) {
    console.log('form', form);
    console.warn('form values', form.value);
  }

  public onFormChange(form: FormGroup) {
    // console.log(form);
  }
}
