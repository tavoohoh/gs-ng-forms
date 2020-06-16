# gs-forms

Simple angular 8 forms library.

# Table of contents:
* [Installation](#installation)
* [Getting Started](#getting-started)
* [Usage](#usage)
  * [Add gs-form to your code](#add-gs-form-to-your-code)
  * [Styling gs-form](#styling-gs-form)
  * [gs-form fields](#gs-form-fields)
  * [gs-form fields options](#gs-form-fields-options)
  * [gs-form options](#gs-form-options)
  * [gs-form service](#gs-form-service)

## Installation
- You will need Rappi PROD VPN connected. If you do not have this VPN configured, request one at https://rappidev.atlassian.net/servicedesk/customer/portal/26/group/84

- Configure the rappipay registry:
```sh
npm config set @rappipay:registry http://repo.ops.rappi.com/repository/npm-hosted/
```

- Install the library via NPM
```sh
npm install @rappipay/gs-forms --save
```

## Getting Started

Add `GsFormsModule` into the imports array of the module that will use `gs-forms`

```ts
import { GsFormsModule} from '@rappipay/gs-forms';

@NgModule({
  imports: [
    // ...
    GsFormsModule
  ],
})
export class AppModule { }
```

If you would like to use custom styles for the form fields you can pass a `GStyles` object to the module:
```ts
import { GsFormsModule} from '@rappipay/gs-forms';

@NgModule({
  imports: [
    // ...
    GsFormsModule.forRoot({
      color: {
        font: '#1f2532'
      },
      ui: {
        input: {
          background: '#cccccc'
        }
      }
    )
  ],
})
export class AppModule { }
```

For a full list of `GStyles` properties go to [Styling gs-form](#styling-gs-form)

## Usage

### Add gs-form to your code:

Add `gs-form` component to your HTML, import interfaces and define properties.

##### HTML ex. app.component.html
```html
<h1>My form</h1>
<rpp-form
  [formFields]="yourFormFieldsArray"
  [formOptions]="yourFormOptions"
  (form)="onCheckForm($event)">
</rpp-form>
```

|                           |                                                              |
|---------------------------|--------------------------------------------------------------|
| formFields                | Send your form fields to gs-form to render your form         |
| formOptions               | Send options so gs-form can customize your form as you like  |
| form                      | Get the FormGroup when the users clic the submit/save button |

##### TS ex. app.component.ts
```ts
import { GFormFields, GFormOptions, GTextField, GFieldValidatorType } from 'gs-forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public yourFormFieldsArray: GFormFields = [
    // email input
    new GTextField({
      model: 'email', // formControlName.
      label: 'Email Address', // Field label. Can be a i18n key
      placeholder: 'What is your email address?', // Field placeholder. Can be a i18n key
      validators: { // Object with validators
        [GFieldValidatorType.EMAIL]: true,
        [GFieldValidatorType.REQUIRED]: true
      },
    }),
  ];

  public yourFormOptions: GFormOptions = {
    onErrordisableSubmit: false, // If true disable de submit/save button
    layout: {
      columns: '1fr 1fr' || 3, // grid-template-columns value or a number
      innerPadding: '6px' // padding for the body and footer of the form
    },
    context: {
      saveButton: {
        text: 'Save', // submit/save button text. Can be a i18n key
        show: true // show the submit button
      }
    }
  }
};
```

For a full list of `GFormFields` go to [gs-form fields](#gs-form-fields)
and for a full list of `GFormOptions` properties go to [gs-form options](#gs-form-options).

### Styling gs-form:
```ts
interface GStyles {
  color?: {
    /**
     * Font color
     * default: "inherit"
     */
    font?: string;

    /**
     * Primary color, used in important UI elements background and color
     * default: "#4588fd"
     */
    primary?: string;

    /**
     * Secondary color, used in some UI elements background and color
     * default: "#7a9e9f"
     */
    secondary?: string;

    /**
     * Neutral color, used in some UI elements background and color
     * default: "#4f6367"
     */
    neutral?: string;

    /**
     * White color, all white colors used in UI elements
     * default: "#ffffff"
     */
    white?: string;
  };
  ui?: {
    /**
     * Font size, all fonts size
     * default: ".9rem"
     */
    fontSize?: string;

    /**
     * Input and button style
     * Go to `GInputStyle` for detail
     */
    input?: GInputStyle;
    primaryButton?: GInputStyle;
    secondaryButton?: GInputStyle;
  };
}

interface GInputStyle {
  /* Input padding */
  padding?: string;
  /* Input text color */
  color?: string;
  /* Input backgroud */
  background?: string;
  /* Input border size */
  borderSize?: string;
  /* Input border style */
  borderStyle?: string;
  /* Input border color */
  borderColor?: string;
  /* Input radious */
  borderRadius?: string;
  /* Input border top width/size */
  borderTop?: string;
  /* Input border right width/size */
  borderRight?: string;
  /* Input border bottom width/size */
  borderBottom?: string;
  /* Input border left width/size */
  borderLeft?: string;
}
```

### gs-form fields:

|                           |                                                              |
|---------------------------|--------------------------------------------------------------|
| GTextField                | Any text field with string value                             |
| GTextareaField            | Textarea field                                               |
| GPasswordField            | Password field with an eye                                   |
| GNumberField              | Any numeric value. For currency values use `GCurrencyField`  |
| GToggleField              | Any boolean value                                            |
| GCheckboxField            | Multiple select boolean values                               |
| GRadioField               | Multiple boolean values                                      |
| GDropdownField            | Multiple values                                              |
| GTaxDocumentTypeField     | Tax document type selector                                   |
| GCurrencyField            | Any currency value                                           |
| GPhoneField               | Any phone value                                              |
| GDatePickerField          | Any date value                                               |
| GSeparatedByComma         | Separated by comma string values                             |
| GFieldFile                | File field with upload logic using multipart form            |
| GTwoDataInput             | Creates a two inputs field                                   |
| GMultiselectField         | Multiple selection field                                     |
| GColorPickerField         | Color picker field                                           |
| GMapField                 | Address field with Google Map auto complete and pick         |
| GDivider                  | This is not a field, just a divider                          |

More fields are yet to come, for fields properties please go to
[gs-form fields options](#gs-form-fields-options)

### gs-form fields options:

```ts
type GFormFields = Array<GField>;

interface GFieldOptions {
  /**
   * form control name 
   */
  model: string;
  /**
   * Field validators
   *
   * Available validators are:
   *   [GFieldValidatorType.MIN]?: number;
   *   [GFieldValidatorType.MAX]?: number;
   *   [GFieldValidatorType.REQUIRED]?: boolean;
   *   [GFieldValidatorType.EMAIL]?: boolean;
   *   [GFieldValidatorType.MIN_LENGTH]?: number;
   *   [GFieldValidatorType.MAX_LENGTH]?: number;
   *   [GFieldValidatorType.PATTERN]?: string | RegExp;
   *
   */
  validators?: GFieldValidators;
  /**
   * Field label. To hide label set its value to null
   */
  label?: string;
  /**
   * Field placeholder. If not specified will use label or model
   */
  placeholder?: string;
  /**
   * Field default value
   */
  value?: string | number | boolean;
  /**
   * Set the `autocomplete` attribute of an `input`
   */
  autocomplete?: string;
  /**
   * Dynamically display/hide this field by setting this property
   */
  displayIf?: {
    /**
     * Model that will be evaluated
     */
    model: string;
    /**
     * Display this field if that model has this value
     */
    hasValue: any
  };
  /**
   * Field value options
   * 
   * Only `GRadioField` and `GDropdownField`
   */
  optionValues: Array<{
    value: string | number | boolean;
    text: string;
  }>;
  /**
   * If true this field will replace its `optionValues` with one passed in `FormOptions`
   *
   * Only `GRadioField` and `GDropdownField`
   */
  externalOptions?: boolean;
  /**
   * Country configuration
   * Only for `GCurrencyField` and `GPhoneField`
   */
  country: GFieldCountryCode;
  /**
   * If true the country can be changed
   * 
   * Only for `GPhoneField`
   */
  editCountry?: boolean;
  /**
   * Set `GFieldFile` configurations
   * 
   * Only for `GFieldFile`
   */
  api: {    
    /**
     * Url to make the http request
     */
    url: string;
    /**
     * Http method for the request
     * One of: 'post' || 'put'
     */
    method: string;
    /**
     * Property name in multipart form
     */
    fileParamName: string;
  };
  /**
   * Supported file extensions
   * For example: '.pdf, .doc, .xml, etc'
   * 
   * Only for `GFieldFile`
   */
  accept?: string;
    /**
   * Field position on the grid columns
   * Has to be a valid value for css `grid-column` attribute
   *
   * For example: '1 / 3' | '2'
   */
  gridColumn?: string;
  /**
   * Field position on the grid rows
   * Has to be a valid value for css `grid-row` attribute
   *
   * For example: '1 / 3' | '2'
   */
  gridRow?: string;
  /**
   * Use the divider as a section headline with a title
   * 
   * Only for `GDivider`
   */
  seccionName?: string;
  /**
   * Divider padding
   * 
   * Only for `GDivider`
   */
  padding?: string;
  /**
   * Divider padding
   * 
   * Only for `GDivider`
   */
  dividerColor?: string;
  /**
   * If true the divider horizontal line wont be showed
   * 
   * Only for `GDivider`
   */
  hideLine?: boolean;
  /**
   * Two data inputs divider content
   * 
   * Only for `GTwoDataInput`
   */
  divider?: string;
  /**
   * Two data inputs options
   * 
   * Only for `GTwoDataInput`
   */
  options?: {
    /**
     * lef/right input
     */
    left|right?: {
      /**
       * left/right input type:
       * 
       * string | number
       */
      type?: GFieldValueType;
      /**
       * left/right input validators
       *
       * If null it will try to use the `config.validators`
       */
      validators?: GFieldValidators;
      /**
       * left/right input placeholder
       */
      placeholder?: string;
    };
  };
  /**
   * Two data input Grid column size for each input
   * 
   * Only for `GTwoDataInput`
   */
  grid?: [string, string];
  /**
   * Two data input default value for each input
   * 
   * Only for `GTwoDataInput`
   */
  value?: {
    /**
     * left/right input value
     */
    left|right: string | number;
  };
};
```

### gs-form options:
```ts
interface GFormOptions {
  /**
   * Pass any argument to the form:
   *
   * @example
   * <form [autocomplete]="yourOptions.autocomplete">
   */
  autocomplete?: string;
  /**
   * Disable submit if the form has errors.
   */
  onErrorDisableSubmit?: boolean;
  /**
   * Set default country using `GFieldCountryCode` enum form gs-field
   */
  country?: GFieldCountryCode;
  /**
   * Object containing options for fields like `GDropdownField` where `[key: string]` is the model name of the `GField`.
   */
  fieldValues?: {
    [key: string]: GFieldOptionValues;
  };
  layout?: {
    /**
     * Number to specify the quantity of columns, an string to pass any valid value for `grid-template-columns`
     * Number example: 3 (will render 3 columns for each row)
     * String example: auto 200px repeat(2, 1fr)
     */
    columns?: number | string;
    /**
     * If true, the form labels will not be displayed.
     */
    hideFormLabels?: boolean;
    /**
     * Padding for the body and footer of the form
     */
    innerPadding?: string;
  };
  context?: {
    saveButton?: {
      text?: string;
      show?: boolean;
    };
    cancelButton?: {
      text?: string;
      show?: boolean;
    }
  };
}
```

### gs-form service:
You can consume the gs-form service to help you with the following scenarios:

- If you need to pass dynamic or external options to a dropdown you can use `mapFieldOptionValues()` to map your option values to gs-form format:
```ts
  // Update your form options to set a field options
  const formOptions = createFranchiseFormOptions;
  formOptions.country = GFieldCountryCode.MX;
  formOptions.fieldValues = {
  /**
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
    category: this.gsFormService.mapFieldOptionValues(response.data, 'key', 'value');
  };
```

For issues or questions please contact `gustavo.santamaria` or email gustavo.santamaria@rappi.com