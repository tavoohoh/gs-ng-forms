# gs-forms

Simple angular 8 forms library.

##### Current version: Beta

# Table of contents:
* [Installation](#installation)
* [Getting Started](#getting-started)
* [Usage](#usage)
  * [Add gs-form to your code](#add-gs-form-to-your-code)
  * [Styling gs-form](#styling-gs-form)
  * [gs-form fields](#gs-form-fields)
  * [gs-form fields options](#gs-form-fields-options)
  * [gs-form options](#gs-form-options)

## Installation
- [set up your SSH key](https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html#SetupanSSHkey-ssh1)
so `npm` can clone the `rpp-ngforms-lib` repo.
If you already have your SSH key configured for Bitbucket go to the next step.

- Install the library via NPM
```sh
npm install git+ssh://git@bitbucket.org/rappinc/rpp-ngforms-lib.git --save
```

## Getting Started

Add `GsFormsModule` into the imports array of the module that will use `gs-forms`

```ts
import { GsFormsModule} from 'gs-forms';

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
import { GsFormsModule} from 'gs-forms';

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
<gs-form
  [formFields]="yourFormFieldsArray"
  [formOptions]="yourFormOptions"
  (formValue)="onSubmitValues($event)"
  (form)="onCheckForm($event)">
</gs-form>
```

|                           |                                                              |
|---------------------------|--------------------------------------------------------------|
| formFields                | Send your form fields to gs-form to render your form         |
| formOptions               | Send options so gs-form can customize your form as you like  |
| formValue                 | Get form values when the users clic the submit/save button   |
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
| GTextareaField            | Any text field with string value                             |
| GPasswordField            | A password field with an eye                                 |
| GNumberField              | Any numeric value. For currency values use `GCurrencyField`  |
| GToggleField              | Any boolean value                                            |
| GCheckboxField            | Multiple select boolean values                               |
| GRadioField               | Multiple boolean values                                      |
| GDropdownField            | Multiple values                                              |
| GCurrencyField            | Any currency value                                           |
| GPhoneField               | Any phone value                                              |
| GDatePickerField          | Any date value                                               |

More fields are yet to come, for fields properties please go to
[gs-form fields options](#gs-form-fields-options)

### gs-form fields options:

```ts
type GFormFields = Array<GField>;

interface GFieldOptions {
  model: string;
  validators?: GFieldValidators;
  label?: string;
  placeholder?: string;
  value?: string | number | boolean;
  /* Only `GRadioField` and `GDropdownField` */
  optionValues: Array<{
    value: string | number | boolean;
    text: string;
  }>;
  /* Only for `GCurrencyField` and `GPhoneField` */
  country: GFieldCountryCode;
  editCountry?: boolean;
};
```

### gs-form options:
```ts
interface GFormOptions {
  /* If true disable de submit/save button */
  onErrorDisableSubmit?: boolean;
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



For issues or questions please contact `gustavo.santamaria` or email gustavo.santamaria@rappi.com