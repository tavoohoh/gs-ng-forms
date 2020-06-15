import { GFieldSelector } from './gs-forms.enums';
import {
  GField,
  GFieldConfiguration,
  GFieldOptionValuesConfiguration,
  GFieldCountryFormmatConfiguration,
  GFieldBooleanConfiguration,
  GFieldNumberConfiguration,
  GFieldFileConfiguration,
  GFieldDividerConfiguration,
  GFieldTwoDataConfiguration,
  GFieldButtonConfiguration,
  GFieldMapConfiguration
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

  constructor(public config: GFieldBooleanConfiguration) { }
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
 * @deprecated
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
 * Datepicker widget
 */
export class GDatePickerField implements GField {
  selector = GFieldSelector.DATE;

  constructor(public config: GFieldConfiguration) { }
}

/**
 * Separated by Comma widget
 */
export class GSeparatedByComma implements GField {
  selector = GFieldSelector.COMMA;

  constructor(public config: GFieldConfiguration) { }
}

/**
 * Image/File widget
 */
export class GFieldFile implements GField {
  selector = GFieldSelector.FILE;

  constructor(public config: GFieldFileConfiguration) { }
}

/**
 * Two data input widget
 */
export class GTwoDataInput implements GField {
  selector = GFieldSelector.TWO_DATA;

  constructor(public config: GFieldTwoDataConfiguration) {}
}

/**
 * Multiselect widget
 */
export class GMultiselectField implements GField {
  selector = GFieldSelector.MULTISELECT;

  constructor(public config: GFieldOptionValuesConfiguration) { }
}

/**
 * Color picker widget
 */
export class GColorPickerField implements GField {
  selector = GFieldSelector.COLOR;

  constructor(public config: GFieldConfiguration) {}
}

/**
 * Map widget
 */
export class GMapField {
  selector = GFieldSelector.MAP;

  constructor(public config: GFieldMapConfiguration) {}
}

/**
 * Time field in 24 hour format
 */
export class GTimeField {
  selector = GFieldSelector.TIME;

  constructor(public config: GFieldConfiguration) {}
}

/**
 * Divider widget
 */
export class GDivider {
  selector = GFieldSelector.DIVIDER;
  notWidget = true;

  constructor(public config: GFieldDividerConfiguration) {}
}

/**
 * Button widget
 */
export class GButton {
  selector = GFieldSelector.BUTTON;
  notWidget = true;

  constructor(public config: GFieldButtonConfiguration) {}
}

/**
 * Show-data widget
 */
export class GShowData {
  selector = GFieldSelector.SHOW_DATA;
  notWidget = true;

  constructor(public config: GFieldConfiguration) {}
}
