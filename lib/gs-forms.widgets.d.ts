import { GFieldSelector } from './gs-forms.enums';
import { GField, GFieldConfiguration, GFieldOptionValuesConfiguration, GFieldCountryFormmatConfiguration, GFieldBooleanConfiguration, GFieldNumberConfiguration, GFieldFileConfiguration, GFieldDividerConfiguration, GFieldTwoDataConfiguration, GFieldButtonConfiguration, GFieldMapConfiguration } from './gs-forms.models';
/**
 * Text widget
 */
export declare class GTextField implements GField {
    config: GFieldConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldConfiguration);
}
/**
 * Textarea widget
 */
export declare class GTextareaField implements GField {
    config: GFieldConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldConfiguration);
}
/**
 * Password widget
 */
export declare class GPasswordField implements GField {
    config: GFieldConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldConfiguration);
}
/**
 * Number widget
 */
export declare class GNumberField implements GField {
    config: GFieldNumberConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldNumberConfiguration);
}
/**
 * Toggle widget
 */
export declare class GToggleField implements GField {
    config: GFieldBooleanConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldBooleanConfiguration);
}
/**
 * Checkbox widget
 */
export declare class GCheckboxField implements GField {
    config: GFieldBooleanConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldBooleanConfiguration);
}
/**
 * Radio widget
 */
export declare class GRadioField implements GField {
    config: GFieldOptionValuesConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldOptionValuesConfiguration);
}
/**
 * Dropdown widget
 */
export declare class GDropdownField implements GField {
    config: GFieldOptionValuesConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldOptionValuesConfiguration);
}
/**
 * Tax document widget
 * @deprecated
 */
export declare class GTaxDocumentTypeField implements GField {
    config: GFieldCountryFormmatConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldCountryFormmatConfiguration);
}
/**
 * Currency widget
 */
export declare class GCurrencyField implements GField {
    config: GFieldCountryFormmatConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldCountryFormmatConfiguration);
}
/**
 * Phone widget
 */
export declare class GPhoneField implements GField {
    config: GFieldCountryFormmatConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldCountryFormmatConfiguration);
}
/**
 * Datepicker widget
 */
export declare class GDatePickerField implements GField {
    config: GFieldConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldConfiguration);
}
/**
 * Separated by Comma widget
 */
export declare class GSeparatedByComma implements GField {
    config: GFieldConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldConfiguration);
}
/**
 * Image/File widget
 */
export declare class GFieldFile implements GField {
    config: GFieldFileConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldFileConfiguration);
}
/**
 * Two data input widget
 */
export declare class GTwoDataInput implements GField {
    config: GFieldTwoDataConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldTwoDataConfiguration);
}
/**
 * Multiselect widget
 */
export declare class GMultiselectField implements GField {
    config: GFieldOptionValuesConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldOptionValuesConfiguration);
}
/**
 * Color picker widget
 */
export declare class GColorPickerField implements GField {
    config: GFieldConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldConfiguration);
}
/**
 * Map widget
 */
export declare class GMapField {
    config: GFieldMapConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldMapConfiguration);
}
/**
 * Time field in 24 hour format
 */
export declare class GTimeField {
    config: GFieldConfiguration;
    selector: GFieldSelector;
    constructor(config: GFieldConfiguration);
}
/**
 * Divider widget
 */
export declare class GDivider {
    config: GFieldDividerConfiguration;
    selector: GFieldSelector;
    notWidget: boolean;
    constructor(config: GFieldDividerConfiguration);
}
/**
 * Button widget
 */
export declare class GButton {
    config: GFieldButtonConfiguration;
    selector: GFieldSelector;
    notWidget: boolean;
    constructor(config: GFieldButtonConfiguration);
}
/**
 * Show-data widget
 */
export declare class GShowData {
    config: GFieldConfiguration;
    selector: GFieldSelector;
    notWidget: boolean;
    constructor(config: GFieldConfiguration);
}
