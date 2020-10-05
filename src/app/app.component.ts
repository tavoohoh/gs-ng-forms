import { GButton, GColorPickerField, GShowData, GMapField } from './../../projects/gs-forms/src/lib/gs-forms.widgets';
import { Component, OnInit, ViewChild } from '@angular/core';

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
  GFieldFile,
  GSeparatedByComma,
  GDivider,
  GTwoDataInput,
  GFieldValueType,
  GMultiselectField,
  GFieldValueButtonType,
  GTimeField
} from 'projects/gs-forms/src/public-api';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { GsFormsService } from 'projects/gs-forms/src/public-api';
import { RppFormComponent } from 'projects/gs-forms/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(RppFormComponent, { static: false }) rppFormComponent: RppFormComponent;

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
    onErrorDisableSubmit: true,
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
    // Text widget
    new GTextField({
      model: 'text',
      label: 'Text widget',
      placeholder: 'Text widget',
      validators: {
        [GFieldValidatorType.MIN_LENGTH]: 2,
        [GFieldValidatorType.MAX_LENGTH]: 30,
        [GFieldValidatorType.REQUIRED]: true
      },
    }),
    // Text widget
    new GTextField({
      model: 'text1',
      label: 'Text widget with symbol',
      placeholder: 'Text widget',
      symbol: '%',
      validators: {
        [GFieldValidatorType.MIN_LENGTH]: 2,
        [GFieldValidatorType.MAX_LENGTH]: 30,
        [GFieldValidatorType.REQUIRED]: true
      },
    }),
    // Email input (text widget)
    new GTextField({
      model: 'email',
      label: 'Email widget',
      placeholder: 'Is a text widget',
      validators: {
        [GFieldValidatorType.EMAIL]: true,
        [GFieldValidatorType.REQUIRED]: true
      },
    }),
    // Password widget
    new GPasswordField({
      model: 'Password',
      label: 'Password widget',
      placeholder: 'Password widget',
      validators: {
        [GFieldValidatorType.MIN_LENGTH]: 8,
        [GFieldValidatorType.MAX_LENGTH]: 30,
      },
      autocomplete: 'false',
    }),
    // Number widget
    new GNumberField({
      model: 'number',
      label: 'Number widget',
      placeholder: 'Number widget',
      validators: {
        [GFieldValidatorType.REQUIRED]: false,
        [GFieldValidatorType.MAX]: 100,
        [GFieldValidatorType.MIN]: 0
      },
      decimal: true,
      precision: 5
    }),
    // Toggle widget
    new GToggleField({
      model: 'toggle',
      label: 'Toggle widget',
      value: true,
      validators: {
        [GFieldValidatorType.REQUIRED]: false
      },
    }),
    // Checkbox widget
    new GCheckboxField({
      model: 'checkbox',
      label: 'Checkbox widget',
      value: false
    }),
    // Dropdown widget
    new GDropdownField({
      model: 'dropdown',
      label: 'Dropdown widget',
      placeholder: 'Dropdown widget',
      externalOptions: false,
      optionValues: [
        {
          value: 'yellow',
          text: 'Yellow'
        },
        {
          value: 'red',
          text: 'Red'
        },
        {
          value: 'blue',
          text: 'Blue'
        },
        {
          value: 'pink',
          text: 'Pink'
        },
        {
          value: 'gray',
          text: 'Gray'
        },
        {
          value: 'orange',
          text: 'Orange'
        },
        {
          value: 'purple',
          text: 'Purple'
        },
        {
          value: 'black',
          text: 'Black'
        },
        {
          value: 'white',
          text: 'White'
        }
      ]
    }),
    // Currency widget
    new GCurrencyField({
      model: 'currency',
      label: 'Currency widget',
      placeholder: 'Currency widget',
      validators: {
        [GFieldValidatorType.MIN]: 100000,
        [GFieldValidatorType.MAX]: 500000
      }
    }),
    // Phone widget
    new GPhoneField({
      model: 'phone',
      label: 'Phone widget',
      placeholder: 'Phone widget',
      value: '573123123299',
      country: GFieldCountryCode.CO,
      validators: {
        [GFieldValidatorType.REQUIRED]: false
      },
      editCountry: true
    }),
    // Datepicker widget
    new GDatePickerField({
      model: 'date',
      label: 'Date widget',
      placeholder: 'date widget'
    }),
    // Map widget
    new GMapField({
      model: 'map',
      label: 'Map widget',
      placeholder: 'Map widget',
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      }
    }),
    // Separated by comma widget
    new GSeparatedByComma({
      model: 'comma',
      label: 'Separated by comma widget',
      placeholder: 'SBC widget'
    }),
    // Two data widget
    new GTwoDataInput({
      model: 'twoDataInput',
      label: 'Two data widget',
      divider: '-',
      grid: [
        'auto',
        '24px'
      ],
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      },
      options: {
        left: {
          type: GFieldValueType.STRING,
          validators: {
            [GFieldValidatorType.REQUIRED]: true
          },
          placeholder: 'Left'
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
    // Multiselect widget
    // new GMultiselectField({
    //   model: 'multiselect',
    //   label: 'Multiselect widget',
    //   placeholder: 'Multiselect widget',
    //   validators: {
    //     [GFieldValidatorType.REQUIRED]: false
    //   },
    //   externalOptions: true,
    //   optionValues: [
    //     {
    //       value: 'bogota',
    //       text: 'Bogotá'
    //     },
    //     {
    //       value: 'cali',
    //       text: 'Calí'
    //     },
    //     {
    //       value: 'cartagena',
    //       text: 'Cartagena'
    //     },
    //     {
    //       value: 'barranquilla',
    //       text: 'Barranquilla'
    //     },
    //     {
    //       value: 'santa_marta',
    //       text: 'Santa Marta'
    //     },
    //     {
    //       value: 'bucaramanga',
    //       text: 'Bucaramanga'
    //     }
    //   ]
    // }),
    // Color widget
    new GColorPickerField({
      model: 'color',
      label: 'Color widget',
      placeholder: 'Color widget',
      value: '#4588fd'
    }),
    // Time widget
    new GTimeField({
      model: 'time',
      label: 'Time widget',
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      },
    }),
    // File widget
    new GFieldFile({
      model: 'file',
      label: 'File widget',
      placeholder: 'Select a file',
      validators: {
        [GFieldValidatorType.REQUIRED]: false
      },
      size: 5200000,
      returnFile: false,
      api: {
        url: 'http://www.googleapis.com/upload/drive/v2/files?uploadType=multipart',
        method: 'post',
        fileParamName: 'file'
      },
      accept: '.jpg, .jpeg, .png',
    }),
    // Textarea widget
    new GTextareaField({
      model: 'textarea',
      label: 'Textarea widget',
      placeholder: 'Textarea widget',
      validators: {
        [GFieldValidatorType.REQUIRED]: true
      }
    }),
    // Radio widget
    new GRadioField({
      model: 'radio',
      label: 'Radio widget',
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
    // Divider widget
    new GDivider({
      model: null,
      seccionName: 'Divider widget with description',
      hideLine: false,
      padding: '1rem 0',
      description: 'i am a little description, hi mom i am famous',
      gridColumn: '1 / 6'
    }),
    // Divider widget
    new GDivider({
      model: null,
      seccionName: 'Divider widget',
      hideLine: false,
      padding: '1rem 0',
      gridColumn: '1 / 6'
    }),
    // Show data widget
    new GShowData({
      model: null,
      label: 'Show data widget',
      value: 'Show data content'
    }),
    // Toggle field display
    new GDropdownField({
      model: 'dropdownToggle',
      label: 'Toggle fields display',
      value: 'true',
      optionValues: [
        {
          value: 'true',
          text: 'Show fields'
        },
        {
          value: 'false',
          text: 'Hide fields'
        }
      ]
    }),
    // dynamic input
    new GTextField({
      model: 'dynamicInput',
      label: 'Dinamic input',
      displayIf: {
        model: 'dropdownToggle',
        hasValue: 'true'
      }
    }),
    // Custom button
    new GButton({
      model: null,
      placeholder: 'Custom buttom to submit',
      action: GFieldValueButtonType.SUBMIT
    }),
    // Custom button
    new GButton({
      model: null,
      placeholder: 'Custom button to reset',
      action: GFieldValueButtonType.RESET
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
          value: 'HOLA_KEY',
          text: 'hola'
        },
        {
          value: 'CHAO_KEY',
          text: 'chao'
        }
      ]
    };

    // patch values
    const toPatchValues = {
      email: 'email@patched.com',
      // time: '11:40',
      age: 40,
      file: {
        isImage: true,
        type: '',
        name: '',
        // tslint:disable-next-line: max-line-length
        path: 'https://firebasestorage.googleapis.com/v0/b/gianfaraoneweb.appspot.com/o/horizonte-singapur_53876-33588.jpg?alt=media&token=9d1e33be-11f1-45e2-be8f-ebc2fc8aa463'
      },
      // multiselect: [
      //   {
      //     value: 'bogota',
      //     text: 'Bogotá'
      //   }
      // ]
      map: {
        address: 'cra 38 bis # 1 -19',
        lat: 4.6046313,
        lng: -74.1126673,
        city: 'Bogotá',
        country: 'Colombia'
      },
      franchiseType: 'FRANCHISE_ADMIN_STORE'
    };
    // this.formFields = this.gsFormService.patchFormValues(this.formFields, toPatchValues);
  }

  public onSubmit(form: any) {
    console.log('form', form);
    console.warn('form values', form.value);
  }

  public onFormChange(form: FormGroup) {
    // console.log(form);
  }

  public resetForm() {
    this.rppFormComponent.formActions('reset');
  }

  public submitForm() {
    this.rppFormComponent.formActions('submit');
  }

  actions(action) {
    switch (action) {
      case 'open-alert':
        alert('hey, i\'m an alert!!');
        break;
      case 'refresh':
        // tslint:disable-next-line: deprecation
        window.location.reload(true);
        break;
    }
  }

  public test(name) {
    console.log(name);
  }
}
