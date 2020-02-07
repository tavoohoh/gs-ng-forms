import { GFieldSelector } from './gs-forms.enums';
import {
  GField,
  GFieldConfiguration,
  GFieldOptionValuesConfiguration,
  GFieldCountryFormmatConfiguration,
  GFieldBooleanConfiguration,
  GFieldNumberConfiguration
} from './gs-forms.models';

/**
 * Text widget
 */
export class GTextField implements GField {
  selector = GFieldSelector.TEXT;

  constructor(public config: GFieldConfiguration) {}
}

/**
 * Textarea widget
 */
export class GTextareaField implements GField {
  selector = GFieldSelector.TEXTAREA;

  constructor(public config: GFieldConfiguration) { }
}

/**
 * Password widget
 */
export class GPasswordField implements GField {
  selector = GFieldSelector.PASSWORD;

  constructor(public config: GFieldConfiguration) { }
}

/**
 * Number widget
 */
export class GNumberField implements GField {
  selector = GFieldSelector.NUMBER;

  constructor(public config: GFieldNumberConfiguration) { }
}

/**
 * Toggle widget
 */
export class GToggleField implements GField {
  selector = GFieldSelector.TOGGLE;

  constructor(public config: GFieldBooleanConfiguration) { }
}

/**
 * Checkbox widget
 */
export class GCheckboxField implements GField {
  selector = GFieldSelector.CHECKBOX;

  constructor(public config: GFieldOptionValuesConfiguration) { }
}

/**
 * Radio widget
 */
export class GRadioField implements GField {
  selector = GFieldSelector.RADIO;

  constructor(public config: GFieldOptionValuesConfiguration) { }
}

/**
 * Dropdown widget
 */
export class GDropdownField implements GField {
  selector = GFieldSelector.DROPDOWN;

  constructor(public config: GFieldOptionValuesConfiguration) { }
}

/**
 * Tax document widget
 */
export class GTaxDocumentTypeField implements GField {
  selector = GFieldSelector.TAX_TYPE;

  constructor(public config: GFieldCountryFormmatConfiguration) { }
}

/**
 * Currency widget
 */
export class GCurrencyField implements GField {
  selector = GFieldSelector.CURRENCY;

  constructor(public config: GFieldCountryFormmatConfiguration) { }
}

/**
 * Phone widget
 */
export class GPhoneField implements GField {
  selector = GFieldSelector.PHONE;

  constructor(public config: GFieldCountryFormmatConfiguration) { }
}

/**
 * Datepicker
 */
export class GDatePickerField implements GField {
  selector = GFieldSelector.DATE;

  constructor(public config: GFieldConfiguration) { }
}

/**
 * Separated by Comma field
 */
export class GSeparatedByComma implements GField {
  selector = GFieldSelector.COMMA;

  constructor(public config: GFieldConfiguration) { }
}
