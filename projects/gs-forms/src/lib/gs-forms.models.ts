import { GFieldCountryCode, GFieldSelector, GFieldValidatorType } from './gs-forms.enums';

export type GFieldOptionValues = Array<{
  value: string | number | boolean;
  text: string;
}>;

/**
 * Form options
 */
export interface GFormOptions {
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

/**
 * Field validators
 */
export interface GFieldValidators {
  [GFieldValidatorType.MIN]?: number;
  [GFieldValidatorType.MAX]?: number;
  [GFieldValidatorType.REQUIRED]?: boolean;
  [GFieldValidatorType.EMAIL]?: boolean;
  [GFieldValidatorType.MIN_LENGTH]?: number;
  [GFieldValidatorType.MAX_LENGTH]?: number;
  [GFieldValidatorType.PATTERN]?: string | RegExp;
}

/**
 * Default field configuration
 */
export class GFieldConfiguration {
  model: string;
  validators?: GFieldValidators;
  label?: string;
  placeholder?: string;
  value?: string | number | boolean;
  autocomplete?: string;
}

/**
 * Field configuration for only string fields
 */
export class GFieldStringConfiguration extends GFieldConfiguration {
  value?: boolean;
}

/**
 * Field configuration for only number fields
 */
export class GFieldNumberConfiguration extends GFieldConfiguration {
  value?: number;
}

/**
 * Field configuration for only boolean fields
 */
export class GFieldBooleanConfiguration extends GFieldConfiguration {
  value?: boolean;
}

/**
 * Field configuration including option values for `GRadioField` and `GDropdownField`
 */
export class GFieldOptionValuesConfiguration extends GFieldConfiguration {
  optionValues?: GFieldOptionValues;
  externalOptions?: boolean;
}

/**
 * Field configuration including option values for `GSeparatedByComma`
 */
export class GFieldOptionValuesStringArrayConfiguration extends GFieldConfiguration {
  optionValues?: Array<string>;
}

/**
 * Field configuration including country option for `GCurrencyField` and `GPhoneField`
 */
export class GFieldCountryFormmatConfiguration extends GFieldConfiguration {
  country?: GFieldCountryCode;
  editCountry?: boolean;
}

/**
 * Field interface
 */
export interface GField {
  selector: GFieldSelector;
  config: GFieldConfiguration | GFieldOptionValuesConfiguration | GFieldCountryFormmatConfiguration;
}

/**
 * Form fields type
 */
export type GFormFields = Array<GField>;

/**
 * Location interface and its dependencies
 */
export interface GLocation {
  tax: Array<{
    name: string;
    value: string;
  }>;
  country: {
    name: string;
    alpha2Code: string;
  };
  phoneFormat: {
    code: string;
    mask: string;
  };
  currencyFormat: {
    code: string;
    symbol: string;
    thousands: string;
    decimal: string;
    precision: number;
  };
  disabled?: boolean;
}

export interface GInputStyle {
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

/**
 * Library styles
 *
 * @description
 * Send style parameters to the library
 *
 */
export interface GStyles {
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
