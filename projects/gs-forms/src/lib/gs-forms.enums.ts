export enum GFieldSelector {

  /**
   * Any string value:
   * For example: text, email, address, etc.
   * <input type="text"/>
   */
  TEXT = 'text',

  /**
   * Any long string value:
   * <textarea>
   */
  TEXTAREA = 'textarea',

  /**
   * Any sensitive value:
   * For example: password, token, etc.
   * <input type="password"/>
   * This will create a non native password type input with an eye button to toggle the input type from password to text.
   */
  PASSWORD = 'password',

  /**
   * Any numeric value:
   * For example: age or quantity.
   * <input type="number"/>
   */
  NUMBER = 'number',

  /**
   * Any boolean value:
   * For example: A true or false question.
   * This will create a non native toggle type input
   */
  TOGGLE = 'toggle',

  /**
   * Any boolean value:
   * For example: A true or false question.
   * This will create a non native checkbox type input
   */
  CHECKBOX = 'checkbox',

  /**
   * Any array of options:
   * For example: gender selection.
   * This will create a non native radio type input for each option.
   */
  RADIO = 'radio',

  /**
   * Any array of options:
   * For example: select and its options.
   */
  DROPDOWN = 'dropdown',

  /**
   * Tax type selector
   */
  TAX_TYPE = 'tax_type',

  /**
   * Any currency value:
   * For example: any masked string formatted as currency value ($ 1.300,20)
   * This will create a non native currency type input with currency format and symbol.
   *
   * Requires `currency pattern` and `currency symbol`.
   */
  CURRENCY = 'currency',

  /**
   * Any phone value:
   * For example: any masked string formatted as phone value (+57 300 123 0031)
   * This will create a non native phone type input.
   *
   * Requires `country code`.
   */
  PHONE = 'phone',

  /**
   * Any date value
   * This will create a non native date picker
   */
  DATE = 'date',

  /**
   * Separated by comma field
   */
  COMMA = 'comma',

  /**
   * Any type file
   * For Example: .pdf, .doc, .xml, etc
   * <input type="file"/>
   */
  FILE = 'file',

  /**
   * Two data input
   * Creates a two inputs field
   */
  TWO_DATA = 'two_data',

  /**
   * Multiselect field
   */
  MULTISELECT = 'multiselect',

  /**
   * Any string value:
   * For example: color string.
   * <input type="color"/>
   */
  COLOR = 'color',

  /**
   * Map input
   * Get latitude and longitude using Google Maps
   */
  MAP = 'map',

  /**
   * TimePicker Input
   * Any time value
   */
  TIME = 'time',

  /**
   * Divider
   * This is not a field, it is a component to divide your form in sections
   */
  DIVIDER = 'divider',

  /**
   * Button
   * This is not a field, it is a normal button to save, reset or anything else
   */
  BUTTON = 'button',

  /**
   * Show data
   * This looks like a text field but is not.
   * This is really useful to display a field like it was disabled but without the issue of having your input tag edited in the dom.
   */
  SHOW_DATA = 'show_data'
}

export enum GFieldValueType {
  STRING = 'string',
  NUMBER = 'number'
}

export enum GFieldValidatorType {
  MIN = 'min',
  MAX = 'max',
  REQUIRED = 'required',
  EMAIL = 'email',
  MIN_LENGTH = 'minlength',
  MAX_LENGTH = 'maxlength',
  PATTERN = 'pattern'
}

export enum GFieldCountryCode {
  AR = 'ar',
  BO = 'bo',
  BR = 'br',
  CA = 'ca',
  CL = 'cl',
  CO = 'co',
  CR = 'cr',
  EC = 'ec',
  MX = 'mx',
  PE = 'pe',
  US = 'us',
  UY = 'uy',
  VE = 've'
}

export enum GFieldValueButtonType {
  SUBMIT = 'submit',
  RESET = 'reset',
  CUSTOM = 'custom'
}
