import { __extends, __values, __decorate, __param, __spread } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Input, Component, ViewChild, EventEmitter, Output, ChangeDetectorRef, Inject, ViewChildren, HostBinding, ElementRef, HostListener, Directive, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

var GFieldSelector;
(function (GFieldSelector) {
    /**
     * Any string value:
     * For example: text, email, address, etc.
     * <input type="text"/>
     */
    GFieldSelector["TEXT"] = "text";
    /**
     * Any long string value:
     * <textarea>
     */
    GFieldSelector["TEXTAREA"] = "textarea";
    /**
     * Any sensitive value:
     * For example: password, token, etc.
     * <input type="password"/>
     * This will create a non native password type input with an eye button to toggle the input type from password to text.
     */
    GFieldSelector["PASSWORD"] = "password";
    /**
     * Any numeric value:
     * For example: age or quantity.
     * <input type="number"/>
     */
    GFieldSelector["NUMBER"] = "number";
    /**
     * Any boolean value:
     * For example: A true or false question.
     * This will create a non native toggle type input
     */
    GFieldSelector["TOGGLE"] = "toggle";
    /**
     * Any boolean value:
     * For example: A true or false question.
     * This will create a non native checkbox type input
     */
    GFieldSelector["CHECKBOX"] = "checkbox";
    /**
     * Any array of options:
     * For example: gender selection.
     * This will create a non native radio type input for each option.
     */
    GFieldSelector["RADIO"] = "radio";
    /**
     * Any array of options:
     * For example: select and its options.
     */
    GFieldSelector["DROPDOWN"] = "dropdown";
    /**
     * Tax type selector
     */
    GFieldSelector["TAX_TYPE"] = "tax_type";
    /**
     * Any currency value:
     * For example: any masked string formatted as currency value ($ 1.300,20)
     * This will create a non native currency type input with currency format and symbol.
     *
     * Requires `currency pattern` and `currency symbol`.
     */
    GFieldSelector["CURRENCY"] = "currency";
    /**
     * Any phone value:
     * For example: any masked string formatted as phone value (+57 300 123 0031)
     * This will create a non native phone type input.
     *
     * Requires `country code`.
     */
    GFieldSelector["PHONE"] = "phone";
    /**
     * Any date value
     * This will create a non native date picker
     */
    GFieldSelector["DATE"] = "date";
    /**
     * Separated by comma field
     */
    GFieldSelector["COMMA"] = "comma";
    /**
     * Any type file
     * For Example: .pdf, .doc, .xml, etc
     * <input type="file"/>
     */
    GFieldSelector["FILE"] = "file";
    /**
     * Two data input
     * Creates a two inputs field
     */
    GFieldSelector["TWO_DATA"] = "two_data";
    /**
     * Multiselect field
     */
    GFieldSelector["MULTISELECT"] = "multiselect";
    /**
     * Any string value:
     * For example: color string.
     * <input type="color"/>
     */
    GFieldSelector["COLOR"] = "color";
    /**
     * Map input
     * Get latitude and longitude using Google Maps
     */
    GFieldSelector["MAP"] = "map";
    /**
     * TimePicker Input
     * Any time value
     */
    GFieldSelector["TIME"] = "time";
    /**
     * Divider
     * This is not a field, it is a component to divide your form in sections
     */
    GFieldSelector["DIVIDER"] = "divider";
    /**
     * Button
     * This is not a field, it is a normal button to save, reset or anything else
     */
    GFieldSelector["BUTTON"] = "button";
    /**
     * Show data
     * This looks like a text field but is not.
     * This is really useful to display a field like it was disabled but without the issue of having your input tag edited in the dom.
     */
    GFieldSelector["SHOW_DATA"] = "show_data";
})(GFieldSelector || (GFieldSelector = {}));
var GFieldValueType;
(function (GFieldValueType) {
    GFieldValueType["STRING"] = "string";
    GFieldValueType["NUMBER"] = "number";
})(GFieldValueType || (GFieldValueType = {}));
var GFieldValidatorType;
(function (GFieldValidatorType) {
    GFieldValidatorType["MIN"] = "min";
    GFieldValidatorType["MAX"] = "max";
    GFieldValidatorType["REQUIRED"] = "required";
    GFieldValidatorType["EMAIL"] = "email";
    GFieldValidatorType["MIN_LENGTH"] = "minlength";
    GFieldValidatorType["MAX_LENGTH"] = "maxlength";
    GFieldValidatorType["PATTERN"] = "pattern";
})(GFieldValidatorType || (GFieldValidatorType = {}));
var GFieldCountryCode;
(function (GFieldCountryCode) {
    GFieldCountryCode["AR"] = "ar";
    GFieldCountryCode["BO"] = "bo";
    GFieldCountryCode["BR"] = "br";
    GFieldCountryCode["CA"] = "ca";
    GFieldCountryCode["CL"] = "cl";
    GFieldCountryCode["CO"] = "co";
    GFieldCountryCode["CR"] = "cr";
    GFieldCountryCode["EC"] = "ec";
    GFieldCountryCode["MX"] = "mx";
    GFieldCountryCode["PE"] = "pe";
    GFieldCountryCode["US"] = "us";
    GFieldCountryCode["UY"] = "uy";
    GFieldCountryCode["VE"] = "ve";
})(GFieldCountryCode || (GFieldCountryCode = {}));
var GFieldValueButtonType;
(function (GFieldValueButtonType) {
    GFieldValueButtonType["SUBMIT"] = "submit";
    GFieldValueButtonType["RESET"] = "reset";
    GFieldValueButtonType["CUSTOM"] = "custom";
})(GFieldValueButtonType || (GFieldValueButtonType = {}));

/**
 * Text widget
 */
var GTextField = /** @class */ (function () {
    function GTextField(config) {
        this.config = config;
        this.selector = GFieldSelector.TEXT;
    }
    return GTextField;
}());
/**
 * Textarea widget
 */
var GTextareaField = /** @class */ (function () {
    function GTextareaField(config) {
        this.config = config;
        this.selector = GFieldSelector.TEXTAREA;
    }
    return GTextareaField;
}());
/**
 * Password widget
 */
var GPasswordField = /** @class */ (function () {
    function GPasswordField(config) {
        this.config = config;
        this.selector = GFieldSelector.PASSWORD;
    }
    return GPasswordField;
}());
/**
 * Number widget
 */
var GNumberField = /** @class */ (function () {
    function GNumberField(config) {
        this.config = config;
        this.selector = GFieldSelector.NUMBER;
    }
    return GNumberField;
}());
/**
 * Toggle widget
 */
var GToggleField = /** @class */ (function () {
    function GToggleField(config) {
        this.config = config;
        this.selector = GFieldSelector.TOGGLE;
    }
    return GToggleField;
}());
/**
 * Checkbox widget
 */
var GCheckboxField = /** @class */ (function () {
    function GCheckboxField(config) {
        this.config = config;
        this.selector = GFieldSelector.CHECKBOX;
    }
    return GCheckboxField;
}());
/**
 * Radio widget
 */
var GRadioField = /** @class */ (function () {
    function GRadioField(config) {
        this.config = config;
        this.selector = GFieldSelector.RADIO;
    }
    return GRadioField;
}());
/**
 * Dropdown widget
 */
var GDropdownField = /** @class */ (function () {
    function GDropdownField(config) {
        this.config = config;
        this.selector = GFieldSelector.DROPDOWN;
    }
    return GDropdownField;
}());
/**
 * Tax document widget
 * @deprecated
 */
var GTaxDocumentTypeField = /** @class */ (function () {
    function GTaxDocumentTypeField(config) {
        this.config = config;
        this.selector = GFieldSelector.TAX_TYPE;
    }
    return GTaxDocumentTypeField;
}());
/**
 * Currency widget
 */
var GCurrencyField = /** @class */ (function () {
    function GCurrencyField(config) {
        this.config = config;
        this.selector = GFieldSelector.CURRENCY;
    }
    return GCurrencyField;
}());
/**
 * Phone widget
 */
var GPhoneField = /** @class */ (function () {
    function GPhoneField(config) {
        this.config = config;
        this.selector = GFieldSelector.PHONE;
    }
    return GPhoneField;
}());
/**
 * Datepicker widget
 */
var GDatePickerField = /** @class */ (function () {
    function GDatePickerField(config) {
        this.config = config;
        this.selector = GFieldSelector.DATE;
    }
    return GDatePickerField;
}());
/**
 * Separated by Comma widget
 */
var GSeparatedByComma = /** @class */ (function () {
    function GSeparatedByComma(config) {
        this.config = config;
        this.selector = GFieldSelector.COMMA;
    }
    return GSeparatedByComma;
}());
/**
 * Image/File widget
 */
var GFieldFile = /** @class */ (function () {
    function GFieldFile(config) {
        this.config = config;
        this.selector = GFieldSelector.FILE;
    }
    return GFieldFile;
}());
/**
 * Two data input widget
 */
var GTwoDataInput = /** @class */ (function () {
    function GTwoDataInput(config) {
        this.config = config;
        this.selector = GFieldSelector.TWO_DATA;
    }
    return GTwoDataInput;
}());
/**
 * Multiselect widget
 */
var GMultiselectField = /** @class */ (function () {
    function GMultiselectField(config) {
        this.config = config;
        this.selector = GFieldSelector.MULTISELECT;
    }
    return GMultiselectField;
}());
/**
 * Color picker widget
 */
var GColorPickerField = /** @class */ (function () {
    function GColorPickerField(config) {
        this.config = config;
        this.selector = GFieldSelector.COLOR;
    }
    return GColorPickerField;
}());
/**
 * Map widget
 */
var GMapField = /** @class */ (function () {
    function GMapField(config) {
        this.config = config;
        this.selector = GFieldSelector.MAP;
    }
    return GMapField;
}());
/**
 * Time field in 24 hour format
 */
var GTimeField = /** @class */ (function () {
    function GTimeField(config) {
        this.config = config;
        this.selector = GFieldSelector.TIME;
    }
    return GTimeField;
}());
/**
 * Divider widget
 */
var GDivider = /** @class */ (function () {
    function GDivider(config) {
        this.config = config;
        this.selector = GFieldSelector.DIVIDER;
        this.notWidget = true;
    }
    return GDivider;
}());
/**
 * Button widget
 */
var GButton = /** @class */ (function () {
    function GButton(config) {
        this.config = config;
        this.selector = GFieldSelector.BUTTON;
        this.notWidget = true;
    }
    return GButton;
}());
/**
 * Show-data widget
 */
var GShowData = /** @class */ (function () {
    function GShowData(config) {
        this.config = config;
        this.selector = GFieldSelector.SHOW_DATA;
        this.notWidget = true;
    }
    return GShowData;
}());

/**
 * Default field configuration
 */
var GFieldConfiguration = /** @class */ (function () {
    function GFieldConfiguration() {
        /**
         * Dynamically display/hide this field by setting this property
         */
        this.displayIf = null;
    }
    return GFieldConfiguration;
}());
/**
 * Field configuration for only string fields
 */
var GFieldStringConfiguration = /** @class */ (function (_super) {
    __extends(GFieldStringConfiguration, _super);
    function GFieldStringConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GFieldStringConfiguration;
}(GFieldConfiguration));
/**
 * Field configuration for only string fields
 */
var GFieldMapConfiguration = /** @class */ (function (_super) {
    __extends(GFieldMapConfiguration, _super);
    function GFieldMapConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GFieldMapConfiguration;
}(GFieldConfiguration));
/**
 * Field configuration for only number fields
 */
var GFieldNumberConfiguration = /** @class */ (function (_super) {
    __extends(GFieldNumberConfiguration, _super);
    function GFieldNumberConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GFieldNumberConfiguration;
}(GFieldConfiguration));
/**
 * Field configuration for only boolean fields
 */
var GFieldBooleanConfiguration = /** @class */ (function (_super) {
    __extends(GFieldBooleanConfiguration, _super);
    function GFieldBooleanConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GFieldBooleanConfiguration;
}(GFieldConfiguration));
/**
 * Field configuration including option values for `GRadioField` and `GDropdownField`
 */
var GFieldOptionValuesConfiguration = /** @class */ (function (_super) {
    __extends(GFieldOptionValuesConfiguration, _super);
    function GFieldOptionValuesConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GFieldOptionValuesConfiguration;
}(GFieldConfiguration));
/**
 * Field configuration including country option for `GCurrencyField` and `GPhoneField`
 */
var GFieldCountryFormmatConfiguration = /** @class */ (function (_super) {
    __extends(GFieldCountryFormmatConfiguration, _super);
    function GFieldCountryFormmatConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GFieldCountryFormmatConfiguration;
}(GFieldConfiguration));
/**
 * Field configuration for `GFieldFile`
 */
var GFieldFileConfiguration = /** @class */ (function (_super) {
    __extends(GFieldFileConfiguration, _super);
    function GFieldFileConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GFieldFileConfiguration;
}(GFieldConfiguration));
/**
 * Field configuration for `GTwoDataInput`
 */
var GFieldTwoDataConfiguration = /** @class */ (function (_super) {
    __extends(GFieldTwoDataConfiguration, _super);
    function GFieldTwoDataConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GFieldTwoDataConfiguration;
}(GFieldConfiguration));
/**
 * Field configuration for `GDivider`
 */
var GFieldDividerConfiguration = /** @class */ (function (_super) {
    __extends(GFieldDividerConfiguration, _super);
    function GFieldDividerConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GFieldDividerConfiguration;
}(GFieldConfiguration));
/**
 * Field configuration for `GButton`
 */
var GFieldButtonConfiguration = /** @class */ (function (_super) {
    __extends(GFieldButtonConfiguration, _super);
    function GFieldButtonConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GFieldButtonConfiguration;
}(GFieldConfiguration));

// https://lowpostayuda.zendesk.com/hc/es/articles/115004070469-Nombres-Identificaci%C3%B3n-tributaria-por-pa%C3%ADses
// http://www.wtng.info/wtng-54-ar.html
var LOCATION = {
    ar: {
        tax: [
            {
                name: 'CUIT (Código Único de Identificación Tributaria)',
                value: 'CUIT'
            }
        ],
        country: {
            name: 'Argentina',
            alpha2Code: 'AR'
        },
        phoneFormat: {
            code: '54',
            mask: '000 00000000'
        },
        currencyFormat: {
            code: 'ARS',
            symbol: '$',
            thousands: '.',
            decimal: ',',
            precision: 2
        }
    },
    bo: {
        tax: [
            {
                name: 'RUC (Registro Único de Contribuyentes)',
                value: 'RUC'
            }
        ],
        country: {
            name: 'Bolivia',
            alpha2Code: 'BO'
        },
        phoneFormat: {
            code: '591',
            mask: '000 0000000'
        },
        currencyFormat: {
            code: 'BOB',
            symbol: 'Bs.',
            thousands: '.',
            decimal: ',',
            precision: 2
        }
    },
    br: {
        tax: [
            {
                name: 'CPF (Cadastro de Persona Física)',
                value: 'CPF'
            },
            {
                name: 'CNPJ (Cadastro de Persona Jurídica)',
                value: 'CNPJ'
            }
        ],
        country: {
            name: 'Brazil',
            alpha2Code: 'BR'
        },
        phoneFormat: {
            code: '55',
            mask: '00 0 0000 0000'
        },
        currencyFormat: {
            code: 'BRL',
            symbol: 'R$',
            thousands: '.',
            decimal: ',',
            precision: 2
        }
    },
    ca: {
        disabled: true,
        tax: [
            {
                name: 'SIN (Social Insurance Number)',
                value: 'SIN'
            },
            {
                name: "NAS (num\u00E9ro d'assurance social)",
                value: 'NAS'
            }
        ],
        country: {
            name: 'Canada',
            alpha2Code: 'CA'
        },
        phoneFormat: {
            code: '1',
            mask: '000 000 0000'
        },
        currencyFormat: {
            code: 'CAD',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 2
        }
    },
    cl: {
        tax: [
            {
                name: 'RUT (Rol Único Tributario)',
                value: 'RUT'
            }
        ],
        country: {
            name: 'Chile',
            alpha2Code: 'CL'
        },
        phoneFormat: {
            code: '56',
            mask: '00 0000000'
        },
        currencyFormat: {
            code: 'CLP',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 0
        }
    },
    co: {
        tax: [
            {
                name: 'NIT (Número de Identificación Tributaria)',
                value: 'NIT'
            }
        ],
        country: {
            name: 'Colombia',
            alpha2Code: 'CO'
        },
        phoneFormat: {
            code: '57',
            mask: '000 000 0000'
        },
        currencyFormat: {
            code: 'COP',
            symbol: '$',
            thousands: '.',
            decimal: ',',
            precision: 0
        },
        lanLng: {
            lat: 4.6565365,
            lng: -74.1248367
        }
    },
    cr: {
        disabled: true,
        tax: [
            {
                name: 'NITE (Número de Identificación Tributaria Especial)',
                value: 'NITE'
            }
        ],
        country: {
            name: 'Costa Rica',
            alpha2Code: 'CR'
        },
        phoneFormat: {
            code: '506',
            mask: '000000000000'
        },
        currencyFormat: {
            code: 'CRC',
            symbol: '₡',
            thousands: '.',
            decimal: ',',
            precision: 2
        }
    },
    ec: {
        disabled: true,
        tax: [
            {
                name: 'RUC (Registro Único de Contribuyentes)',
                value: 'RUC'
            }
        ],
        country: {
            name: 'Ecuador',
            alpha2Code: 'EC'
        },
        phoneFormat: {
            code: '593',
            mask: '000000000000'
        },
        currencyFormat: {
            code: 'USD',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 2
        }
    },
    mx: {
        tax: [
            {
                name: 'RFC (Registro Federal de Contribuyentes)',
                value: 'RFC'
            }
        ],
        country: {
            name: 'Mexico',
            alpha2Code: 'MX'
        },
        phoneFormat: {
            code: '52',
            mask: '00 0000 0000'
        },
        currencyFormat: {
            code: 'MXN',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 2
        }
    },
    pe: {
        tax: [
            {
                name: 'RUC (Registro Único de Contribuyentes)',
                value: 'RUC'
            }
        ],
        country: {
            name: 'Peru',
            alpha2Code: 'PE'
        },
        phoneFormat: {
            code: '51',
            mask: '000000000000'
        },
        currencyFormat: {
            code: 'PEN',
            symbol: 'S/.',
            thousands: '.',
            decimal: ',',
            precision: 2
        }
    },
    us: {
        disabled: true,
        tax: [
            {
                name: 'TIN (Taxpayer Identification Number)',
                value: 'TIN'
            }
        ],
        country: {
            name: 'United States',
            alpha2Code: 'US'
        },
        phoneFormat: {
            code: '1',
            mask: '000 000 0000'
        },
        currencyFormat: {
            code: 'USD',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 2
        }
    },
    uy: {
        tax: [
            {
                name: 'RUT (Registro Único Tributario)',
                value: 'RUT'
            }
        ],
        country: {
            name: 'Uruguay',
            alpha2Code: 'UY'
        },
        phoneFormat: {
            code: '598',
            mask: '000000000000'
        },
        currencyFormat: {
            code: 'UYU',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 2
        }
    },
    ve: {
        disabled: true,
        tax: [
            {
                name: 'RIF (Registro de Información Fiscal)',
                value: 'RIF'
            }
        ],
        country: {
            name: 'Venezuela',
            alpha2Code: 'VE'
        },
        phoneFormat: {
            code: '58',
            mask: '000 000 0000'
        },
        currencyFormat: {
            code: 'VEF',
            symbol: 'Bs.',
            thousands: '.',
            decimal: ',',
            precision: 0
        }
    }
};
var VALIDATION_MESSAGES = {
    en: {
        ERR_MIN: 'The value must be greater than or equal to ${param}',
        ERR_MAX: 'The value must be less than or equal to ${param}',
        ERR_REQUIRED: 'This field is required',
        ERR_EMAIL: 'The email must have a valid format',
        ERR_MIN_LENGTH: 'The value must be at least ${param} characters',
        ERR_MAX_LENGTH: 'The value must have a maximum of ${param} characters',
        ERR_PATTERN: 'The value format is not correct',
        DEFAULT: 'This field has an unknown error',
        ERR_REQUIRED_TWO_DATA_RIGHT: 'The right field is required',
        ERR_REQUIRED_TWO_DATA_LEFT: 'The left field is required',
        ERR_REQUIRED_MIN: 'Minutes are required',
        ERR_REQUIRED_HOUR: 'Hours are required',
        ERR_REQUIRED_FULLTIME: 'Hours and minutes are required',
        ERR_PATTERN_MIN: 'Minutes format is invalid',
        ERR_PATTERN_HOUR: 'Hours format is invalid',
        ERR_PATTERN_FULLTIME: 'Hours and minutes format are invalid'
    },
    es: {
        ERR_MIN: 'El valor debe ser mayor o igual que ${param}',
        ERR_MAX: 'El valor debe ser menor o igual que ${param}',
        ERR_REQUIRED: 'Esta campo es requerido',
        ERR_EMAIL: 'El correo debe tener un formato válido',
        ERR_MIN_LENGTH: 'El valor debe tener al menos ${param} caracteres',
        ERR_MAX_LENGTH: 'El valor debe tener un máximo de ${param} caracteres',
        ERR_PATTERN: 'El formato del valor no es correcto.',
        DEFAULT: 'Este campo tiene un error desconocido',
        ERR_REQUIRED_TWO_DATA_RIGHT: 'El campo de la derecha es requerido',
        ERR_REQUIRED_TWO_DATA_LEFT: 'El campo de la izquierda es requerido',
        ERR_REQUIRED_MIN: 'Los minutos son requeridos',
        ERR_REQUIRED_HOUR: 'Las horas son requeridas',
        ERR_REQUIRED_FULLTIME: 'Las horas y los minutos son requeridos',
        ERR_PATTERN_MIN: 'El formato de los minutos es incorrecto',
        ERR_PATTERN_HOUR: 'El formato de las horas es incorrecto',
        ERR_PATTERN_FULLTIME: 'El formato de horas y minutos es incorrecto'
    }
};
var MESSAGES = {
    en: {
        SELECT_ADDRESS: 'Select address'
    },
    es: {
        SELECT_ADDRESS: 'Selecciones una dirección'
    }
};

var GsFormsService = /** @class */ (function () {
    function GsFormsService(formBuilder, translateService, http) {
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.http = http;
    }
    GsFormsService.prototype.buildErrors = function (validator, value) {
        switch (validator) {
            case GFieldValidatorType.MIN:
                return Validators.min(value);
            case GFieldValidatorType.MAX:
                return Validators.max(value);
            case GFieldValidatorType.REQUIRED:
                return Validators.required;
            case GFieldValidatorType.EMAIL:
                return Validators.email;
            case GFieldValidatorType.MIN_LENGTH:
                return Validators.minLength(value);
            case GFieldValidatorType.MAX_LENGTH:
                return Validators.maxLength(value);
            case GFieldValidatorType.PATTERN:
                return Validators.pattern(value);
        }
    };
    GsFormsService.prototype.setDefaultFormObject = function (field, formObject, hasValidators) {
        formObject[field.config.model] = [];
        formObject[field.config.model].push({
            value: field.config.value,
            disabled: false
        });
        var validators = [];
        var fields = field.config.validators;
        for (var validator in fields) {
            if (Object.prototype.hasOwnProperty.call(fields, validator) && fields[validator]) {
                validators.push(this.buildErrors(validator, fields[validator]));
            }
        }
        if (hasValidators) {
            formObject[field.config.model].push(Validators.compose(validators));
        }
        return formObject;
    };
    GsFormsService.prototype.buildForm = function (formField) {
        var e_1, _a;
        var formObject = new Object();
        try {
            for (var formField_1 = __values(formField), formField_1_1 = formField_1.next(); !formField_1_1.done; formField_1_1 = formField_1.next()) {
                var field = formField_1_1.value;
                if (field.config.model && !field.notWidget) {
                    this.setDefaultFormObject(field, formObject, field.config.validators ? true : false);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (formField_1_1 && !formField_1_1.done && (_a = formField_1.return)) _a.call(formField_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.formBuilder.group(formObject);
    };
    GsFormsService.prototype.fieldError = function (field) {
        var error = field.errors;
        if (error[GFieldValidatorType.MIN]) {
            return this.getValidationMessage('ERR_MIN', error[GFieldValidatorType.MIN].min);
        }
        else if (error[GFieldValidatorType.MAX]) {
            return this.getValidationMessage('ERR_MAX', error[GFieldValidatorType.MAX].max);
        }
        else if (error[GFieldValidatorType.REQUIRED]) {
            return this.getValidationMessage('ERR_REQUIRED');
        }
        else if (error[GFieldValidatorType.EMAIL]) {
            return this.getValidationMessage('ERR_EMAIL');
        }
        else if (error[GFieldValidatorType.MIN_LENGTH]) {
            return this.getValidationMessage('ERR_MIN_LENGTH', error[GFieldValidatorType.MIN_LENGTH].requiredLength);
        }
        else if (error[GFieldValidatorType.MAX_LENGTH]) {
            return this.getValidationMessage('ERR_MAX_LENGTH', error[GFieldValidatorType.MAX_LENGTH].requiredLength);
        }
        else if (error[GFieldValidatorType.PATTERN]) {
            return this.getValidationMessage('ERR_PATTERN');
        }
        else {
            return this.getValidationMessage('DEFAULT');
        }
    };
    GsFormsService.prototype.getValidationMessage = function (key, param) {
        var lang = this.translateService.currentLang;
        if (!lang) {
            console.warn("translateService.currentLang is not set, using default language: 'en'");
            lang = 'en';
        }
        var messageLang = VALIDATION_MESSAGES.en;
        if (!VALIDATION_MESSAGES[lang]) {
            console.warn("We don't have support for language " + lang + ". Please email us to hi@tavoohoh.com. Using default language: 'en'");
        }
        else {
            messageLang = VALIDATION_MESSAGES[lang];
        }
        var message = messageLang[key];
        if (param) {
            message = message.replace('${param}', param);
        }
        return message;
    };
    GsFormsService.prototype.getMessage = function (key, param) {
        var messageLang = !this.translateService.currentLang ? MESSAGES.en : MESSAGES[this.translateService.currentLang];
        var message = messageLang[key];
        if (param) {
            message = message.replace('${param}', param);
        }
        return message;
    };
    GsFormsService.prototype.getLang = function () {
        return this.translateService.getDefaultLang();
    };
    GsFormsService.prototype.uploadFileServices = function (url, method, file, paramName) {
        var formData = new FormData();
        formData.append(paramName, file);
        return this.http[method](url, formData);
    };
    /**
     * @description
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
    GsFormsService.prototype.mapFieldOptionValues = function (options, optionValue, optionText) {
        var mappedValues = options.map(function (obj) {
            return {
                value: obj[optionValue],
                text: obj[optionText]
            };
        });
        return mappedValues;
    };
    /**
     * @description
     * Patch form values
     *
     * @param formFields your `GFormFields`
     * @param formValues an object of values like `FormGroup` value.
     * The keys of `formValues` most match the model name of your `GFields`
     */
    GsFormsService.prototype.patchFormValues = function (formFields, formValues, resetForm, resetFields) {
        if (!resetFields) {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < formFields.length; i++) {
                formFields[i].config.value = null;
            }
        }
        if (!resetForm) {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < formFields.length; i++) {
                if (formValues[formFields[i].config.model]) {
                    formFields[i].config.value = formValues[formFields[i].config.model];
                }
            }
        }
        return formFields;
    };
    GsFormsService.prototype.getAddress = function (lan, lng, apikey) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lan + "," + lng + "&result_type=street_address&key=" + apikey);
    };
    GsFormsService.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: TranslateService },
        { type: HttpClient }
    ]; };
    GsFormsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GsFormsService_Factory() { return new GsFormsService(ɵɵinject(FormBuilder), ɵɵinject(TranslateService), ɵɵinject(HttpClient)); }, token: GsFormsService, providedIn: "root" });
    GsFormsService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GsFormsService);
    return GsFormsService;
}());

var GsGenericFieldComponent = /** @class */ (function () {
    function GsGenericFieldComponent(formsService) {
        this.formsService = formsService;
        this.fieldValidatorType = GFieldValidatorType;
    }
    GsGenericFieldComponent.prototype.validateField = function ($event) {
        return this.formGroup.controls[this.field.config.model].dirty && this.formGroup.controls[this.field.config.model].errors;
    };
    GsGenericFieldComponent.prototype.getFieldError = function ($event) {
        return this.formsService.fieldError(this.formGroup.controls[this.field.config.model]);
    };
    GsGenericFieldComponent.ctorParameters = function () { return [
        { type: GsFormsService }
    ]; };
    __decorate([
        Input()
    ], GsGenericFieldComponent.prototype, "field", void 0);
    __decorate([
        Input()
    ], GsGenericFieldComponent.prototype, "formGroup", void 0);
    GsGenericFieldComponent = __decorate([
        Component({
            template: ""
        })
    ], GsGenericFieldComponent);
    return GsGenericFieldComponent;
}());

var GsCheckboxComponent = /** @class */ (function (_super) {
    __extends(GsCheckboxComponent, _super);
    function GsCheckboxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GsCheckboxComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.field && changes.field.currentValue) {
            this.field = changes.field.currentValue;
        }
    };
    __decorate([
        Input()
    ], GsCheckboxComponent.prototype, "field", void 0);
    GsCheckboxComponent = __decorate([
        Component({
            selector: 'gs-checkbox',
            template: "<ng-container [formGroup]=\"formGroup\">\n  <div\n    class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label class=\"gs-field-box gs-input-check-box\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <div class=\"gs-input-check\">\n        <input\n          class=\"gs-input-check-checkbox\"\n          type=\"checkbox\"\n          [name]=\"field.config.model\"\n          [formControlName]=\"field.config.model\"\n          [checked]=\"formGroup.value[field.config.model]\">\n        <div class=\"gs-input-check-checkmark\" [class.gs-input-check-checked]=\"formGroup.value[field.config.model]\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n            <path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/>\n          </svg>\n        </div>\n      </div>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-input-check-box{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-input-check-box .gs-input-check{height:20px}.gs-input-check-box .gs-input-check-checkbox{position:absolute;opacity:0;cursor:pointer;height:0;width:0;padding:0;margin:0;pointer-events:none}.gs-input-check-box .gs-input-check-checkmark{display:-ms-grid;display:grid;height:20px;width:20px;padding:0;outline:0;border:none;background-color:#b8b4b4;cursor:pointer}.gs-input-check-box .gs-input-check-checkmark svg{position:relative;display:none;-ms-grid-row-align:center;align-self:center;height:12.5px;width:12.5px;margin:0 auto;fill:#fff}.gs-input-check-box .gs-input-check-checkmark.gs-input-check-checked{background:#332927}.gs-input-check-box .gs-input-check-checkmark.gs-input-check-checked svg{display:block}"]
        })
    ], GsCheckboxComponent);
    return GsCheckboxComponent;
}(GsGenericFieldComponent));

var GsCurrencyInputComponent = /** @class */ (function (_super) {
    __extends(GsCurrencyInputComponent, _super);
    function GsCurrencyInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = '';
        _this.fieldValidatorType = GFieldValidatorType;
        return _this;
    }
    GsCurrencyInputComponent.prototype.ngOnChanges = function (changes) {
        var location = null;
        if (changes.field && changes.field.currentValue.config.country) {
            location = LOCATION[changes.field.currentValue.config.country];
        }
        else if (changes.countryGlobal && changes.countryGlobal.currentValue) {
            location = LOCATION[changes.countryGlobal.currentValue];
        }
        else {
            return this.returnBuildingError();
        }
        this.prefix = location.currencyFormat.symbol;
        this.suffix = location.currencyFormat.code;
        this.thousandsSeparator = location.currencyFormat.thousands;
        this.decimalSeparator = location.currencyFormat.decimal;
        this.precision = location.currencyFormat.precision;
        if (changes.field.currentValue.config.value) {
            this.value = changes.field.currentValue.config.value.toString().replace('.', '');
        }
        this.formatCurrency(false);
    };
    GsCurrencyInputComponent.prototype.formatCurrency = function (keyup) {
        var _this = this;
        var inputVal = this.value || '0';
        // mark input as dirty
        if (keyup) {
            this.formGroup.controls[this.field.config.model].markAsDirty();
        }
        // remove any leading zeros
        if (inputVal.substring(0, 1) === '0') {
            inputVal = inputVal.replace(/^[0|\D]*/, '');
        }
        // format decimal if applies
        if (!inputVal || inputVal.length === 1 && inputVal.substring(0, 1) === '0') {
            var emptyDecimals = '0';
            if (this.precision > 0) {
                for (var index = 0; index < this.precision; index++) {
                    emptyDecimals = emptyDecimals + '0';
                }
            }
            inputVal = emptyDecimals;
        }
        var cleanValue = inputVal.replace(/\D/g, '');
        var decimals = null;
        var thousands = null;
        // format number as currency
        if (this.precision > 0) {
            decimals = cleanValue.slice(this.precision - this.precision * 2);
            if (decimals.length < this.precision) {
                for (var index = 0; index < this.precision - Number(decimals); index++) {
                    decimals = '0' + decimals;
                }
                thousands = '0';
            }
            else {
                thousands = cleanValue.substring(0, cleanValue.length - this.precision) || '0';
            }
        }
        else {
            thousands = cleanValue;
        }
        var formattedThousands = thousands.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        var controlValue = "" + thousands + (decimals ? '.' + decimals : '');
        this.value = formattedThousands + (decimals ? this.decimalSeparator + decimals : '');
        setTimeout(function () {
            _this.formGroup.controls[_this.field.config.model].patchValue(Number(controlValue));
            _this.formGroup.controls[_this.field.config.model].updateValueAndValidity();
        });
    };
    GsCurrencyInputComponent.prototype.returnBuildingError = function () {
        return console.error('GS Form building err: Please provide country for currency field:' + '\n\n' +
            'In your component make sure you are passing a valid country to `GCurrencyField`:' + '\n\n' +
            '\xa0' + 'public formFields: GFormFields = [' + '\n' +
            '\xa0\xa0' + 'new GCurrencyField({' + '\n' +
            '\xa0\xa0\xa0' + "model: 'currency'," + '\n' +
            '\xa0\xa0\xa0' + "country: GFieldCountryCode.CO" + '\n' +
            '\xa0\xa0\xa0' + '// other properties' + '\n' +
            '\xa0\xa0' + '}),' + '\n' +
            '\xa0' + '];' + '\n\n' +
            'Or In your component make sure you are passing a valid country to `GFormOptions`:' + '\n\n' +
            '\xa0' + 'public formOptions: GFormOptions = {' + '\n' +
            '\xa0\xa0' + 'country: GFieldCountryCode.CO' + '\n' +
            '\xa0\xa0' + '// other properties' + '\n' +
            '\xa0' + '};' + '\n\n');
    };
    __decorate([
        Input()
    ], GsCurrencyInputComponent.prototype, "field", void 0);
    __decorate([
        Input()
    ], GsCurrencyInputComponent.prototype, "countryGlobal", void 0);
    GsCurrencyInputComponent = __decorate([
        Component({
            selector: 'gs-currency-input',
            template: "<ng-container>\n  <div\n    class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label\n      class=\"gs-field-box\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n  \n      <div class=\"gs-field-currency\">\n        <span class=\"gs-field-currency-symbol\">{{ prefix }}</span>\n        <input\n          #inputElement\n          class=\"gs-field-input gs-field-currency-input\"\n          type=\"text\"\n          [autocomplete]=\"field.config.autocomplete || 'off'\"\n          [id]=\"field.config.model\"\n          [placeholder]=\"field.config.placeholder || field.config.label || field.config.model | translate\"\n          [(ngModel)]=\"value\"\n          (keyup)=\"formatCurrency(true)\" />\n        <span class=\"gs-field-currency-code\">{{ suffix }}</span>\n      </div>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>\n",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-field-currency{display:-ms-grid;display:grid;-ms-grid-columns:-webkit-min-content auto -webkit-min-content;-ms-grid-columns:min-content auto min-content;grid-template-columns:-webkit-min-content auto -webkit-min-content;grid-template-columns:min-content auto min-content}.gs-field-currency .gs-field-currency-input{background:0 0;border:none;outline:0;text-align:right;padding-right:.5rem;grid-row:unset;grid-column:unset}.gs-field-currency .gs-field-currency-code,.gs-field-currency .gs-field-currency-symbol{-ms-grid-row-align:center;align-self:center}"]
        })
    ], GsCurrencyInputComponent);
    return GsCurrencyInputComponent;
}(GsGenericFieldComponent));

var MONTHS = {
    en: [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ],
    es: [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
    ],
    pr: [
        'janeiro',
        'fevereiro',
        'marcha',
        'abril',
        'pode',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ]
};
var WEEKDAYS = {
    en: [
        'm', 't', 'w', 't', 'f', 's', 's'
    ],
    es: [
        'l', 'm', 'm', 'j', 'v', 's', 'd'
    ],
    pr: [
        's', 't', 'q', 'q', 's', 's', 'd'
    ]
};
var ShowSelector;
(function (ShowSelector) {
    ShowSelector["DAY"] = "day";
    ShowSelector["MONTH"] = "month";
    ShowSelector["YEAR"] = "year";
})(ShowSelector || (ShowSelector = {}));
var GsDatePickerComponent = /** @class */ (function (_super) {
    __extends(GsDatePickerComponent, _super);
    function GsDatePickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.daysInPreviousMonthWeek = [];
        _this.daysInCurrentMonth = [];
        _this.daysInNextMonthWeek = [];
        // selected day
        _this.selectedDate = new Date();
        _this.date = new Date();
        // selectors UI
        _this.showSelector = ShowSelector.DAY;
        _this.showSelectorType = ShowSelector;
        _this.yearUiArray = new Array(12);
        _this.yearMultiplier = 0;
        _this.showDatePickerSelector = false;
        return _this;
    }
    GsDatePickerComponent.prototype.ngOnInit = function () {
        this.lang = this.formsService.getLang() || 'en';
        this.months = MONTHS[this.lang];
        this.weekdays = WEEKDAYS[this.lang];
    };
    GsDatePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.field.currentValue.config && changes.field.currentValue.config.value) {
            this.dateValue = changes.field.currentValue.config.value.toString();
            if (this.dateValue.split('-')) {
                var date = this.dateValue.split('-');
                this.selectedDate = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]));
                this.date = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]));
            }
        }
        this.setCalendar();
    };
    GsDatePickerComponent.prototype.setCalendar = function () {
        this.currentMonth = this.date.getUTCMonth();
        this.currentYear = this.date.getUTCFullYear();
        this.getDaysInCalendar();
    };
    GsDatePickerComponent.prototype.changeMonth = function (next) {
        var _this = this;
        this.date.setMonth(next ? this.date.getUTCMonth() + 1 : this.date.getUTCMonth() - 1);
        this.currentMonth = this.date.getUTCMonth();
        this.currentYear = this.date.getUTCFullYear();
        this.setCalendar();
        setTimeout(function () {
            _this.showDatePickerSelector = true;
        });
    };
    GsDatePickerComponent.prototype.navigateSelectors = function (next) {
        if (this.showSelector === ShowSelector.YEAR) {
            return this.changeYear(next);
        }
        else {
            return this.changeMonth(next);
        }
    };
    GsDatePickerComponent.prototype.changeYear = function (next) {
        this.yearMultiplier = next ? this.yearMultiplier + 12 : this.yearMultiplier - 12;
    };
    GsDatePickerComponent.prototype.getDaysInCalendar = function () {
        // days in current month
        var daysOfCurrentMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getUTCDate();
        var currentMonthDays = [];
        for (var i = 0; i < daysOfCurrentMonth; i++) {
            if (this.selectedDate.getUTCFullYear() === this.date.getUTCFullYear() &&
                this.selectedDate.getUTCMonth() === this.date.getUTCMonth() &&
                i + 1 === this.selectedDate.getUTCDate()) {
                currentMonthDays.push({
                    day: i + 1,
                    status: 'selected'
                });
            }
            else {
                currentMonthDays.push({
                    day: i + 1,
                    status: 'available'
                });
            }
        }
        this.daysInCurrentMonth = currentMonthDays;
        // dasy in previous month week
        this.daysInPreviousMonthWeek = this.getPreviousMonth();
        // days in next month week
        this.daysInNextMonthWeek = this.getNextMonth();
    };
    GsDatePickerComponent.prototype.getPreviousMonth = function () {
        var daysOfBeforeMonth = new Date(this.currentYear, this.currentMonth, 0).getUTCDate();
        var firstDayOfCurrentMonth = new Date(this.currentYear, this.currentMonth, 0).getDay();
        var previousWeekDays = [];
        for (var i = 0; i < firstDayOfCurrentMonth; i++) {
            previousWeekDays.push(daysOfBeforeMonth - i);
        }
        return previousWeekDays.reverse();
    };
    GsDatePickerComponent.prototype.getNextMonth = function () {
        var lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 2, 0).getDay();
        var nextWeekDays = [];
        for (var i = 0; i < (7 - lastDayOfMonth); i++) {
            nextWeekDays.push(i + 1);
        }
        return nextWeekDays;
    };
    GsDatePickerComponent.prototype.selectDate = function (day) {
        this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
        this.dateValue = this.formatDate(this.selectedDate);
        this.formGroup.controls[this.field.config.model].patchValue(this.dateValue);
        this.formGroup.controls[this.field.config.model].updateValueAndValidity();
        this.getDaysInCalendar();
        this.toggleDatePickerSelector(false);
    };
    GsDatePickerComponent.prototype.selectMonth = function (month) {
        var _this = this;
        this.date.setMonth(month);
        this.currentMonth = this.date.getUTCMonth();
        this.getDaysInCalendar();
        this.showSelector = ShowSelector.DAY;
        setTimeout(function () {
            _this.showDatePickerSelector = true;
        });
    };
    GsDatePickerComponent.prototype.selectYear = function (year) {
        var _this = this;
        this.date.setFullYear(year);
        this.currentYear = this.date.getUTCFullYear();
        this.getDaysInCalendar();
        this.showSelector = ShowSelector.MONTH;
        setTimeout(function () {
            _this.showDatePickerSelector = true;
        });
    };
    GsDatePickerComponent.prototype.toggleSelector = function (selector) {
        var _this = this;
        this.showSelector = selector;
        setTimeout(function () {
            _this.showDatePickerSelector = true;
        });
    };
    GsDatePickerComponent.prototype.toggleDatePickerSelector = function (value) {
        if (value === void 0) { value = !this.showDatePickerSelector; }
        this.showDatePickerSelector = value;
    };
    GsDatePickerComponent.prototype.disableKeys = function () {
        return false;
    };
    GsDatePickerComponent.prototype.formatDate = function (date) {
        var year = date.getUTCFullYear();
        var month = (date.getUTCMonth() + 1).toString();
        var day = date.getUTCDate().toString();
        if (month.length < 2) {
            month = "0" + month;
        }
        if (day.length < 2) {
            day = "0" + day;
        }
        return [year, month, day].join('-');
    };
    GsDatePickerComponent.prototype.resetField = function () {
        this.dateValue = null;
    };
    __decorate([
        Input()
    ], GsDatePickerComponent.prototype, "field", void 0);
    GsDatePickerComponent = __decorate([
        Component({
            selector: 'gs-datepicker',
            template: "<div class=\"gs-field\" \n  [class.gs-field-has-error]=\"validateField()\"\n  gsClickOutside \n  (gsClickOutside)=\"toggleDatePickerSelector(false)\">\n  \n  <label class=\"gs-field-box\"\n    [class.gs-form-field-box-full]=\"field.config.label\">\n\n    <span\n      class=\"gs-field-label\"\n      *ngIf=\"field.config.label\">\n      {{ field.config.label | translate }}\n    </span>\n\n    <input\n      #inputElement\n      class=\"gs-field-input gs-field-input-date\"\n      type=\"text\"\n      [id]=\"field.config.model\"\n      [placeholder]=\"'YYYY-MM-DD'\"\n      [(ngModel)]=\"dateValue\"\n      (click)=\"toggleDatePickerSelector()\"\n      (keydown)=\"disableKeys()\"\n      (keyup)=\"disableKeys()\"\n      (keypress)=\"disableKeys()\"\n    />\n  </label>\n\n  <div class=\"gs-datepicker\" *ngIf=\"showDatePickerSelector\">\n    \n    <div class=\"gs-datepicker-header\">\n      <!-- arrow-left -->\n      <button \n        type=\"button\" \n        class=\"gs-datepicker-arrow-left\" \n        (click)=\"navigateSelectors(false)\">\n          <svg \n            xmlns=\"http://www.w3.org/2000/svg\" \n            width=\"24\" \n            height=\"24\" \n            viewBox=\"0 0 24 24\"        \n            *ngIf=\"showSelector !== showSelectorType.MONTH\">\n              <path d=\"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\"/>\n          </svg>\n      </button>\n  \n      <span class=\"gs-datepicker-selector\">\n        <!-- day selector header -->\n        <button\n          type=\"button\"\n          *ngIf=\"showSelector === showSelectorType.DAY\"\n          (click)=\"toggleSelector(showSelectorType.MONTH)\">\n          {{ months[currentMonth] }} {{ currentYear }}\n        </button>\n  \n        <!-- month selector header -->\n        <button\n          type=\"button\"\n          *ngIf=\"showSelector === showSelectorType.MONTH\"\n          (click)=\"toggleSelector(showSelectorType.YEAR)\">\n          {{ currentYear }}\n        </button>\n  \n        <!-- year selector header -->\n        <button\n          type=\"button\"\n          *ngIf=\"showSelector === showSelectorType.YEAR\">\n          {{ currentYear + yearMultiplier }} - {{ currentYear + yearMultiplier + 11 }}\n        </button>\n      </span>\n  \n      <!-- arrow-right -->\n      <button \n        type=\"button\" \n        class=\"gs-datepicker-arrow-right\"\n        (click)=\"navigateSelectors(true)\">\n          <svg \n            xmlns=\"http://www.w3.org/2000/svg\" \n            width=\"24\" \n            height=\"24\" \n            viewBox=\"0 0 24 24\"          \n            *ngIf=\"showSelector !== showSelectorType.MONTH\">\n              <path d=\"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z\"/>\n          </svg>\n      </button>\n    </div>\n  \n    <!-- days selector --> \n    <div class=\"gs-datepicker-day-selector\" *ngIf=\"showSelector === showSelectorType.DAY\">\n      <div class=\"gs-datepicker-weekdays\">\n        <span *ngFor=\"let day of weekdays\">\n          {{ day }}\n        </span>\n      </div>\n  \n      <div class=\"gs-datepicker-days\" *ngIf=\"daysInCurrentMonth\">\n        <!-- previous month -->\n        <span *ngFor=\"let previousDay of daysInPreviousMonthWeek\"\n          class=\"gs-datepicker-previous-days\" \n          (click)=\"changeMonth(false)\">\n          {{ previousDay }}\n        </span>\n  \n        <!-- current and available days for current month -->\n        <span *ngFor=\"let date of daysInCurrentMonth\" \n          class=\"gs-datepicker-current-days\"\n          [class.selected-day]=\"date.status === 'selected'\"\n          (click)=\"selectDate(date.day)\">\n            {{ date.day }}\n        </span>\n  \n        <!-- next month -->\n        <span *ngFor=\"let nextDay of daysInNextMonthWeek\" \n          class=\"gs-datepicker-next-days\"\n          (click)=\"changeMonth(true)\">\n          {{ nextDay }}\n        </span>\n      </div>\n    </div>\n  \n    <!-- months selector --> \n    <div class=\"gs-datepicker-month-selector\" *ngIf=\"showSelector === showSelectorType.MONTH\">\n      <span *ngFor=\"let month of months; let i = index;\" (click)=\"selectMonth(i)\">\n        {{ month | slice:0:3 }}\n      </span>\n    </div>\n  \n    <!-- years selector --> \n    <div class=\"gs-datepicker-month-selector\" *ngIf=\"showSelector === showSelectorType.YEAR\">\n      <span\n        *ngFor=\"let x of yearUiArray; let i = index;\"\n        (click)=\"selectYear(currentYear + yearMultiplier + i)\">\n        {{ currentYear + yearMultiplier + i }}\n      </span>\n    </div>\n  </div>\n\n  <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n    {{ getFieldError(field.config.model) | translate }}\n  </span>\n</div>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px;position:relative}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-datepicker{border:2px solid #e5e5e4;box-shadow:0 10px 10px rgba(0,0,0,.03),0 5px 5px rgba(0,0,0,.01);position:absolute;color:#706967;background:#fff;border-radius:1rem;top:53px;width:100%;overflow:hidden;z-index:100}.gs-datepicker .gs-datepicker-header{display:-ms-grid;display:grid;-ms-grid-columns:24px auto 24px;grid-template-columns:24px auto 24px;gap:6px;padding:8px;background-color:#332927}.gs-datepicker .gs-datepicker-header *{-ms-grid-row-align:center;align-self:center}.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-left,.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-right,.gs-datepicker .gs-datepicker-header .gs-datepicker-selector{text-align:center;-ms-grid-row-align:center;align-self:center;cursor:pointer}.gs-datepicker .gs-datepicker-header .gs-datepicker-selector button{text-transform:capitalize;cursor:pointer;padding:10px 0;line-height:1;width:100%;margin:0 auto;background-color:transparent;border:none;outline:0;color:#fff}.gs-datepicker .gs-datepicker-header .gs-datepicker-selector button:hover{opacity:.8}.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-left,.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-right{border:none;background:0 0;outline:0;cursor:pointer;line-height:1}.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-left svg,.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-right svg{fill:#fff;width:16px}.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-left:hover,.gs-datepicker .gs-datepicker-header .gs-datepicker-arrow-right:hover{opacity:.8}.gs-datepicker .gs-datepicker-day-selector,.gs-datepicker .gs-datepicker-month-selector,.gs-datepicker .gs-datepicker-year-selector{display:-ms-grid;display:grid;min-height:230px}.gs-datepicker .gs-datepicker-day-selector{padding:1rem}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-weekdays{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[7];grid-template-columns:repeat(7,1fr);height:24px}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-weekdays span{text-align:center;-ms-grid-row-align:center;align-self:center;font-weight:700;text-transform:uppercase}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[7];grid-template-columns:repeat(7,1fr)}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-current-days,.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-next-days,.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-previous-days{padding:4px;text-align:center;-ms-grid-row-align:center;align-self:center;font-size:.8rem;border:1px solid transparent}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-next-days,.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-previous-days{opacity:.4}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-current-days{cursor:pointer}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-current-days:hover{color:#fff;background-color:#ff2426;opacity:.8}.gs-datepicker .gs-datepicker-day-selector .gs-datepicker-days .gs-datepicker-selected-day{color:#fff;background-color:#ff2426;border:1px solid #ff2426}.gs-datepicker .gs-datepicker-month-selector,.gs-datepicker .gs-datepicker-year-selector{-ms-grid-columns:(1fr)[4];grid-template-columns:repeat(4,1fr)}.gs-datepicker .gs-datepicker-month-selector span,.gs-datepicker .gs-datepicker-year-selector span{padding:24px 0;text-transform:uppercase;letter-spacing:2px;cursor:pointer;text-align:center}.gs-datepicker .gs-datepicker-month-selector span:hover,.gs-datepicker .gs-datepicker-year-selector span:hover{color:#fff;background-color:#ff2426;opacity:.8}"]
        })
    ], GsDatePickerComponent);
    return GsDatePickerComponent;
}(GsGenericFieldComponent));

var GsDropdownComponent = /** @class */ (function (_super) {
    __extends(GsDropdownComponent, _super);
    function GsDropdownComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GsDropdownComponent.prototype.ngOnChanges = function (changes) {
        if (changes.fieldOption && changes.fieldOption.currentValue) {
            this.fieldOption = changes.fieldOption.currentValue;
        }
        else {
            this.fieldOption = this.field.config.optionValues;
        }
        if (changes.field && changes.field.currentValue.config && !changes.field.currentValue.config.value) {
            this.field.config.value = null;
            this.dropdownTextValue = this.field.config.placeholder || this.field.config.label || this.field.config.model;
        }
        else if (changes.field && changes.field.currentValue.config && changes.field.currentValue.config.value) { // if changes has a value
            this.field.config.value = changes.field.currentValue.config.value;
            this.dropdownTextValue = this.setDropdownValue();
        }
        this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
        this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    };
    GsDropdownComponent.prototype.changeValue = function (text, value) {
        this.dropdownTextValue = text;
        this.field.config.value = value;
        this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
        this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    };
    GsDropdownComponent.prototype.setDropdownValue = function () {
        var _this = this;
        var option = this.fieldOption.find(function (elem) { return elem.value === _this.field.config.value; });
        return option && option.text ? option.text :
            this.field.config.placeholder || this.field.config.label || this.field.config.model;
    };
    GsDropdownComponent.prototype.resetField = function () {
        this.dropdownTextValue = this.field.config.placeholder || this.field.config.label || this.field.config.model;
    };
    __decorate([
        Input()
    ], GsDropdownComponent.prototype, "field", void 0);
    __decorate([
        Input()
    ], GsDropdownComponent.prototype, "fieldOption", void 0);
    GsDropdownComponent = __decorate([
        Component({
            selector: 'gs-dropdown',
            template: "<ng-container [formGroup]=\"formGroup\">\n  <div\n    class=\"gs-field\"\n    [class.gs-field-has-error]=\"validateField()\">\n\n    <label\n      class=\"gs-field-box gs-input-select-box gs-field-box-icon\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n\n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <div class=\"gs-input-select\">\n        <div class=\"gs-input-select-value\" data-value={selectValue.value}>\n          {{ dropdownTextValue | translate }}\n        </div>\n        <input class=\"gs-input-select-checkbox\" type=\"checkbox\" />\n        <div class=\"gs-input-select-options-background\"></div>\n        <div class=\"gs-input-select-options\">\n          <div\n            *ngFor=\"let option of fieldOption\"\n            class=\"gs-input-select-option\"\n            [class.gs-input-select-option-active]=\"option.value === formGroup.controls[field.config.model].value\"\n            (click)=\"changeValue(option.text, option.value)\">\n            {{ option.text | translate }}\n          </div>\n        </div>\n      </div>\n\n      <svg class=\"gs-field-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z\" />\n      </svg>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>\n",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-input-select-box{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.gs-input-select-box .gs-input-select{position:relative}.gs-input-select-box .gs-input-select .gs-input-select-options-background{cursor:default;opacity:0;background-color:transparent;height:100vh;width:100vw;display:none;position:fixed;top:0;bottom:0;left:0;right:0;z-index:900;pointer-events:auto}.gs-input-select-box .gs-input-select .gs-input-select-options{border:2px solid #e5e5e4;box-shadow:0 10px 10px rgba(0,0,0,.03),0 5px 5px rgba(0,0,0,.01);display:none;position:absolute;background:#fff;border-radius:1rem;top:32px;left:calc(-1rem - 2px);width:calc(100% + (2 * 1rem) + 24px);overflow-x:hidden;overflow-y:auto;max-height:180px;z-index:900}.gs-input-select-box .gs-input-select .gs-input-select-options .gs-input-select-option{cursor:pointer;position:relative;display:-webkit-box;display:flex;height:51px;padding:.6rem 1rem;-webkit-box-align:center;align-items:center;border-bottom:1px solid #e5e5e4;z-index:901}.gs-input-select-box .gs-input-select .gs-input-select-options .gs-input-select-option.gs-input-select-option-active,.gs-input-select-box .gs-input-select .gs-input-select-options .gs-input-select-option:hover{background-color:#e5e5e4}.gs-input-select-box .gs-input-select .gs-input-select-checkbox{display:none}.gs-input-select-box .gs-input-select .gs-input-select-checkbox:checked~.gs-input-select-options,.gs-input-select-box .gs-input-select .gs-input-select-checkbox:checked~.gs-input-select-options-background{display:block}.gs-input-select-box .gs-input-select .gs-input-select-value{display:block;font-weight:600;font-size:1rem;line-height:1;padding:.1rem 0 0}.gs-input-select-box .gs-input-select .gs-input-select-value::-webkit-input-placeholder{color:#332927;opacity:1;font-weight:400}.gs-input-select-box .gs-input-select .gs-input-select-value::-moz-placeholder{color:#332927;opacity:1;font-weight:400}.gs-input-select-box .gs-input-select .gs-input-select-value::-ms-input-placeholder{color:#332927;opacity:1;font-weight:400}.gs-input-select-box .gs-input-select .gs-input-select-value::placeholder{color:#332927;opacity:1;font-weight:400}"]
        })
    ], GsDropdownComponent);
    return GsDropdownComponent;
}(GsGenericFieldComponent));

var GsNumberInputComponent = /** @class */ (function (_super) {
    __extends(GsNumberInputComponent, _super);
    function GsNumberInputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GsNumberInputComponent.prototype.setPresicion = function (input) {
        var value = input.value;
        var pointIndex = value.indexOf('.');
        if (pointIndex >= 0) {
            var precision = this.field.config.precision || 3;
            var valueLeft = value.substr(0, pointIndex);
            var valueRight = value.substr(pointIndex, precision);
            input.value = valueLeft + valueRight;
        }
        else {
            input.value = value;
        }
    };
    __decorate([
        Input()
    ], GsNumberInputComponent.prototype, "field", void 0);
    GsNumberInputComponent = __decorate([
        Component({
            selector: 'gs-number-input',
            template: "<ng-container [formGroup]=\"formGroup\">\n  <div\n    class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label\n      class=\"gs-field-box\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <input\n        class=\"gs-field-input\"\n        type=\"text\"\n        inputmode=\"numeric\"\n        autocomplete=\"off\"\n        [decimal]=\"field.config.decimal\"\n        [autocomplete]=\"field.config.autocomplete || 'off'\"\n        [id]=\"field.config.model\"\n        [min]=\"field.config.validators ? field.config.validators[fieldValidatorType.MIN] : null\"\n        [max]=\"field.config.validators ? field.config.validators[fieldValidatorType.MAX] : null\"\n        [formControlName]=\"field.config.model\"\n        [placeholder]=\"field.config.placeholder || field.config.label || field.config.model | translate\"\n        [value]=\"field.config.value || null\"\n        (input)=\"setPresicion($event.target)\"\n        gsDigitOnly>\n\n        <!-- symbol -->\n        <div class=\"gs-form-field_symbol\" *ngIf=\"field.config.symbol\">\n          {{field.config.symbol}}\n        </div>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}"]
        })
    ], GsNumberInputComponent);
    return GsNumberInputComponent;
}(GsGenericFieldComponent));

var GsPasswordInputComponent = /** @class */ (function (_super) {
    __extends(GsPasswordInputComponent, _super);
    function GsPasswordInputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GsPasswordInputComponent.prototype.toggleInputType = function () {
        this.toggle = !this.toggle;
    };
    __decorate([
        Input()
    ], GsPasswordInputComponent.prototype, "field", void 0);
    GsPasswordInputComponent = __decorate([
        Component({
            selector: 'gs-password-input',
            template: "<ng-container [formGroup]=\"formGroup\">\n  <div\n    class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label\n      class=\"gs-field-box gs-field-box-icon\"\n      [class.gs-field-box-full]=\"field.config.label\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <input\n        class=\"gs-field-input\"\n        [autocomplete]=\"field.config.autocomplete || 'off'\"\n        [type]=\"toggle ? 'text' : 'password'\"\n        [id]=\"field.config.model\"\n        [minlength]=\"field.config.validators ? field.config.validators[fieldValidatorType.MIN_LENGTH] : null\"\n        [maxlength]=\"field.config.validators ? field.config.validators[fieldValidatorType.MAX_LENGTH] : null\"\n        [formControlName]=\"field.config.model\"\n        [placeholder]=\"field.config.placeholder || field.config.label || field.config.model | translate\"\n        [value]=\"field.config.value || null\">\n\n      <svg class=\"gs-field-icon\" (click)=\"toggleInputType()\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path *ngIf=\"toggle\" d=\"M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z\"/>\n        <path *ngIf=\"!toggle\" d=\"M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z\"/>\n      </svg>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.grid{display:-ms-grid;display:grid;-ms-grid-columns:auto -webkit-max-content;-ms-grid-columns:auto max-content;grid-template-columns:auto -webkit-max-content;grid-template-columns:auto max-content;padding-top:0;padding-bottom:0}.grid input{background:0 0;border:none;outline:0;padding-left:0;padding-right:0}.grid svg{cursor:pointer;-ms-grid-row-align:center;align-self:center;width:16px;fill:var(--gs-color-neutral,#706967)}"]
        })
    ], GsPasswordInputComponent);
    return GsPasswordInputComponent;
}(GsGenericFieldComponent));

var GsPhoneInputComponent = /** @class */ (function (_super) {
    __extends(GsPhoneInputComponent, _super);
    function GsPhoneInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showCountryOptions = false;
        _this.value = '';
        _this.touched = false;
        _this.invalid = false;
        _this.fieldValidatorType = GFieldValidatorType;
        return _this;
    }
    GsPhoneInputComponent.prototype.ngOnChanges = function (changes) {
        var location = null;
        if (changes.field && changes.field.currentValue.config.country) {
            location = LOCATION[changes.field.currentValue.config.country];
        }
        else if (changes.countryGlobal && changes.countryGlobal.currentValue) {
            location = LOCATION[changes.countryGlobal.currentValue];
        }
        else {
            return this.returnBuildingError();
        }
        this.phoneMask = location.phoneFormat.mask;
        if (changes.field.currentValue.config.value) {
            var phoneValue = void 0;
            if (changes.field.currentValue.config.value.startsWith(location.phoneFormat.code, 0)) {
                phoneValue = changes.field.currentValue.config.value.substring(2);
            }
            else {
                phoneValue = changes.field.currentValue.config.value;
            }
            if (phoneValue.phone) {
                this.value = phoneValue.phone.toString();
                this.country = phoneValue.code || location.phoneFormat.code;
                this.countryCode = phoneValue.alpha2Code.toLowerCase() || location.country.alpha2Code.toLowerCase();
            }
            else {
                this.value = phoneValue.toString();
                this.country = location.phoneFormat.code;
                this.countryCode = location.country.alpha2Code.toLowerCase();
            }
            this.updatePhoneMask(this.countryCode);
        }
        else {
            this.country = location.phoneFormat.code;
            this.countryCode = location.country.alpha2Code.toLowerCase();
            this.updatePhoneMask(this.countryCode);
        }
        this.editCountry = changes.field.currentValue.config.editCountry;
        this.countryCodeOptions = this.setCountryCodeOptions();
        this.formatPhone(false, false);
    };
    GsPhoneInputComponent.prototype.formatPhone = function (keyup, touched) {
        if (touched === void 0) { touched = true; }
        this.touched = touched;
        var inputVal = this.value || '';
        this.invalid = false;
        // mark input as dirty
        if (keyup) {
            this.formGroup.controls[this.field.config.model].markAsDirty();
        }
        var j = 0;
        var pattern = this.phoneMask;
        var sign1 = '0';
        var sign2 = ' ';
        var patternLength = pattern.replace(/-/gi, '').length;
        var oldString = inputVal.replace(/\D/g, '');
        var newString = [];
        var sRegEx = new RegExp(sign2, 'gi');
        var cleanString = oldString.replace(sRegEx, '');
        if (cleanString.length > patternLength) {
            return oldString.substring(0, pattern.length);
        }
        for (var i = 0; i < pattern.length; i++) {
            if (j === cleanString.length) {
                break;
            }
            if (pattern[i] === sign1) {
                newString[i] = cleanString[j];
                j++;
            }
            else if (pattern[i] === sign2) {
                newString[i] = sign2;
            }
        }
        this.value = newString.join('');
        if (inputVal === '') {
            this.formGroup.controls[this.field.config.model].patchValue(null);
            return;
        }
        else {
            this.invalid = inputVal.length < this.phoneMask.length || inputVal.length > this.phoneMask.length ? true : false;
            var controlValue = inputVal;
            this.formGroup.controls[this.field.config.model].patchValue({
                code: this.country,
                alpha2Code: this.countryCode,
                phone: controlValue.replace(/\s/g, '')
            });
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
        }
    };
    GsPhoneInputComponent.prototype.updatePhoneMask = function (country) {
        var location = LOCATION[country];
        this.phoneMask = location.phoneFormat.mask;
        this.countryCode = location.country.alpha2Code.toLowerCase();
        this.country = location.phoneFormat.code;
        this.formatPhone(false);
        this.showCountryOptions = false;
    };
    GsPhoneInputComponent.prototype.setCountryCodeOptions = function () {
        var countryCodeOptions = [];
        for (var key in LOCATION) {
            if (LOCATION.hasOwnProperty(key)) {
                if (!LOCATION[key].disabled) {
                    countryCodeOptions.push({
                        code: LOCATION[key].phoneFormat.code,
                        country: LOCATION[key].country.alpha2Code.toLowerCase()
                    });
                }
            }
        }
        return countryCodeOptions;
    };
    GsPhoneInputComponent.prototype.toggleCountryOptions = function (close) {
        this.showCountryOptions = close ? false : !this.showCountryOptions;
    };
    GsPhoneInputComponent.prototype.errorText = function (error) {
        return this.formsService.getValidationMessage(error);
    };
    GsPhoneInputComponent.prototype.returnBuildingError = function () {
        return console.error('GS Form building err: Please provide country for phone field:' + '\n\n' +
            'In your component make sure you are passing a valid country to `GPhoneField`:' + '\n\n' +
            '\xa0' + 'public formFields: GFormFields = [' + '\n' +
            '\xa0\xa0' + 'new GPhoneField({' + '\n' +
            '\xa0\xa0\xa0' + "model: 'phone'," + '\n' +
            '\xa0\xa0\xa0' + "country: GFieldCountryCode.CO" + '\n' +
            '\xa0\xa0\xa0' + '// other properties' + '\n' +
            '\xa0\xa0' + '}),' + '\n' +
            '\xa0' + '];' + '\n\n' +
            'Or In your component make sure you are passing a valid country to `GFormOptions`:' + '\n\n' +
            '\xa0' + 'public formOptions: GFormOptions = {' + '\n' +
            '\xa0\xa0' + 'country: GFieldCountryCode.CO' + '\n' +
            '\xa0\xa0' + '// other properties' + '\n' +
            '\xa0' + '};' + '\n\n');
    };
    __decorate([
        Input()
    ], GsPhoneInputComponent.prototype, "field", void 0);
    __decorate([
        Input()
    ], GsPhoneInputComponent.prototype, "countryGlobal", void 0);
    __decorate([
        ViewChild('inputElement', { static: true })
    ], GsPhoneInputComponent.prototype, "inputElement", void 0);
    GsPhoneInputComponent = __decorate([
        Component({
            selector: 'gs-phone-input',
            template: "<div class=\"gs-field\" \n  [class.gs-field-has-error]=\"validateField() || touched && invalid\">\n  \n  <label\n    gsClickOutside\n    (gsClickOutside)=\"toggleCountryOptions(true)\"\n    class=\"gs-field-box\"\n    [class.gs-form-field-box-full]=\"field.config.label\"\n    [for]=\"field.config.model\">\n\n    <span\n      class=\"gs-field-label\"\n      *ngIf=\"field.config.label\">\n      {{ field.config.label | translate }}\n    </span>\n\n    <div class=\"gs-field-phone\">\n      <button \n        class=\"gs-field-phone-country-select\"\n        [class.gs-field-phone-disabled]=\"!editCountry\"\n        (click)=\"toggleCountryOptions()\"\n        type=\"button\">\n        <span class=\"gs-field-phone-country-select-grid\"> \n          <span [class]=\"'gs-field-phone-flag ' + countryCode\"></span>\n          <span>+{{ country }}</span>\n        </span>\n      </button>\n  \n      <div class=\"gs-field-phone-country-select-options\" *ngIf=\"showCountryOptions\">\n        <div class=\"gs-field-phone-country-select-option\"\n          *ngFor=\"let option of countryCodeOptions\"\n          (click)=\"updatePhoneMask(option.country)\">\n          <span [class]=\"'gs-field-phone-flag ' + option.country\"></span>\n          <span>+{{ option.code }}</span>\n        </div>\n      </div>\n  \n      <input\n        #inputElement\n        class=\"gs-field-input gs-field-phone-input\"\n        type=\"text\"\n        [autocomplete]=\"field.config.autocomplete || 'off'\"\n        [id]=\"field.config.model\"\n        [name]=\"field.config.model\"\n        [placeholder]=\"phoneMask\"\n        [(ngModel)]=\"value\"\n        (input)=\"formatPhone(true)\"/>\n    </div>\n  </label>\n\n  <span class=\"gs-field-error\" *ngIf=\"touched && invalid\">\n    {{ errorText('ERR_PATTERN') }}\n  </span>\n\n  <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n    {{ getFieldError(field.config.model) | translate }}\n  </span>\n</div>\n",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-field-phone{position:relative;display:-ms-grid;display:grid;-ms-grid-columns:-webkit-min-content 1fr;-ms-grid-columns:min-content 1fr;grid-template-columns:-webkit-min-content 1fr;grid-template-columns:min-content 1fr;padding-top:0;padding-bottom:0}.gs-field-phone .gs-field-phone-input{background:0 0;border:none;outline:0;padding-right:0;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1}.gs-field-phone .gs-field-phone-country-select{-ms-grid-row-align:center;align-self:center;cursor:pointer;line-height:1;background:0 0;border:none;outline:0;padding:0}.gs-field-phone .gs-field-phone-country-select .gs-field-phone-country-select-grid{display:-ms-grid;display:grid;-ms-grid-columns:20px auto;grid-template-columns:20px auto;gap:6px;padding-right:6px}.gs-field-phone .gs-field-phone-country-select *{-ms-grid-row-align:center;align-self:center}.gs-field-phone .gs-field-phone-country-select-options{box-shadow:0 10px 10px rgba(0,0,0,.03),0 5px 5px rgba(0,0,0,.01);border:2px solid #e5e5e4;position:absolute;bottom:2px;left:2px;background-color:#fff;border-radius:1rem;padding:3px 6px}.gs-field-phone .gs-field-phone-country-select-options .gs-field-phone-country-select-option{display:-ms-grid;display:grid;-ms-grid-columns:20px -webkit-max-content;-ms-grid-columns:20px max-content;grid-template-columns:20px -webkit-max-content;grid-template-columns:20px max-content;gap:6px;cursor:pointer;padding:6px}.gs-field-phone .gs-field-phone-country-select-options .gs-field-phone-country-select-option *{-ms-grid-row-align:center;align-self:center}.gs-field-phone .gs-field-phone-country-select-options .gs-field-phone-country-select-option:hover{opacity:.8}.gs-field-phone-disabled{cursor:default;pointer-events:none}.gs-field-phone-flag{display:inline-block;width:20px;height:20px;background-position:center;background-size:cover;background-repeat:no-repeat;border-radius:50%}.gs-field-phone-flag.ar{background-image:url(data:image/png;base64,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)}.gs-field-phone-flag.bo{background-image:url(data:image/png;base64,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)}.gs-field-phone-flag.br{background-image:url(data:image/png;base64,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)}.gs-field-phone-flag.ca{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAN2AAADdgF91YLMAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAchQTFRF////8PDw5HiL8PDw5pCf8PDw5oiZ7c7T8PDw4E5p7MvR4mV88PDw5oeY42uB42yC6KCt8PDw55al6a6455mn6q+65o6e8PDw8PDw8PDw8PDw5o+f6J2r8PDw55Kh5HiM5HSI4mB35oma4VZv4mN65YGT4mB442uB5HeL8PDw8PDw8PDw8PDw8PDw8PDw4Vpy8PDw4V9342yB8PDw4FJs8PDw42yB422C4V114mF48PDw4Vly7M3T4FNt4FBq8PDw8PDw4Vlx4Vly8PDw4Vly4FRu8PDw30Vh8PDw30Zi4E5o3TRT4Exn8PDw30hj30Je8PDw3TNR3jxZ3j1a3TJR8PDw3jhW3ClJ3TVT3TRT3S5N3TRT3TVU3TJR3TRT3CNF2x0/3CdI8PDw8PDw3CRF2hg82xk82xw/2x0/2Q4z2hI28PDw2AAn2AEo2AIp2AQq2AUr2QUr2QYs2Qcs2Qct2Qgu2Qsw2Q0y2hM32xY52xc63CJD3C1N3TRT30dj30pl4FJs4VVu4Vx04mF44mR75H6R5X+R55mn55yq6aWx6rC66rS+67/H68HJ68PK7MjO7dLX7dTZ7t/i7+Xn7+jp8O3t8O/v8PDwdIVA+AAAAGx0Uk5TAAECAwUGBwcLDA0ODhUZHR4fICgpKSw0OEJHUlpbXmJjZGdqbW5wcHN8goOEiZWYpaytrrS1t7e6u7/AwMLDw8XKytDU2dne3uHh5ebm6evr7Ozs7e3u8PDy8/P19vb3+fn5+vv9/f39/v7+VkqZegAABFxJREFUeNrN2/db00AYB/A4AJXpQBBZgoJ7gIALHFgQUARxICqgCIp+WxAXDpC6owVlaP9dOyilNm3v3kvy5n5Scs/z/TyXpLmpaZSSVVCy/2jd2eZLXQ8edF1qPlt3dH9JQZZmS9lQdOjUFb9huXLqUNEGS8PTdhw8N+RPWobOHdiRZlF84eEbfqFy43Ch+emb97X4JUrLvs2mxhfUPvVLlqe1BabFV53xk8qZKlPiS69hjgaYw7VS5fhtrnHQARh3bVOKTz/2BFABAE+OpdPzdw8AqgBgYDcxfn2jB2YA4GlcT8nffhMwBwDc3C6fv+cRzAPg0R7J+DX1z2EmAM/r18jkZ7YC5gKA1kzx/JxbMB+AWzmi+Vv6YAUAfVvE8rfegzUA3Nsqkp/XD6sA6M9LnZ99G9YBcDs75fN/HVYCcD3Fu7C2A9YC0LE2KeA0rAbgdLL8vWPWA8b2Jvn+jMB6AEYSfpnW9cAOAHrWJQCchD0AnDTOL5+wCzBRbpS/cRB2ATC40QBwHPYBcNzgDRi1EzAa/ya4YCcArv/zi1/YC3hR/B+gE/YC0BmbX+a2G+AuiwF0w24Aulfn74L9AOxaBWjjALRF8/NfcQBe5a8AasABQM0K4C4P4G4kf6ebB+DeuQw4Dx4ALoTzMx4rABYWFACPM0KAaigAvF4FAKpDgCYFgA7oCoCmEKCXDlh4C7xdoAN6g/mbXtMB3uBVLx3welMAUAEyQA9f1skAVAQADWRA8AYES6KbIABoCAAukwHeyHUvGXA5AHgoD/jzO1i+RSt8C/3hjzzgoabluuUBf98b1Xr/Vx7gztUqQbgFulEtnXALUKkdoQCMmiCuAYQAR7QTFIBRE+iUhxAntIskQHwTxDeAEOCi1i4H+LGYoAmWG2DxhxygXbsqB/gw+XXRqAnCDbD4dfKDHOCqdkcSAIQJenwDBOIBScAd7b40IEyIbYJAA4TipQH3tWECIESIaQJ9OV4aMKy9JAEChC/vohXefZmM/FMS8FIOMP9pIlXdiU/zcgCJWyAQH0MQuwXCD+HSZ6H4EOHzkvhDKP4a/prxiOV7Zn5JvIYyP0RChEi86A+R3E9xSkI0XvSnWPZjlJSwOl70YyT/OU5IiI0X/RxTOiTfjat9J3VIKF2yaeNq06QuGaFT6ktUz0fplBK65dOJ6k1TuuXyAxNf4oo+ysBEemj28c1KeRa8+iz6/4+UoZnC4NQ/Fbw65VcbnKoMz1UBoeG5ygSFKqBXdYpGFdCkOkmlCqhWnaZTBCxP0ylMVCoCLihP1aoBVqZq6ZPVsz8DZVZ5spp/up59wYJ9yYZ/0Yp92Y5/4ZJ96ZZ/8Zp9+Z5/AwP7Fg7+TSzs23j4NzLxb+Vi38zGv52Pf0Mj/5ZO9k2t/Nt6+Tc282/t5t/czr+9n/+AA/8RD/5DLg445sN/0In/qJcDDrvxH/dzwIFHBxz5dMChVwcc+3XAwWcnHP12wOF3K47//wPBrSbiiOqtZAAAAABJRU5ErkJggg==)}.gs-field-phone-flag.cl{background-image:url(data:image/png;base64,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)}.gs-field-phone-flag.co{background-image:url(data:image/png;base64,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)}.gs-field-phone-flag.cr{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAN2AAADdgF91YLMAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYNQTFRF////AAD/2AAn8PDw8PDw2AAn8PDwd6LN8PDwzs7yX5LGj6nc8PDwZZzUe6jVa57QfqfPXo/J8PDw8PDwiK3Z4E5pcJvTkrPakLDW8PDwZJTN8PDw8PDwW5DN8PDw8PDw67/HaZfNeqLSZJPM55elg6nT4V524mR7eaLTaJfOWo7L8PDw8PDwXo/MV4vJ8PDw8PDwWo7KWY3L4Vly8PDw5HyP8PDwz9voWY3K8PDw4md9RYDGX5HLVIrKVYrKV4zK8PDw4E1o8PDwSIHGS4PG4VZv4Vdw8PDwPHnDSoPGQn7F3j1aQHzEQX3FRH7E6ay3OnnC4FJr3jxaNHTBOHfC8PDwMHHAOXfC3CtLK26+MnPAKm2+LXC/LnC/3CVG8PDwImm9KGy+JWq+Km6/JWu92x5AHma8HmW83TJRG2S7HGS62hY6El64Cli2El642Qwx2Q4z2x9B8PDwAFK0AVO0AlO1A1S1BFW1BVW1Bla2CFe2tMnh2AAn2AMp2AUr6rS+8PDwEULVSgAAAHN0Uk5TAAEBAQMEBAYGBwoKCw4WGRkaHB8jJykuMDQ6PD0/Q0pOXmBhYWVlZ2lrbXN8goSGiJiZmausrq+3uLq9vb/AwMLDw8bJy8zT2dve4OHh4ePo6Ovs7Ozt7e7v8PLy8/Pz9vb39/j4+fr7/Pz8/f7+/v7+/j1IbREAAALQSURBVHjazZtld9RAGIVv3d3dXaEuUIUa1N29hXpmq2zL/HQ+UKAtWctm5ub5A/c5ZzfJzCuAFZJL3g2NT6/uHJ3e358e7axOjw+9L0mGFlIah+e/u4QJrm/zw40pSsNjqj+u3wiv3Kx/qI5Rkx5SO3ou/OJ8tDbE9vjszkMRAIed2bbGl00+iAB5mCyzLb5mRVhipcaW+IolYZmliqDjc7+4RBC4vuYGFR/bcyuC5LYn1np+6a6wgd1Si/FRfXfCFu76oqzkF6wJ21grCDy/4UzYyFlDgPFhvdfCVq57wwLJjxsTtjMW539+0pxQwFySv/mZ20IJ25n+5WftC0XsZ/mTn74nlLGX7js/cUMoZCPRV37ColDKYoKP57/jh2I6vL8PmqVymr3lFxnqBYwiz/mpC1IDC6me8sMHpRYGwz0INElNNJnn5xm6BIw8s/zIEamNkUgTgTqpkTqTJ2BLp8DW/09Cq9RK69v8QqmZwjcC/boF+l/n50vt5L8S6NIv0PUyP0cSyHkh0M4QaP+Xn2YwBIy0vwL1kkL9n/yIqZ8UpiKeBarcJKqeBT6xBD7/zo8+ZgkcRwMAih9ZAo/FAIA2N402AMAMT2AGAOKveAJX8QDK3UTKAXQzBboBzDIFZoHQC6bARSgy3FQyUMkVqEQLV6AFA1yBAUxwBSawzBVYxiZXYBMHXIEDnHAFTnDJFbjEE1fgiS9A/wnof0L6Y0h/EdFfxfSPEf1zTD+Q0I9k9EMp/VhOv5jwr2b0yyn9ek4vUPBLNPQiFb1MRy9U8ku19GI1vVzPb1jQWzb8phW9bcdvXNJbt/zmNb19zx9goI9w8IdY6GM8/EEm/igXfZiNP87HH2jkj3TSh1r5Y738wWb+aDd/uJ0/3s9fcOCvePCXXByw5sNfdOKvejlg2Y2/7ueAhUcHrHw6YOnVAWu/Dlh8dsDqtxOW31Ws//8Chroo51R06BwAAAAASUVORK5CYII=)}.gs-field-phone-flag.ec{background-image:url(data:image/png;base64,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)}.gs-field-phone-flag.mx{background-image:url(data:image/png;base64,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)}.gs-field-phone-flag.pe{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAN2AAADdgF91YLMAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAWtQTFRF////8PDw8PDw8PDw8PDw7c7T6J+s3kBd8PDw8PDw68DH5HuO6KCt7MjP6aq130Zi6aay4V525X6R5ouc5HmM8PDw42+E8PDw8PDw8PDw6J2q5o2d6KKv5HuO5YSW5oeY8PDw5o2d5pCf5HyO4Vdw43GG5YGT4Vpy4l938PDw8PDw8PDw8PDw4mJ58PDw43GF8PDw42uA43GG5HqN42+E8PDw4mN64Vhx42qA42uB4mB38PDw8PDw8PDw30pl8PDw4V9230Zi30di4V114V514Vhx4Vpy4Vtz8PDw4FJs4Etm3jpX4Exn8PDw30dj3j5b3jdV30Zh8PDw3j1a3kBd8PDw3jhV3TRT3j1a4E1n3CpK3jhW3j9c3TZU3CVG3TJR3S5N2x9B3ClJ8PDw8PDw2xo92hg72xk82Qwx2Q0y2hA12xk82AAn2AEo2AIp2AMp2AUr2QYs2Qgu2Q4z2g802hM32hQ33jtZ8PDwFHteOgAAAGx0Uk5TAAEDBAYHCQsLDg8WHiQmKiowMDAyNDY4QkdITVBaW1tbYGRnaW5udYGCg4SJk5WipaaqsbS1tri4uLq/w8XH0NLT09TU2NnZ3uDj5OTm6Onq6uvs7O3u7/Dx8vLy9PX29/n5+fr8/f3+/v7+kIhrpQAAAutJREFUeNrN24V26zAQBFCVmZkZX5mZmZmZYdqmKeXzX5pyG7IjaawfmHtOYkte7QphZkWlFVY1tPb0TywdHy9N9Pe0NlQVpkUJLSsyq6Z71uF2zXbXZEUqDQ/N/Nd74vC6TnqrM0MVxWfUrTr8Wqt1GfLTE9s3HQbWZnui1PjssQe8GAG84GEsW1p8wdQ9YBQA3E8VSIkvW74BzACAm+WygOOTp/G+TACcazo5oPiQxisEBsBVY4j5/NwdIFAAsJNrMj645REyAHhsCTaTn74GyAEAa+nG8ysvIA+Ai0qD8UEdd5AJwF1HkKFdZwSQCwBGDOxR0TOQD8BMtL/5sRtQAcBGrH/5KQdQA8BBij/5SYdQBcBhku/8mD2oA2Avxld+2DxUAjAf5uP5H4ZaAIa9vw+aoRqAZm/55Xb1AHu55/zUM6gH4CzVU37EFnQAsBXhAdAHPQD0uc/Pt+kC2PLdnv92oQuAXXfnxHroA6D+b378tU7AdfwfwCh0AjD6O7/IphdgK/oFWIdeANZ/5ldANwAVPwAL+gEL3/NzbvUDbnO+AcahH4Dxr/y4ZwbgOe4T0AQGAE2fgH0OYP8jPw8cAPLeAYMswNBbfvglC3AZ7gKUgAVAiQvQxQN0uQArPMCKq/7+xAM8vVb3i8EDoNgJ6GQCOp2AOSZgzgk4ZQJOhUgAE4AEUcoFlIpaLqBWtHEBbWKACxgQk1zApFjkAhbFNhewLY64gCNxzgWcCzsXYOcD6D8B/U9IfwzpLyL6q5i+GdG3Y/qBhH4kox9K6cdy/ocJ/dOM/nFK/zynFyj4JRp6kYpepqMXKvmlWnqxml+up19Y0K9s+JdW9Gs7/sUl/eqWf3lNv77nNzDQWzj4TSz0Nh5+IxO/lYvezMZv5+M3NPJbOulNrfy2Xn5jM7+1m9/czm/v5w848Ec8+EMuFhjz4Q868Ue9LDDsxh/3s8DAowVGPi0w9GqBsV8LDD5bYfTbAsPvKsb//wPsizgLhgjJcwAAAABJRU5ErkJggg==)}.gs-field-phone-flag.us{background-image:url(data:image/png;base64,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)}.gs-field-phone-flag.uy{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAArRSURBVHja7Z1tbFPXGcdvBkKTYOzL2DQpKtqkSfs0TRqV2JaqVWBNG61rS7vBllVdN1DXDkQYLbSUDhYoJYVAyQgvLUSoXQhpSkBpM9KkEErKimi7ZcvYROO8J86L49j3nLw6ie+exzk2jmMn1/a919e+z4ffF3zxvfn//z73vB9JURQp1XC73UuBFUAOkAeUAFVAPdAAtAAOYPxHh5jy4DE+ubaYj63/K5dzy3nvS5XM9mo1+/xgLbtQUMPyD9SwnI3nh74r7Va+lGpapYLZi4EsIB+oA+yAopYfvMZVc+/rfGpDCet/5RKrOXdT/i3emwJgvOGLgExgL3Ad8ERjeDwBCOWBIubd/A7vOwQlRU2j/Dg+GwVAP+NXAkWAMx7DtQxAKI++wSc3lbF/ba/gm+Gh0ygA8Zu+HNgJ3NbSdL0CEMzPTvDxvX+TL9xs4d+hAERvPFbgKgCvXsbrHQA/q49yJa+K3ar9t3sVBWB+4+8BqvU23cgA+MHWxnPnWXvJJ+51FIDZxq8CrhlpvNEB8HP3Aa5AS8JxqFbeaPkAgAHpQHkijE9UAIJ58i3efeIy+77lAgDCLwS2AjyR5ic6AMh9hdx7oIa9jZpYIgDwh2YAjYk23iwB8PNMKZM/aJQfStkAgNgLgH1G1OyTMQBIZiFXjl6RsfWzIKUCIN719WYy3owB8PP0WeY4/bH8vZQIAIicDQyY0XwE2+lm5LE32WRBrfx80gYAxE0D9putyE8yvELDtKQKgBiwKSUDNaNUr4EmPcxfAtSQaZqDmi4xdQDgAZcBn5JZuoHaLjNlAODB7tJz1I4IgBrfZaoAiF9+VOYPOT5RZFePqmtld78y1P8xmT8zBMtMEQDxzo+62B/rOqpMtG7ymTvnta4BZaJ9mzLe+RoZP/t1sCShARC1/ZgqfJ72PynKF6t95qLJ4a9zKZ6OXdPXtT1PpoevGC5KSABEOz/mpt5k6zM+YxE0Gc0OvWa8Mz9wzVTLb8jwyE3EtEQEYH88D+61rQmYi6DZoa+I4M+9X2ST2ZHZb2gARPduzD18sqtvhrl+0HT8fLS7OOzn8mA7mR25xzDbkACIgZ24+va5szGswdN1gu0RP+OOz8jsyKAn6boGQAzpzjuqh7/gse6TynBfjcIGm2Y3Afs+jGjyXAz3XZr1XWywWRnuvwz3fBPuedzqIaiPdig52gDsU9fGvzHz/W17BGrxW6CIL1SGe9+b9X5Xy1jn6/D/359uQrZtnVWPGOq7TCUBeKRLAMRMHq/6Zt6OmEyOlYnWXDL/Tn0gQ9MAiDl8UU3jYgP/VZSmLIMC8BOFD/yDzL9Do9o5hmoDsDWWBxnvPGhIADwdf45ZrG3nWUqyuZxf0iQAotYf0+xdbLZ5mx7SNwBNDyrM2ZRSU8K0IreC369FAOKatz/afUrXAIx1HUm5OYFakX2cu+MKgFixE5fAOOKnWykAv355sI0CMAf7q9258QQg9uVaLocy0vOOMtWco2sJMGVbq4z2nJ1/VNGiAXigiI/EFACxUDOmX/yo/Qy00X9uaDPQa3vU1xkku7opACG8dFF+LpYAVEdX4evw9cR5mx421PhZQWj6qa9ewAZbKQCCVYV8NKoAiPX5UbT5G6Eo/kVCjZ9dIqxR1TdghQAgvz/LX4gmABXRF/29UPS/nfAgeG2P+cYi1L4KrBKAe4+ELwUibcsS+2IO14Ay0luhTLU8aajxU82/gkpnGdy/n+oAEXihkq1WE4Cd2nRHupThvg9mzPzRg8mW3/kGiNzuQWoFzMPaYt6oJgCaTu3GoljXfgBnK/UDqOTHh/nUnAEQW7FpOjAR69CvWkKnklEA5uaVKr5+rgAUaWk+G7TBrzRb5/f//dAK+Q8FQO1r4LTcFjYAYoq3ppswejr2GDMa2LadAqCSHxZwb/BU8uAAZGppPh/4p2+c3qhWwJDj7xQAleyqlLeHC8BeLQOAU8CMbAZOtj4ddm0BBSDMLqYneVu4AFzXyvyh/roZs3Wmmp9QPO0v+zpohvqu+PrsYxr67T4O333VN9bg6dgt+hrulDLTzcHonvVgjWw5TtS5bTMCILZc92gVgBF7iTLSc07hjhu+HsLZs4KvxDgruDrswlHuuOkbecRg0HQwVXj8W937A5Bl5ANgrT1is67j1Yh1B5r3pylZwQHIN/Lm+KsNZzCOJfhKkN7zEVYGdZJx2pEfHIA6ox8gdL7AWPeJmVPJIAyhw7xkmqbUBQfAbvQDTLY+e6fY7yoI34sIlb5ALb/5KTJNW+y+AIgDlgx/AKzFT0/p3jNn822862BgzSCZpjlLo578odkYQfcxxdP2ouJ2OecdVfR05PmCQIZpzgpJHK1m+M19NXqXQ+UcAyc09T4lw7QnRxLn6pEY1iRPEocqkhjWpEQSJ2qSGNakSjLrNu6EMRtKSOIsXRLDmjRI4iBlEsOatEjiFG0Sw5o4MADjJIRlGZdWFnBLzoohuILeS6v/wqdIDGuC3ksPn+QeEsOaoPfSumI+RGJYE/Reeuot7iQxrAl6Lz1byrpIDGuC3ku55ew2iWFN0Hvpj++yj0gMa4LeS1vK2RkSw5qg99LLlfIGEsOaoPdSYa3zm3cfIDGsBnqO3vumhT9ykk+QKNYCPQ+sC9hYxnpIFGuBngcCkFfFakkUa4GeBwJw+EM5l0SxFuh5IACn6ke/RhVBa1UA0fMZG0Rsu8B6NpUxhUh90Gvdt4ghTM1e3TeJIkxNpiHbxBGmxBl2mzg9NookTMkxQ7eKJUzHSkM3iyZMxW0Dt4snTMhO/Q+MIMx8pvBy3Y6MIUxPhW6HRhHJsR+QrsfGEaam2rCDIwlTco/xR8cSZuFaQg+PJhLOqoQeH08klPK4jo8XAUgHOImZdKBn6XEHACm9IRfueo8pRPKAnqnxVlUAjl8a+/K6Yj5M06mSZtn3MHqmWQCQis/ZmvuOkLhmBz1Cr9T6qjoAyBsfyeUksrlBj6LxNKoAQKViwYsXWTcJbU7QG/RItwAgn9n4t9aeZrSUzHRHwrIJ9CZaP6MOAFJ+070+4zCJbhbQC/QkFi9jCgBSeJlVkvjmAL2I1ceYAwDvmrQ/nGM2MiCxoAfoheEBQHa/P/7Vx09xNxmRGFB79CAeD+MKAHKkbuDrvz7DGBliLKg5ah+vf3EHALnSMJS+oYQ2nDQK1Bo118I7TQKA3Opk395URiWB3qDGqLVWvmkWAKTJLn9jy7vMQUbptKsXaIsaa+mZpgFAmmX5K9sqWDsZpi2oKWqrtV+aB8C/0HTHRXaLjNMG1DJ4QafpA+DvJ9hxUb5KBsZrvnw1nnZ+wgLgp/5/8i+b7e7BFrtbIdSDmqF2evujewCCppXR+YRRnOenZjpX0gTAP5QM7KN1h/Ou39sX7ZBuUgQgKAgZQCOZPQvUJMNoPwwPgAjBQmArzTYOzN5FLRYmwouEBCCkbmDldQflRr3rTRmAkBVIVlqGdm2+FTuWCkDIgtRUXpVcPddCTcsHIGR/gooUaTF4xd+ywoxamzIAIdvV7EzSjatui2dfbmaNTR2AMFvYFZl8M0uneMaVyaJr0gQgZEfTTLG38XXAk0DDPeIZ9ohnWpRseiZdAMIEYjGQBeQDdYBdR8Pt4h754p6Lk12/pA9AhFAsFRXJHCAPKAGqRB97A9ACOIBxgUP8W4O4pkr8nzzxHfhdS1NRq/8DoAYA0PCbnWYAAAAASUVORK5CYII=)}.gs-field-phone-flag.ve{background-image:url(data:image/png;base64,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)}"]
        })
    ], GsPhoneInputComponent);
    return GsPhoneInputComponent;
}(GsGenericFieldComponent));

var GsRadioButtonComponent = /** @class */ (function (_super) {
    __extends(GsRadioButtonComponent, _super);
    function GsRadioButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GsRadioButtonComponent.prototype.ngOnChanges = function (changes) {
        if (changes.fieldOption && changes.fieldOption.currentValue) {
            this.fieldOption = changes.fieldOption.currentValue;
        }
        else {
            this.fieldOption = this.field.config.optionValues;
        }
    };
    __decorate([
        Input()
    ], GsRadioButtonComponent.prototype, "field", void 0);
    __decorate([
        Input()
    ], GsRadioButtonComponent.prototype, "fieldOption", void 0);
    GsRadioButtonComponent = __decorate([
        Component({
            selector: 'gs-radio-button',
            template: "<ng-container [formGroup]=\"formGroup\">\n  <div class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <div\n      class=\"gs-field-box gs-field-radio-box\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <div class=\"gs-field-input gs-field-radio\">\n        <ng-container *ngFor=\"let option of fieldOption\">\n          <label class=\"gs-field-radio-input\">\n            <span class=\"gs-field-radio-input-label\">\n              {{ option.text | translate }}\n            </span>\n            <input\n              class=\"gs-field-input\"\n              type=\"radio\"\n              [name]=\"field.config.model\"\n              [formControlName]=\"field.config.model\"\n              [value]=\"option.value\"\n              [checked]=\"field.config.value === option.value ? true : false\">\n            <span class=\"gs-field-radio-input-checkmark\"></span>\n          </label>\n        </ng-container>\n      </div>\n    </div>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-field-radio-box{min-height:51px;height:auto}.gs-field-radio-box .gs-field-radio{display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:.6rem;margin-top:4px}.gs-field-radio-input{display:block;position:relative;padding-left:calc(18px + .5rem);-ms-grid-row-align:center;align-self:center;margin:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field-radio-input .gs-field-radio-input-label{display:block;padding:calc((18px - var(--gs-font-size,.9rem))/ 2) 0;line-height:1}.gs-field-radio-input input{position:absolute;display:none;cursor:pointer;height:0;width:0}.gs-field-radio-input .gs-field-radio-input-checkmark{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;display:-ms-grid;display:grid;position:absolute;top:0;left:0;height:18px;width:18px;background-color:#b8b4b4;border-radius:50%}.gs-field-radio-input .gs-field-radio-input-checkmark *{-ms-grid-row-align:center;align-self:center}.gs-field-radio-input .gs-field-radio-input-checkmark:after{content:\"\";display:none;width:6px;height:6px;margin:auto;border-radius:50%;background:#fff}.gs-field-radio-input:hover input~.gs-field-radio-input-checkmark{opacity:.8}.gs-field-radio-input input:checked~.gs-field-radio-input-checkmark{background-color:#332927}.gs-field-radio-input input:checked~.gs-field-radio-input-checkmark:after{display:block}"]
        })
    ], GsRadioButtonComponent);
    return GsRadioButtonComponent;
}(GsGenericFieldComponent));

var GsTextInputComponent = /** @class */ (function (_super) {
    __extends(GsTextInputComponent, _super);
    function GsTextInputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Input()
    ], GsTextInputComponent.prototype, "field", void 0);
    GsTextInputComponent = __decorate([
        Component({
            selector: 'gs-text-input',
            template: "<ng-container [formGroup]=\"formGroup\">\n  <div class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label\n      class=\"gs-field-box\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n  \n      <input\n        class=\"gs-field-input\"\n        type=\"text\"\n        [autocomplete]=\"field.config.autocomplete || 'off'\"\n        [id]=\"field.config.model\"\n        [minlength]=\"field.config.validators ? field.config.validators[fieldValidatorType.MIN_LENGTH] : null\"\n        [maxlength]=\"field.config.validators ? field.config.validators[fieldValidatorType.MAX_LENGTH] : null\"\n        [formControlName]=\"field.config.model\"\n        [placeholder]=\"field.config.placeholder || field.config.label || field.config.model | translate\"\n        [value]=\"field.config.value || null\">      \n\n        <!-- symbol -->\n        <div class=\"gs-form-field_symbol\" *ngIf=\"field.config.symbol\">\n          {{field.config.symbol}}\n        </div>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}"]
        })
    ], GsTextInputComponent);
    return GsTextInputComponent;
}(GsGenericFieldComponent));

var GsTextareaComponent = /** @class */ (function (_super) {
    __extends(GsTextareaComponent, _super);
    function GsTextareaComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Input()
    ], GsTextareaComponent.prototype, "field", void 0);
    GsTextareaComponent = __decorate([
        Component({
            selector: 'gs-textarea',
            template: "<ng-container [formGroup]=\"formGroup\">\n  <div\n    class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label\n      class=\"gs-field-box\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <textarea\n        class=\"gs-field-input\"\n        type=\"text\"\n        [id]=\"field.config.model\"\n        [minlength]=\"field.config.validators ? field.config.validators[fieldValidatorType.MIN_LENGTH] : null\"\n        [maxlength]=\"field.config.validators ? field.config.validators[fieldValidatorType.MAX_LENGTH] : null\"\n        [formControlName]=\"field.config.model\"\n        [placeholder]=\"field.config.placeholder || field.config.label || field.config.model | translate\"\n        [value]=\"field.config.value || null\"></textarea>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem)}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-field-input{max-width:100%;min-width:100%;height:60px;max-height:60px;resize:none}.gs-field-box{height:96px}"]
        })
    ], GsTextareaComponent);
    return GsTextareaComponent;
}(GsGenericFieldComponent));

var GsToggleComponent = /** @class */ (function (_super) {
    __extends(GsToggleComponent, _super);
    function GsToggleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Input()
    ], GsToggleComponent.prototype, "field", void 0);
    GsToggleComponent = __decorate([
        Component({
            selector: 'gs-toggle',
            template: "<ng-container [formGroup]=\"formGroup\">\n  <div\n    class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label class=\"gs-field-box gs-input-switch-box\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <div class=\"gs-input-switch\">\n        <input \n          class=\"gs-input-switch-checkbox\"\n          type=\"checkbox\" \n          [id]=\"field.config.model\"\n          [formControlName]=\"field.config.model\"\n          [value]=\"field.config.value || null\"/>\n        <div class=\"gs-input-switch-slider\"></div>\n      </div>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-input-switch-box .gs-input-switch{position:relative;display:inline-block;height:17px;width:30px;margin-top:5px}.gs-input-switch-box .gs-input-switch .gs-input-switch-checkbox{display:none}.gs-input-switch-box .gs-input-switch .gs-input-switch-checkbox:checked~.gs-input-switch-slider{background-color:#332927}.gs-input-switch-box .gs-input-switch .gs-input-switch-checkbox:checked~.gs-input-switch-slider:before{-webkit-transform:translateX(13px);transform:translateX(13px)}.gs-input-switch-box .gs-input-switch .gs-input-switch-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#b8b4b4;border-radius:21px}.gs-input-switch-box .gs-input-switch .gs-input-switch-slider:before{-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;position:absolute;content:\"\";height:11px;width:11px;left:3px;bottom:3px;background-color:#fff;border-radius:50%}"]
        })
    ], GsToggleComponent);
    return GsToggleComponent;
}(GsGenericFieldComponent));

var GsSeparatedByCommaComponent = /** @class */ (function (_super) {
    __extends(GsSeparatedByCommaComponent, _super);
    function GsSeparatedByCommaComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fieldOption = [];
        _this.value = '';
        return _this;
    }
    GsSeparatedByCommaComponent.prototype.ngOnChanges = function (changes) {
        if (changes.field && changes.field.currentValue && changes.field.currentValue.config.value) {
            this.fieldOption = changes.field.currentValue.config.value.split(',');
        }
    };
    GsSeparatedByCommaComponent.prototype.focusInput = function () {
        this.inputElement.nativeElement.focus();
    };
    GsSeparatedByCommaComponent.prototype.removeValue = function (valIndex) {
        this.fieldOption.splice(valIndex, 1);
    };
    GsSeparatedByCommaComponent.prototype.disableEnter = function (event) {
        event.preventDefault();
    };
    GsSeparatedByCommaComponent.prototype.removeLastValue = function (event) {
        if (this.value === '' && event.keyCode === 8) {
            this.fieldOption.pop();
            return;
        }
    };
    GsSeparatedByCommaComponent.prototype.removeAll = function () {
        this.fieldOption = [];
    };
    GsSeparatedByCommaComponent.prototype.addValue = function (event) {
        if (this.value === '' || this.value === ',') {
            return;
        }
        if (event.keyCode === 188 || event.keyCode === 13) {
            var value = this.value.replace(/,/g, '');
            if (value === '') {
                return;
            }
            this.fieldOption.push(value);
            var valuesAsString = this.fieldOption.join(',');
            this.formGroup.controls[this.field.config.model].patchValue(valuesAsString);
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
            this.value = '';
            return;
        }
    };
    __decorate([
        Input()
    ], GsSeparatedByCommaComponent.prototype, "field", void 0);
    __decorate([
        ViewChild('inputElement', { static: true })
    ], GsSeparatedByCommaComponent.prototype, "inputElement", void 0);
    GsSeparatedByCommaComponent = __decorate([
        Component({
            selector: 'gs-separated-by-comma',
            template: "<div class=\"gs-field\" \n  [class.gs-field-has-error]=\"validateField()\">\n  \n  <label\n    class=\"gs-field-box gs-field-separated-box\"\n    [class.gs-form-field-box-full]=\"field.config.label\">\n\n    <span\n      class=\"gs-field-label\"\n      *ngIf=\"field.config.label\">\n      {{ field.config.label | translate }}\n    </span>\n\n    <div class=\"gs-field-input gs-field-separated-input\">\n      <!-- input -->\n      <div class=\"gs-field-separated-input-item\">\n        <input\n          #inputElement\n          class=\"gs-field-input\"\n          type=\"text\"\n          [autocomplete]=\"'off'\"\n          [id]=\"field.config.model\"\n          [placeholder]=\"field.config.placeholder || field.config.label || field.config.model | translate\"\n          [(ngModel)]=\"value\"\n          (keydown.enter)=\"disableEnter($event)\"\n          (keydown)=\"removeLastValue($event)\"\n          (keyup)=\"addValue($event)\"/>\n        <button *ngIf=\"fieldOption.length > 0\" type=\"button\" (click)=\"removeAll()\">&times;</button>\n      </div>\n    </div>\n  </label>\n\n  <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n    {{ getFieldError(field.config.model) | translate }}\n  </span>\n\n  <span class=\"gs-field-separated-values\" *ngIf=\"fieldOption\">\n    <span class=\"gs-field-separated-value\" *ngFor=\"let item of fieldOption; let i = index;\">\n      <span class=\"gs-field-separated-value-name\">{{ item }}</span>\n      <button class=\"gs-field-separated-value-remove\" type=\"button\" (click)=\"removeValue(i)\">\n        &times;\n      </button>\n    </span>\n  </span>\n</div>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-field-separated-values{margin:3px 0 0;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center}.gs-field-separated-values .gs-field-separated-value{padding:2px 6px;margin:0 3px 3px 0;color:#fff;background-color:#332927;border-radius:1rem;display:-ms-grid;display:grid;-ms-grid-columns:1fr 10px;grid-template-columns:1fr 10px;gap:3px}.gs-field-separated-values .gs-field-separated-value:last-child{margin-right:0}.gs-field-separated-values .gs-field-separated-value .gs-field-separated-value-remove{cursor:pointer;background:0 0;border:none;outline:0;padding:0;color:#fff;-ms-grid-row-align:center;align-self:center}.gs-field-separated-values .gs-field-separated-value .gs-field-separated-value-name{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#fff}.gs-field-separated-input{display:-webkit-box;display:flex;flex-wrap:wrap;width:100%;padding:0}.gs-field-separated-input .gs-field-separated-input-item{position:relative;display:-ms-grid;display:grid;-ms-grid-columns:1fr 24px;grid-template-columns:1fr 24px;width:100%}.gs-field-separated-input .gs-field-separated-input-item button{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;cursor:pointer;background:0 0;border:none;outline:0;padding:0;fill:var(--gs-color-neutral,#706967)}.gs-field-separated-input .gs-field-separated-input-item .gs-field-input{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;background:0 0;border:none;outline:0}"]
        })
    ], GsSeparatedByCommaComponent);
    return GsSeparatedByCommaComponent;
}(GsGenericFieldComponent));

var GsFileInputComponent = /** @class */ (function (_super) {
    __extends(GsFileInputComponent, _super);
    function GsFileInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fieldChanged = new EventEmitter();
        _this.loading = false;
        _this.supportedFilesTranslates = {
            es: 'Archivos soportados',
            en: 'Supported files',
            pt: 'Arquivos suportados'
        };
        _this.supportedSizeFilesTranslates = {
            es: "Tama\u00F1o limite",
            en: 'Size limit',
            pt: 'Limite de tamanhos'
        };
        _this.errorTranslates = {
            es: 'Ocurrio un error al subir el archivo. Por favor intenta de nuevo.',
            en: 'There was an error uploading the file. Please try again.',
            pt: 'Ocorreu um erro ao fazer o upload do arquivo. Por favor tente novamente.'
        };
        return _this;
    }
    GsFileInputComponent.prototype.ngOnInit = function () {
        this.supportedFilesText = this.supportedFilesTranslates[this.formsService.getLang() || 'en'];
        this.supportedSizeFilesText = this.supportedSizeFilesTranslates[this.formsService.getLang() || 'en'];
    };
    GsFileInputComponent.prototype.ngOnChanges = function (changes) {
        if (changes.field.currentValue) {
            if (this.field.config.value) {
                this.selectedFile = this.field.config.value;
                this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
                this.formGroup.controls[this.field.config.model].updateValueAndValidity();
            }
            if (this.field.config.returnFile) {
                this.returnFile = true;
            }
            else {
                this.returnFile = false;
            }
            if (this.field.config.size) {
            }
        }
    };
    GsFileInputComponent.prototype.onFileChange = function ($event) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var file = $event.target.files[0];
        var fileName = file.name.split('.').reverse()[1];
        this.field.config.value = file;
        this.size = file.size;
        if (!this.validFileType(file) || !this.validFileSize()) {
            this.loading = false;
        }
        if (file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                _this.selectedFile = file;
            };
        }
        else {
            this.selectedFile = file;
        }
        this.fieldChanged.emit({ file: file, model: this.field.config.model });
        if (this.returnFile) {
            this.formGroup.controls[this.field.config.model].patchValue(file);
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
            this.loading = false;
        }
        else {
            this.processFile(file);
        }
    };
    GsFileInputComponent.prototype.processFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        var url = this.field.config.api.url;
        var method = this.field.config.api.method;
        var paramName = this.field.config.api.fileParamName;
        this.errorText = null;
        reader.addEventListener('load', function () {
            _this.formsService.uploadFileServices(url, method, file, paramName)
                .subscribe(function (response) {
                _this.loading = false;
                _this.formGroup.controls[_this.field.config.model].patchValue(response);
                _this.formGroup.controls[_this.field.config.model].updateValueAndValidity();
            }, function (error) {
                _this.loading = false;
                console.error('Unable to upload the image. Error:', error);
                _this.errorText = _this.errorTranslates[_this.formsService.getLang() || 'en'];
                _this.formGroup.controls[_this.field.config.model].patchValue('unableToUploadFile');
                _this.formGroup.controls[_this.field.config.model].updateValueAndValidity();
                _this.formGroup.controls[_this.field.config.model].setErrors({ unableToUploadFile: true });
            });
        });
        reader.readAsDataURL(file);
    };
    GsFileInputComponent.prototype.returnFileSize = function (size) {
        if (size < 1024) {
            return size + 'bytes';
        }
        else if (size >= 1024 && size < 1048576) {
            return (size / 1024).toFixed(1) + 'KB';
        }
        else if (size >= 1048576) {
            return (size / 1048576).toFixed(1) + 'MB';
        }
    };
    GsFileInputComponent.prototype.validFileSize = function () {
        return this.field.config.size < this.size;
    };
    GsFileInputComponent.prototype.validFileType = function (file) {
        return this.field.config.accept.replace(/ /g, '').split(',').includes("." + file.type.split('/')[1]);
    };
    GsFileInputComponent.prototype.resetField = function () {
        this.selectedFile = null;
    };
    __decorate([
        Input()
    ], GsFileInputComponent.prototype, "field", void 0);
    __decorate([
        Output()
    ], GsFileInputComponent.prototype, "fieldChanged", void 0);
    GsFileInputComponent = __decorate([
        Component({
            selector: 'gs-file-input',
            template: "<ng-container [formGroup]=\"formGroup\">\n  <div class=\"gs-field\"\n    [class.gs-field-has-error]=\"validateField() || errorText\">\n\n    <label\n      (click)=\"file.click()\"\n      class=\"gs-field-box gs-field-box-icon gs-field-file-box\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n\n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <div class=\"gs-field-input gs-field-file-input\">\n        <ng-container *ngIf=\"selectedFile\">\n          {{ selectedFile.name }}\n        </ng-container>\n\n        <ng-container class=\"inner-margin\" *ngIf=\"!selectedFile\">\n          {{ field.config.placeholder || field.config.label || field.config.model | translate }}\n        </ng-container>\n      </div>\n\n      <svg class=\"gs-field-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z\"/>\n      </svg>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n\n    <span class=\"gs-field-error\" *ngIf=\"errorText\">\n      {{ errorText }}\n    </span>\n\n    <span class=\"gs-field-hint\" *ngIf=\"field.config.accept\">\n      {{ supportedFilesText }}: {{ field.config.accept }}\n      <span *ngIf=\"field.config.size\">\n       - {{ supportedSizeFilesText }}: {{ returnFileSize(field.config.size) }}\n      </span>\n    </span>\n\n    <input #file\n      class=\"gs-field-input-hidden\"\n      type=\"file\"\n      [id]=\"field.config.model\"\n      [accept]=\"field.config.accept || null\"\n      (change)=\"onFileChange($event)\" />\n  </div>\n</ng-container>\n",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-field-file-box{-ms-grid-columns:1fr 10px!important;grid-template-columns:1fr 10px!important}.gs-field-icon{width:10px!important}.gs-field-input-hidden{display:none}"]
        })
    ], GsFileInputComponent);
    return GsFileInputComponent;
}(GsGenericFieldComponent));

// TODO: add error validators
var TwoDataInputErrors;
(function (TwoDataInputErrors) {
    TwoDataInputErrors[TwoDataInputErrors["RIGHT_MIN"] = 0] = "RIGHT_MIN";
    TwoDataInputErrors[TwoDataInputErrors["LEFT_MIN"] = 1] = "LEFT_MIN";
    TwoDataInputErrors[TwoDataInputErrors["REQUIRED"] = 2] = "REQUIRED";
})(TwoDataInputErrors || (TwoDataInputErrors = {}));
var GsTwoDataInputComponent = /** @class */ (function (_super) {
    __extends(GsTwoDataInputComponent, _super);
    function GsTwoDataInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueType = GFieldValueType;
        _this.fieldValidatorType = GFieldValidatorType;
        _this.rightFieldTouched = false;
        _this.leftFieldTouched = false;
        return _this;
    }
    GsTwoDataInputComponent.prototype.ngOnChanges = function (changes) {
        if (changes.field.currentValue) {
            this.field = changes.field.currentValue;
            if (this.field.config.value) {
                this.leftFieldValue = this.field.config.value.left || null;
                this.rightFieldValue = this.field.config.value.right || null;
            }
            if (this.field.config.options) {
                this.leftFieldType = this.field.config.options.left ? this.field.config.options.left.type || null : null;
                this.rightFieldType = this.field.config.options.right ? this.field.config.options.right.type || null : null;
                this.leftFieldPlaceholder = this.field.config.options.left ? this.field.config.options.left.placeholder || null : null;
                this.rightFieldPlaceholder = this.field.config.options.right ? this.field.config.options.right.placeholder || null : null;
            }
        }
    };
    GsTwoDataInputComponent.prototype.setGrid = function () {
        if (!this.field.config.grid) {
            return null;
        }
        var grid = this.field.config.grid[0] + ' max-content ' + this.field.config.grid[1];
        return { 'grid-template-columns': grid };
    };
    GsTwoDataInputComponent.prototype.onUpdateValue = function (right) {
        if (!this.rightFieldTouched && right) {
            this.rightFieldTouched = true;
        }
        if (!this.leftFieldTouched && !right) {
            this.leftFieldTouched = true;
        }
        var updatedValue = {
            left: this.leftFieldValue,
            right: this.rightFieldValue
        };
        if (updatedValue.left && updatedValue.right) {
            this.formGroup.controls[this.field.config.model].patchValue(updatedValue);
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
        }
        else {
            this.formGroup.controls[this.field.config.model].patchValue(null);
        }
    };
    GsTwoDataInputComponent.prototype.checkMinMaxValidator = function (input, validator) {
        if (this.field.config.options && this.field.config.options[input] && this.field.config.options[input].type) {
            if (this.field.config.options[input].type === this.valueType.NUMBER) {
                if (this.field.config.options[input].validators
                    && this.field.config.options[input].validators[this.fieldValidatorType[validator]]) {
                    return this.field.config.options[input].validators[this.fieldValidatorType[validator]];
                }
                else if (this.field.config.validators && this.field.config.validators[this.fieldValidatorType[validator]]) {
                    return this.field.config.validators[this.fieldValidatorType[validator]];
                }
            }
        }
        return null;
    };
    GsTwoDataInputComponent.prototype.requiredText = function (right) {
        return right
            ? this.formsService.getValidationMessage('ERR_REQUIRED_TWO_DATA_RIGHT')
            : this.formsService.getValidationMessage('ERR_REQUIRED_TWO_DATA_LEFT');
    };
    GsTwoDataInputComponent.prototype.validateRequired = function (right) {
        var input = right ? 'right' : 'left';
        return this.field.config.options[input].validators &&
            this[input + "FieldTouched"] &&
            this.field.config.options[input].validators.required &&
            !this[input + "FieldValue"];
    };
    __decorate([
        Input()
    ], GsTwoDataInputComponent.prototype, "field", void 0);
    GsTwoDataInputComponent = __decorate([
        Component({
            selector: 'gs-two-data-input',
            template: "<div class=\"gs-field\" \n  [class.gs-field-has-error]=\"validateField() || validateRequired(false) || validateRequired(true)\">\n  \n  <label\n    class=\"gs-field-box\"\n    [class.gs-form-field-box-full]=\"field.config.label\">\n\n    <span\n      class=\"gs-field-label\"\n      *ngIf=\"field.config.label\">\n      {{ field.config.label | translate }}\n    </span>\n\n    <div class=\"gs-field-input gs-field-input-two-data\" [ngStyle]=\"setGrid()\">\n      <!-- left input -->\n      <input \n        class=\"gs-field-input gs-field-input-two-data-left\" \n        [placeholder]=\"leftFieldPlaceholder || '' | translate\"\n        [type]=\"leftFieldType === valueType.NUMBER ? 'number' : 'string'\"\n        [pattern]=\"leftFieldType === valueType.NUMBER ? '[0-9]*' : null\"\n        [inputmode]=\"leftFieldType === valueType.NUMBER ? 'numeric' : null\" \n        [decimal]=\"false\"\n        [gsDigitOnly]=\"leftFieldType === valueType.NUMBER\" \n        [autocomplete]=\"field.config.autocomplete || 'off'\"\n        [(ngModel)]=\"leftFieldValue\" \n        [min]=\"checkMinMaxValidator('left', 'MIN')\" \n        [max]=\"checkMinMaxValidator('left', 'MAX')\"\n        (keyup)=\"onUpdateValue(false)\"/>\n    \n      <!-- divider -->\n      <span class=\"gs-field-input-two-data-divider\">\n        {{ field.config.divider || '-' }}\n      </span>\n    \n      <!-- right input -->\n      <input \n        class=\"gs-field-input gs-field-input-two-data-right\" \n        [placeholder]=\"rightFieldPlaceholder || '' | translate\"\n        [type]=\"rightFieldType === valueType.NUMBER ? 'number' : 'string'\"\n        [pattern]=\"rightFieldType === valueType.NUMBER ? '[0-9]*' : null\"\n        [inputmode]=\"rightFieldType === valueType.NUMBER ? 'numeric' : null\" \n        [decimal]=\"false\"\n        [gsDigitOnly]=\"rightFieldType === valueType.NUMBER\" \n        [autocomplete]=\"field.config.autocomplete || 'off'\"\n        [min]=\"checkMinMaxValidator('right', 'MIN')\" \n        [max]=\"checkMinMaxValidator('right', 'MAX')\"\n        [(ngModel)]=\"rightFieldValue\"\n        (keyup)=\"onUpdateValue(true)\"/>\n    </div>\n  </label>\n\n  <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n    {{ getFieldError(field.config.model) | translate }}\n  </span>\n  <span class=\"gs-field-error\"\n    *ngIf=\"validateRequired(false)\">\n    {{ requiredText(false) }}\n  </span>\n  <span class=\"gs-field-error\"\n    *ngIf=\"validateRequired(true)\">\n    {{ requiredText(true) }}\n  </span>\n</div>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}input{background:0 0;border:none;outline:0;margin:0;width:100%}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.gs-field-input-two-data{display:-ms-grid;display:grid;-ms-grid-columns:auto -webkit-max-content auto;-ms-grid-columns:auto max-content auto;grid-template-columns:auto -webkit-max-content auto;grid-template-columns:auto max-content auto}.gs-field-input-two-data .gs-field-input-two-data-input-divider,.gs-field-input-two-data .gs-field-input-two-data-left,.gs-field-input-two-data .gs-field-input-two-data-right{-ms-grid-row:1!important;grid-row:1!important}.gs-field-input-two-data .gs-field-input-two-data-left{padding-right:.5rem;text-align:right;-ms-grid-column:1!important;grid-column:1!important}.gs-field-input-two-data .gs-field-input-two-data-left::-webkit-input-placeholder{text-align:left!important}.gs-field-input-two-data .gs-field-input-two-data-left::-moz-placeholder{text-align:left!important}.gs-field-input-two-data .gs-field-input-two-data-left::-ms-input-placeholder{text-align:left!important}.gs-field-input-two-data .gs-field-input-two-data-left::placeholder{text-align:left!important}.gs-field-input-two-data .gs-field-input-two-data-right{padding-left:.5rem;-ms-grid-column:3!important;grid-column:3!important}.gs-field-input-two-data .gs-field-input-two-data-divider{background-color:#e5e5e4;text-align:center;-ms-grid-row-align:center;align-self:center;padding:0 .5rem;-ms-grid-column:2!important;grid-column:2!important}"]
        })
    ], GsTwoDataInputComponent);
    return GsTwoDataInputComponent;
}(GsGenericFieldComponent));

var GsMultiselectComponent = /** @class */ (function (_super) {
    __extends(GsMultiselectComponent, _super);
    function GsMultiselectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = [];
        _this.noSelection = true;
        _this.touched = false;
        _this.showMultiselectOptions = false;
        return _this;
    }
    GsMultiselectComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.fieldOption && changes.fieldOption.currentValue) {
            this.fieldOption = changes.fieldOption.currentValue;
        }
        else {
            this.fieldOption = this.field.config.optionValues;
        }
        this.options = this.fieldOption;
        if (changes.field && changes.field.currentValue.config.value) {
            var currentValues = changes.field.currentValue.config.value;
            currentValues.forEach(function (option) {
                _this.toggleOption(option, false);
            });
        }
    };
    GsMultiselectComponent.prototype.toggleOption = function (option, touched) {
        if (touched === void 0) { touched = true; }
        var selectedOptions = [];
        this.noSelection = true;
        this.touched = touched;
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.options.length; i++) {
            if (this.options[i].value === option.value) {
                this.options[i].exists = !option.exists;
            }
            if (this.options[i].exists === true) {
                this.noSelection = false;
                selectedOptions.push({
                    text: this.options[i].text,
                    value: this.options[i].value
                });
                this.formGroup.controls[this.field.config.model].patchValue(selectedOptions);
                this.formGroup.controls[this.field.config.model].updateValueAndValidity();
            }
        }
    };
    GsMultiselectComponent.prototype.toggleMultiselectOptions = function (value) {
        if (value === void 0) { value = !this.showMultiselectOptions; }
        this.showMultiselectOptions = value;
    };
    GsMultiselectComponent.prototype.requiredText = function () {
        return this.formsService.getValidationMessage('ERR_REQUIRED');
    };
    __decorate([
        Input()
    ], GsMultiselectComponent.prototype, "field", void 0);
    __decorate([
        Input()
    ], GsMultiselectComponent.prototype, "fieldOption", void 0);
    GsMultiselectComponent = __decorate([
        Component({
            selector: 'gs-multiselect',
            template: "<div class=\"multiselect gs-no-select\" [formGroup]=\"formGroup\" gsClickOutside (gsClickOutside)=\"toggleMultiselectOptions(false)\">\n  <!-- selected options -->\n  <div class=\"input gs-form-field_multiselect-selected_options\" (click)=\"toggleMultiselectOptions()\">\n    <ng-container *ngFor=\"let option of options\">\n      <span *ngIf=\"option.exists\" class=\"selected-option\">\n        {{ option.text }}\n        <button type=\"button\" (click)=\"toggleOption(option)\">&times;</button>\n      </span>\n    </ng-container>\n    <span *ngIf=\"noSelection\" class=\"placeholder\">\n      {{ field.config.placeholder || field.config.label || field.config.model | translate }}\n    </span>\n    <span class=\"height-holder\">&nbsp;</span>\n  </div>\n\n  <!-- options -->\n  <div class=\"gs-form-field_multiselect-options\" *ngIf=\"this.showMultiselectOptions\">\n    <span *ngFor=\"let option of options\" (click)=\"toggleOption(option)\">\n      <span [class.selected]=\"option.exists\">\n        {{ option.text }}\n      </span>\n    </span>\n  </div>\n\n  <span class=\"gs-form-field_error_message\" *ngIf=\"touched && noSelection && field.config.validators.required\">\n    {{ requiredText() }}\n  </span>\n</div>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.multiselect{position:relative;width:100%}.multiselect .gs-form-field_multiselect-selected_options{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;margin:0;padding:0}.multiselect .gs-form-field_multiselect-selected_options .placeholder{opacity:1}.multiselect .gs-form-field_multiselect-selected_options .height-holder{padding:var(--gs-input-padding,12px)}.multiselect .gs-form-field_multiselect-selected_options .selected-option{padding:4px 8px;color:var(--gs-color-white,#fff);background-color:var(--gs-color-primary,#ff2426);margin:4px 0 4px 4px;border-radius:12px}.multiselect .gs-form-field_multiselect-selected_options .selected-option button{cursor:pointer;background:0 0;border:none;outline:0;padding:0;color:var(--gs-color-white,#fff)}.multiselect .gs-form-field_multiselect-options{display:block;position:absolute;max-width:100%;padding:var(--gs-input-padding,12px);color:var(--gs-input-color,#332927);background-color:var(--gs-input-background,#fff);border:1px solid var(--gs-input-border-color,none);border-top:none;z-index:100}.multiselect .gs-form-field_multiselect-options span{display:block;margin:4px 0}.multiselect .gs-form-field_multiselect-options span .selected{color:var(--gs-color-primary,#ff2426)}.multiselect .gs-form-field_multiselect-options span:hover{opacity:.8;cursor:pointer}.gs-styles-multiselect .gs-form-field_multiselect-options{left:-1.1rem;border-radius:0 0 15px 15px;width:calc(100% + 36px);max-width:initial}.gs-styles-multiselect .gs-form-field_multiselect-options>span{margin:0;border-bottom:1px solid #4e4e4e1a;padding:1rem!important}.gs-styles-multiselect .gs-form-field_multiselect-options>span .selected{font-weight:600}"]
        })
    ], GsMultiselectComponent);
    return GsMultiselectComponent;
}(GsGenericFieldComponent));

var GsColorPickerComponent = /** @class */ (function (_super) {
    __extends(GsColorPickerComponent, _super);
    function GsColorPickerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GsColorPickerComponent.prototype.setColorValue = function () {
        this.formGroup.controls[this.field.config.model].patchValue(this.formGroup.value[this.field.config.model]);
        this.formGroup.controls[this.field.config.model].updateValueAndValidity();
    };
    __decorate([
        Input()
    ], GsColorPickerComponent.prototype, "field", void 0);
    GsColorPickerComponent = __decorate([
        Component({
            selector: 'gs-color-picker',
            template: "<ng-container [formGroup]=\"formGroup\">\n  <div class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label\n      class=\"gs-field-box gs-field-box-icon\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <input\n        class=\"gs-field-input\"\n        type=\"text\"\n        (keyup)=\"setColorValue()\"\n        [formControlName]=\"field.config.model\"\n        [placeholder]=\"field.config.placeholder || field.config.label || field.config.model | translate\"\n        [maxlength]=\"7\"\n        [value]=\"field.config.value || null\">\n      \n      <input\n        class=\"gs-field-input gs-field-icon\"\n        type=\"color\"\n        (change)=\"setColorValue()\"\n        [formControlName]=\"field.config.model\"\n        [value]=\"field.config.value || null\">\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px;-ms-grid-columns:1fr 30px;grid-template-columns:1fr 30px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}input{background:0 0;border:none;outline:0;margin:0;width:100%}.gs-field-box.gs-field-box-icon .gs-field-input.gs-field-icon{width:30px;height:30px}"]
        })
    ], GsColorPickerComponent);
    return GsColorPickerComponent;
}(GsGenericFieldComponent));

var WINDOW = window;
var GsMapFieldComponent = /** @class */ (function (_super) {
    __extends(GsMapFieldComponent, _super);
    function GsMapFieldComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showMap = false;
        _this.showMapModal = false;
        _this.latlng = LOCATION.co.lanLng;
        _this.address = [];
        _this.addressInput = '';
        return _this;
    }
    GsMapFieldComponent.prototype.ngOnInit = function () {
        this.showMapModal = this.field.config.showMap;
    };
    GsMapFieldComponent.prototype.ngOnChanges = function (changes) {
        if (changes.field.currentValue && changes.field.currentValue.config.value) {
            var value = changes.field.currentValue.config.value;
            if (value.city && value.country) {
                this.addressInput = value.address + ", " + value.city + ", " + value.country;
            }
            else {
                this.addressInput = value.address;
            }
            this.selectAddress(this.addressInput, true);
            if (value.lat && value.lng) {
                this.latlng = {
                    lat: value.lat,
                    lng: value.lng
                };
            }
        }
        else {
            this.setLanLngGeolocation();
        }
        this.valid(false);
    };
    GsMapFieldComponent.prototype.setLanLngGeolocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latlng = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        }
    };
    GsMapFieldComponent.prototype.valid = function (keyup, valueGoogleSearch) {
        // mark input as dirty
        if (keyup) {
            this.formGroup.controls[this.field.config.model].markAsDirty();
        }
        if (this.addressInput === '') {
            this.formGroup.controls[this.field.config.model].patchValue(null);
        }
        else if (valueGoogleSearch) {
            this.selectAddress(valueGoogleSearch, false);
        }
        else {
            this.selectAddress(this.addressInput, false);
        }
    };
    GsMapFieldComponent.prototype.loadMap = function () {
        var _this = this;
        if (!this.showMapModal) {
            this.getSearchAddress();
            return;
        }
        this.toggleMap();
        if (!this.mapElement.nativeElement.hasChildNodes() && this.showMapModal) {
            this.map = new WINDOW.google.maps.Map(this.mapElement.nativeElement, {
                center: this.latlng,
                zoom: 15,
                disableDefaultUI: true,
                mapTypeId: 'roadmap'
            });
            if (this.latlng) {
                this.marker = new WINDOW.google.maps.Marker({ position: this.latlng, map: this.map });
            }
            this.getSearchAddress();
            this.map.addListener('click', function (mapsMouseEvent) {
                _this.latlng = {
                    lat: mapsMouseEvent.latLng.lat(),
                    lng: mapsMouseEvent.latLng.lng()
                };
                _this.addMarker();
            });
        }
    };
    GsMapFieldComponent.prototype.toggleMap = function () {
        this.address = [];
        this.showMap = !this.showMap;
    };
    GsMapFieldComponent.prototype.getSearchAddress = function () {
        var _this = this;
        var searchBox = new WINDOW.google.maps.places.SearchBox(this.search.nativeElement);
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            if (places.length === 0) {
                return;
            }
            if (!_this.showMapModal) {
                _this.valid(false, places[0].formatted_address);
                return;
            }
            var bounds = new WINDOW.google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    return;
                }
                _this.latlng = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
                _this.addMarker();
                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                }
                else {
                    bounds.extend(place.geometry.location);
                }
                _this.map.fitBounds(bounds);
            });
        });
    };
    GsMapFieldComponent.prototype.addMarker = function () {
        if (this.marker) {
            this.marker.setMap(null);
        }
        this.marker = new WINDOW.google.maps.Marker({ position: this.latlng, map: this.map });
        this.getAddress();
    };
    GsMapFieldComponent.prototype.getAddress = function () {
        var _this = this;
        this.formsService.getAddress(this.latlng.lat, this.latlng.lng, this.googleMapApiKey)
            .subscribe(function (address) { return _this.address = address.results; });
    };
    GsMapFieldComponent.prototype.selectAddress = function (address, patch) {
        var _this = this;
        this.addressInput = address;
        var addressValue = {
            fullAddress: address,
            address: address.split(', ')[0] || address,
            city: address.split(', ')[1] || '',
            country: address.split(', ')[2] || '',
            lat: this.latlng.lat || '',
            lng: this.latlng.lng || ''
        };
        setTimeout(function () {
            _this.formGroup.controls[_this.field.config.model].patchValue(addressValue);
            _this.formGroup.controls[_this.field.config.model].updateValueAndValidity();
        }, 500);
        if (!patch) {
            this.toggleMap();
        }
    };
    GsMapFieldComponent.prototype.selectAddressText = function () {
        return this.formsService.getMessage('SELECT_ADDRESS');
    };
    __decorate([
        Input()
    ], GsMapFieldComponent.prototype, "field", void 0);
    __decorate([
        Input()
    ], GsMapFieldComponent.prototype, "googleMapApiKey", void 0);
    __decorate([
        ViewChild('mapRef', { static: false })
    ], GsMapFieldComponent.prototype, "mapElement", void 0);
    __decorate([
        ViewChild('search', { static: false })
    ], GsMapFieldComponent.prototype, "search", void 0);
    GsMapFieldComponent = __decorate([
        Component({
            selector: 'gs-map-field',
            template: "<ng-container>\n  <div class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label\n      class=\"gs-field-box gs-field-box-icon gs-field-map-box\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <div class=\"gs-field-input gs-field-input-map\" (click)=\"loadMap()\">\n        <input \n          #search \n          class=\"gs-field-input\" \n          type=\"text\" \n          [placeholder]=\"field.config.placeholder || field.config.label || field.config.model | translate\" \n          [(ngModel)]=\"addressInput\"\n          (keyup)=\"valid(true)\">\n      </div>\n\n      <svg class=\"gs-field-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z\" />\n        </svg>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}"]
        })
    ], GsMapFieldComponent);
    return GsMapFieldComponent;
}(GsGenericFieldComponent));

var GsDividerComponent = /** @class */ (function () {
    function GsDividerComponent() {
    }
    __decorate([
        Input()
    ], GsDividerComponent.prototype, "divider", void 0);
    GsDividerComponent = __decorate([
        Component({
            selector: 'gs-divider',
            template: "<section class=\"gs-form-divider\" [style.padding]=\"divider.config.padding\">\n  <span class=\"gs-form-divider-name\" *ngIf=\"divider.config.seccionName\">\n    {{ divider.config.seccionName | translate }}\n  </span>\n  <span class=\"gs-form-divider-description gs-subtitle\" *ngIf=\"divider.config.description\">\n    {{divider.config.description | translate}}\n  </span>\n  <span class=\"gs-form-divider-line\" [style.background-color]=\"divider.config.dividerColor\"></span>\n</section>\n",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-form-divider .gs-form-divider-name{font-size:1.6rem;font-weight:700;display:block;margin-bottom:.6rem}.gs-form-divider .gs-form-divider-description{margin-bottom:.6rem;font-size:.8rem;display:block}.gs-form-divider .gs-form-divider-line{display:block;width:100%;height:2px;background-color:#e5e5e4}"]
        })
    ], GsDividerComponent);
    return GsDividerComponent;
}());

var GsButtonComponent = /** @class */ (function () {
    function GsButtonComponent() {
        this.hdlAction = new EventEmitter(null);
        this.fieldValueButtonType = GFieldValueButtonType;
    }
    GsButtonComponent.prototype.action = function (action) {
        this.hdlAction.emit({
            action: action,
            id: this.button.config.id
        });
    };
    __decorate([
        Input()
    ], GsButtonComponent.prototype, "button", void 0);
    __decorate([
        Output()
    ], GsButtonComponent.prototype, "hdlAction", void 0);
    GsButtonComponent = __decorate([
        Component({
            selector: 'gs-button',
            template: "<button class=\"button\" (click)=\"action(button.config.action)\">\n  <ng-container *ngIf=\"button.config.action !== fieldValueButtonType.RESET\">\n    {{ button.config.placeholder || button.config.label | translate }}\n  </ng-container>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n    *ngIf=\"button.config.action === fieldValueButtonType.RESET\">\n    <path\n      d=\"M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z\" />\n  </svg>\n</button>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem);width:100%}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.button svg{width:.9rem;height:.9rem;fill:#fff}"]
        })
    ], GsButtonComponent);
    return GsButtonComponent;
}());

var GsShowDataComponent = /** @class */ (function () {
    function GsShowDataComponent() {
        this.fieldValue = '';
    }
    GsShowDataComponent.prototype.ngOnInit = function () {
        this.fieldValue = this.data.config && this.data.config.value ? this.data.config.value.toString() :
            this.data.config.placeholder ||
                this.data.config.label ||
                this.data.config.model;
    };
    __decorate([
        Input()
    ], GsShowDataComponent.prototype, "data", void 0);
    GsShowDataComponent = __decorate([
        Component({
            selector: 'gs-show-data',
            template: "<div class=\"gs-field\">\n  <label\n    class=\"gs-field-box\"\n    [class.gs-form-field-box-full]=\"data.config.label\">\n\n    <span\n      class=\"gs-field-label\"\n      *ngIf=\"data.config.label\">\n      {{ data.config.label | translate }}\n    </span>\n\n    <span class=\"gs-field-input\">  \n      {{ fieldValue | translate }}\n    </span>\n  </label>\n</div>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-field-input,.gs-field-label{opacity:.5;cursor:default}"]
        })
    ], GsShowDataComponent);
    return GsShowDataComponent;
}());

var GsTimePickerComponent = /** @class */ (function (_super) {
    __extends(GsTimePickerComponent, _super);
    function GsTimePickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fieldTouchedHours = false;
        _this.fieldTouchedMinutes = false;
        _this.validateFormatHours = false;
        _this.validateFormatMinutes = false;
        _this.validateRequiredHours = false;
        _this.validateRequiredMinutes = false;
        return _this;
    }
    GsTimePickerComponent.prototype.ngOnInit = function () {
        this.errorsTextArray = {
            requiredMinutes: this.formsService.getValidationMessage('ERR_REQUIRED_MIN'),
            requiredHours: this.formsService.getValidationMessage('ERR_REQUIRED_HOUR'),
            requiredFulltime: this.formsService.getValidationMessage('ERR_REQUIRED_FULLTIME'),
            patternMinutes: this.formsService.getValidationMessage('ERR_PATTERN_MIN'),
            patternHours: this.formsService.getValidationMessage('ERR_PATTERN_HOUR'),
            patternFulltime: this.formsService.getValidationMessage('ERR_PATTERN_FULLTIME')
        };
    };
    GsTimePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.field.currentValue) {
            this.field = changes.field.currentValue;
            if (this.field.config.value) {
                this.fieldValueHours = this.field.config.value.toString().split(':')[0] || '';
                this.fieldValueMinutes = this.field.config.value.toString().split(':')[1] || '';
            }
        }
    };
    GsTimePickerComponent.prototype.onUpdateValue = function (isMinuteInput) {
        if (isMinuteInput === void 0) { isMinuteInput = false; }
        this.validateFormatHours = false;
        this.validateFormatMinutes = false;
        if (!this.fieldTouchedMinutes && isMinuteInput) {
            this.fieldTouchedMinutes = true;
        }
        if (!this.fieldTouchedHours && !isMinuteInput) {
            this.fieldTouchedHours = true;
        }
        if (this.fieldValueHours && !(this.fieldValueHours > 0 && this.fieldValueHours <= 24) && this.fieldTouchedHours) {
            this.validateFormatHours = true;
        }
        if (this.fieldValueMinutes && !(this.fieldValueMinutes >= 0 && this.fieldValueMinutes < 60) && this.fieldTouchedMinutes) {
            this.validateFormatMinutes = true;
        }
        var updatedValue = {
            fullTime: this.fieldValueHours + ":" + this.fieldValueMinutes,
            hour: this.fieldValueHours,
            min: this.fieldValueMinutes
        };
        if (updatedValue.hour && updatedValue.min && !this.validateFormatHours && !this.validateFormatMinutes) {
            this.formGroup.controls[this.field.config.model].patchValue(updatedValue);
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
        }
        else {
            this.formGroup.controls[this.field.config.model].patchValue(null);
        }
    };
    GsTimePickerComponent.prototype.validateRequired = function (isMinuteInput) {
        var input = isMinuteInput ? 'Minutes' : 'Hours';
        this["validateRequired" + input] = this["fieldTouched" + input] &&
            (this["fieldValue" + input] === undefined || this["fieldValue" + input] === '');
        return this["validateRequired" + input];
    };
    __decorate([
        Input()
    ], GsTimePickerComponent.prototype, "field", void 0);
    GsTimePickerComponent = __decorate([
        Component({
            selector: 'gs-timepicker',
            template: "<div class=\"gs-field\" [class.gs-field-has-error]=\"\n  validateField() ||\n  validateRequired(true) && !validateFormatMinutes && !validateFormatHours && !validateRequiredHours && validateRequiredMinutes ||\n  validateRequired() && !validateFormatMinutes && !validateFormatHours && validateRequiredHours && !validateRequiredMinutes ||\n  validateRequiredHours && validateRequiredMinutes ||\n  validateFormatMinutes && !validateFormatHours ||\n  validateFormatHours && !validateFormatMinutes ||\n  validateFormatHours && validateFormatMinutes\n\">\n  \n  <label\n    class=\"gs-field-box\"\n    [class.gs-form-field-box-full]=\"field.config.label\">\n\n    <span\n      class=\"gs-field-label\"\n      *ngIf=\"field.config.label\">\n      {{ field.config.label | translate }}\n    </span>\n\n    <div class=\"gs-field-input gs-field-timepicker\">\n      <!-- hour input -->\n      <input \n        type=\"text\"\n        class=\"gs-field-input gs-field-timepicker-input-hour\" \n        placeholder=\"HH\"\n        [decimal]=\"false\"\n        [gsDigitOnly]=\"true\" \n        [autocomplete]=\"field.config.autocomplete || 'off'\"\n        [(ngModel)]=\"fieldValueHours\" \n        maxlength=\"2\"\n        (keyup)=\"onUpdateValue(false)\"/>\n      <!-- : divider -->\n      <span class=\"gs-field-input gs-field-timepicker-input-divider\">:</span>\n      <!-- min input -->\n      <input \n        type=\"text\"\n        class=\"gs-field-input gs-field-timepicker-input-min\" \n        placeholder=\"mm\"\n        [decimal]=\"false\"\n        [gsDigitOnly]=\"true\" \n        [autocomplete]=\"field.config.autocomplete || 'off'\"\n        maxlength=\"2\"\n        [(ngModel)]=\"fieldValueMinutes\"\n        (keyup)=\"onUpdateValue(true)\"/>\n    </div>\n  </label>\n\n  <span class=\"gs-field-error\">\n    <!-- show one error at a time --->\n    <ng-container *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </ng-container>\n    <ng-container *ngIf=\"validateRequired(true) && !validateFormatMinutes && !validateFormatHours && !validateRequiredHours && validateRequiredMinutes\">\n      {{errorsTextArray.requiredMinutes}}\n    </ng-container>\n    <ng-container *ngIf=\"validateRequired() && !validateFormatMinutes && !validateFormatHours && validateRequiredHours && !validateRequiredMinutes\">\n      {{errorsTextArray.requiredHours}}\n    </ng-container>\n    <ng-container *ngIf=\"validateRequiredHours && validateRequiredMinutes\">\n      {{errorsTextArray.requiredFulltime}}\n    </ng-container>\n    <ng-container *ngIf=\"validateFormatMinutes && !validateFormatHours\">\n      {{errorsTextArray.patternMinutes}}\n    </ng-container>\n    <ng-container *ngIf=\"validateFormatHours && !validateFormatMinutes\">\n      {{errorsTextArray.patternHours}}\n    </ng-container>\n    <ng-container *ngIf=\"validateFormatHours && validateFormatMinutes\">\n      {{errorsTextArray.patternFulltime}}\n    </ng-container>\n  </span>\n</div>",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}input{background:0 0;border:none;outline:0;margin:0;width:100%}.gs-field-timepicker{display:-ms-grid;display:grid;-ms-grid-columns:1fr -webkit-min-content 1fr;-ms-grid-columns:1fr min-content 1fr;grid-template-columns:1fr -webkit-min-content 1fr;grid-template-columns:1fr min-content 1fr}.gs-field-timepicker .gs-field-input.gs-field-timepicker-input-divider,.gs-field-timepicker .gs-field-input.gs-field-timepicker-input-hour,.gs-field-timepicker .gs-field-input.gs-field-timepicker-input-min{grid-column:unset;grid-row:unset;-ms-grid-row-align:center;align-self:center}.gs-field-timepicker .gs-field-timepicker-input-hour,.gs-field-timepicker .gs-field-timepicker-input-min{text-align:center}.gs-field-timepicker .gs-field-timepicker-input-hour{border-radius:1rem 0 0 1rem}.gs-field-timepicker .gs-field-timepicker-input-min{border-radius:0 1rem 1rem 0}.gs-field-timepicker .gs-field-timepicker-input-divider{line-height:1;background-color:#e5e5e4;text-align:center;padding:.2rem .6rem}"]
        })
    ], GsTimePickerComponent);
    return GsTimePickerComponent;
}(GsGenericFieldComponent));

var GsFormComponent = /** @class */ (function () {
    function GsFormComponent(formsService, sanitizer, cdRef, customStyles, apikey) {
        this.formsService = formsService;
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.destroyed$ = new Subject();
        /**
         * Get form group. formGroup: FormGroup `form`
         */
        this.form = new EventEmitter();
        /**
         * Get form group changes. formGroup: FormGroup `form`
         */
        this.formChanges = new EventEmitter();
        /**
         * Get button event selected
         */
        this.customButtonClick = new EventEmitter();
        /**
         * Get form group changes. formGroup: FormGroup `form`
         */
        this.fieldChanged = new EventEmitter();
        this.fieldSelector = GFieldSelector;
        this.fieldValidatorType = GFieldValidatorType;
        this.customStyles = customStyles;
        this.googleMapApiKey = apikey;
    }
    GsFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.formFields && changes.formFields.currentValue) {
            if (this.formGroup) {
                this.formGroup.reset();
            }
            var form = this.formsService.buildForm(changes.formFields.currentValue);
            this.formFields = changes.formFields.currentValue;
            this.formGroup = form;
            this.formGroup.updateValueAndValidity();
        }
        if (this.formGroup) {
            this.onFormChanges();
        }
    };
    GsFormComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    GsFormComponent.prototype.onFormChanges = function () {
        var _this = this;
        this.formGroup.valueChanges.pipe(takeUntil(this.destroyed$))
            .subscribe(function () {
            _this.formChanges.emit(_this.formGroup);
        });
        var fieldWithDisplay = this.formFields.find(function (field) {
            if (field.config.displayIf && !field.notWidget) {
                return field;
            }
        });
        if (fieldWithDisplay) {
            this.formGroup.controls[fieldWithDisplay.config.displayIf.model].valueChanges
                .subscribe(function () {
                _this.formGroup.controls[fieldWithDisplay.config.model].patchValue('');
                _this.formGroup.controls[fieldWithDisplay.config.model].clearValidators();
                _this.formGroup.controls[fieldWithDisplay.config.model].updateValueAndValidity();
            });
        }
    };
    GsFormComponent.prototype.submit = function () {
        this.form.emit(this.formGroup);
    };
    GsFormComponent.prototype.canSubmit = function ($event) {
        if (this.formOptions.onErrorDisableSubmit && this.formGroup.invalid) {
            $event.preventDefault();
            return;
        }
        else {
            this.submit();
        }
    };
    GsFormComponent.prototype.isRequired = function (field) {
        return field.config.validators ? field.config.validators[this.fieldValidatorType.REQUIRED] : false;
    };
    GsFormComponent.prototype.validateField = function (field) {
        return this.formGroup.controls[field].dirty && this.formGroup.controls[field].errors;
    };
    GsFormComponent.prototype.getFieldError = function (field) {
        return this.formsService.fieldError(this.formGroup.controls[field]);
    };
    GsFormComponent.prototype.sanitizeStyle = function (value) {
        return this.sanitizer.bypassSecurityTrustStyle(value);
    };
    GsFormComponent.prototype.checkCondition = function (field) {
        if (!field.config.displayIf) {
            return true;
        }
        if (this.formGroup.controls[field.config.displayIf.model].value === field.config.displayIf.hasValue) {
            var validators = [];
            var fields = field.config.validators;
            for (var validator in fields) {
                if (Object.prototype.hasOwnProperty.call(fields, validator) && fields[validator]) {
                    validators.push(this.formsService.buildErrors(validator, fields[validator]));
                }
            }
            if (this.formGroup.controls[field.config.model]) {
                this.formGroup.controls[field.config.model].setValidators(Validators.compose(validators));
                this.formGroup.controls[field.config.model].updateValueAndValidity();
            }
            return true;
        }
        else if (this.formGroup.controls[field.config.model]) {
            this.formGroup.controls[field.config.model].clearValidators();
            this.formGroup.controls[field.config.model].updateValueAndValidity();
        }
        return false;
    };
    Object.defineProperty(GsFormComponent.prototype, "valueAsStyle", {
        /**
         * Custom styles
         */
        get: function () {
            var variables = '';
            if (this.customStyles) {
                // colors
                if (this.customStyles.color) {
                    if (this.customStyles.color.font) {
                        variables = variables + ("--gs-color-font: " + this.customStyles.color.font + "!important;");
                    }
                    if (this.customStyles.color.primary) {
                        variables = variables + ("--gs-color-primary: " + this.customStyles.color.primary + "!important;");
                    }
                    if (this.customStyles.color.secondary) {
                        variables = variables + ("--gs-color-secondary: " + this.customStyles.color.secondary + "!important;");
                    }
                    if (this.customStyles.color.neutral) {
                        variables = variables + ("--gs-color-neutral: " + this.customStyles.color.neutral + "!important;");
                    }
                    if (this.customStyles.color.border) {
                        variables = variables + ("--gs-color-border: " + this.customStyles.color.border + "!important;");
                    }
                    if (this.customStyles.color.white) {
                        variables = variables + ("--gs-color-white: " + this.customStyles.color.white + "!important;");
                    }
                }
                // ui
                if (this.customStyles.ui) {
                    // font
                    if (this.customStyles.ui.fontSize) {
                        variables = variables + ("--gs-font-size: " + this.customStyles.ui.fontSize + "!important;");
                    }
                    // padding
                    if (this.customStyles.ui.padding) {
                        variables = variables + ("--gs-padding: " + this.customStyles.ui.padding + "!important;");
                    }
                    // opacity
                    if (this.customStyles.ui.disabledOpacity) {
                        variables = variables + ("--gs-disabled-opacity: " + this.customStyles.ui.disabledOpacity + "!important;");
                    }
                    // ui input
                    if (this.customStyles.ui.input) {
                        if (this.customStyles.ui.input.padding) {
                            variables = variables + ("--gs-input-padding: " + this.customStyles.ui.input.padding + "!important;");
                        }
                        if (this.customStyles.ui.input.color) {
                            variables = variables + ("--gs-input-color: " + this.customStyles.ui.input.color + "!important;");
                        }
                        if (this.customStyles.ui.input.background) {
                            variables = variables + ("--gs-input-background: " + this.customStyles.ui.input.background + "!important;");
                        }
                        if (this.customStyles.ui.input.borderSize) {
                            variables = variables + ("--gs-input-border-size: " + this.customStyles.ui.input.borderSize + "!important;");
                        }
                        if (this.customStyles.ui.input.borderStyle) {
                            variables = variables + ("--gs-input-border-style: " + this.customStyles.ui.input.borderStyle + "!important;");
                        }
                        if (this.customStyles.ui.input.borderColor) {
                            variables = variables + ("--gs-input-border-color: " + this.customStyles.ui.input.borderColor + "!important;");
                        }
                        if (this.customStyles.ui.input.borderRadius) {
                            variables = variables + ("--gs-input-border-radius: " + this.customStyles.ui.input.borderRadius + "!important;");
                        }
                        if (this.customStyles.ui.input.borderTop) {
                            variables = variables + ("--gs-input-border-top: " + this.customStyles.ui.input.borderTop + "!important;");
                        }
                        if (this.customStyles.ui.input.borderRight) {
                            variables = variables + ("--gs-input-border-right: " + this.customStyles.ui.input.borderRight + "!important;");
                        }
                        if (this.customStyles.ui.input.borderBottom) {
                            variables = variables + ("--gs-input-border-bottom: " + this.customStyles.ui.input.borderRadius + "!important;");
                        }
                        if (this.customStyles.ui.input.borderLeft) {
                            variables = variables + ("--gs-input-border-left: " + this.customStyles.ui.input.borderLeft + "!important;");
                        }
                    }
                    // ui primary button
                    if (this.customStyles.ui.primaryButton) {
                        if (this.customStyles.ui.primaryButton.padding) {
                            variables = variables + ("--gs-primary-button-padding: " + this.customStyles.ui.primaryButton.padding + "!important;");
                        }
                        if (this.customStyles.ui.primaryButton.color) {
                            variables = variables + ("--gs-primary-button-color: " + this.customStyles.ui.primaryButton.color + "!important;");
                        }
                        if (this.customStyles.ui.primaryButton.background) {
                            variables = variables + ("--gs-primary-button-background: " + this.customStyles.ui.primaryButton.background + "!important;");
                        }
                        if (this.customStyles.ui.primaryButton.borderColor) {
                            variables = variables + ("--gs-primary-button-border-color: " + this.customStyles.ui.primaryButton.borderColor + "!important;");
                        }
                        if (this.customStyles.ui.primaryButton.borderRadius) {
                            variables = variables + ("--gs-primary-button-border-radius: " + this.customStyles.ui.primaryButton.borderRadius + "!important;");
                        }
                    }
                    // ui secondary button
                    if (this.customStyles.ui.secondaryButton) {
                        if (this.customStyles.ui.secondaryButton.padding) {
                            variables = variables + ("--gs-secondary-button-padding: " + this.customStyles.ui.secondaryButton.padding + "!important;");
                        }
                        if (this.customStyles.ui.secondaryButton.color) {
                            variables = variables + ("--gs-secondary-button-color: " + this.customStyles.ui.secondaryButton.color + "!important;");
                        }
                        if (this.customStyles.ui.secondaryButton.background) {
                            variables = variables + ("--gs-secondary-button-background: " + this.customStyles.ui.secondaryButton.background + "!important;");
                        }
                        if (this.customStyles.ui.secondaryButton.borderColor) {
                            variables = variables + ("--gs-secondary-button-border-color: " + this.customStyles.ui.secondaryButton.borderColor + "!important;");
                        }
                        if (this.customStyles.ui.secondaryButton.borderRadius) {
                            variables = variables + ("--gs-secondary-button-border-radius: " + this.customStyles.ui.secondaryButton.borderRadius + "!important;");
                        }
                    }
                }
                // layout
                if (this.formOptions && this.formOptions.layout) {
                    if (this.formOptions.layout.columns) {
                        if (typeof this.formOptions.layout.columns === 'number') {
                            // if typeof number
                            variables = variables + ("--gs-layout-columns-quantity: repeat(" + this.formOptions.layout.columns + ", 1fr)!important;");
                        }
                        else {
                            // if typeof string
                            variables = variables + ("--gs-layout-columns-quantity: " + this.formOptions.layout.columns + "!important;");
                        }
                    }
                    if (this.formOptions.layout.innerPadding) {
                        variables = variables + ("--gs-layout-padding: " + this.formOptions.layout.innerPadding + "!important;");
                    }
                }
                return this.sanitizer.bypassSecurityTrustStyle(variables);
            }
        },
        enumerable: true,
        configurable: true
    });
    GsFormComponent.prototype.formActions = function (action, id) {
        switch (action) {
            case GFieldValueButtonType.SUBMIT:
                this.submit();
                break;
            case GFieldValueButtonType.RESET:
                if (this.formGroup) {
                    this.formGroup.reset();
                    if (this.fileInputComponent !== undefined) {
                        this.fileInputComponent.forEach(function (el) { return el.resetField(); });
                    }
                    if (this.datePickerComponent !== undefined) {
                        this.datePickerComponent.forEach(function (el) { return el.resetField(); });
                    }
                    if (this.dropdownComponent !== undefined) {
                        this.dropdownComponent.forEach(function (el) { return el.resetField(); });
                    }
                }
                break;
            case GFieldValueButtonType.CUSTOM:
                this.customButtonClick.emit(id);
                break;
        }
    };
    GsFormComponent.prototype.onFieldChanged = function (changes) {
        this.fieldChanged.emit(changes);
    };
    GsFormComponent.ctorParameters = function () { return [
        { type: GsFormsService },
        { type: DomSanitizer },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: ['customStyles',] }] },
        { type: undefined, decorators: [{ type: Inject, args: ['googleMapApiKey',] }] }
    ]; };
    __decorate([
        Input()
    ], GsFormComponent.prototype, "formOptions", void 0);
    __decorate([
        Input()
    ], GsFormComponent.prototype, "formFields", void 0);
    __decorate([
        Output()
    ], GsFormComponent.prototype, "form", void 0);
    __decorate([
        Output()
    ], GsFormComponent.prototype, "formChanges", void 0);
    __decorate([
        Output()
    ], GsFormComponent.prototype, "customButtonClick", void 0);
    __decorate([
        Output()
    ], GsFormComponent.prototype, "fieldChanged", void 0);
    __decorate([
        ViewChildren(GsFileInputComponent)
    ], GsFormComponent.prototype, "fileInputComponent", void 0);
    __decorate([
        ViewChildren(GsDatePickerComponent)
    ], GsFormComponent.prototype, "datePickerComponent", void 0);
    __decorate([
        ViewChildren(GsDropdownComponent)
    ], GsFormComponent.prototype, "dropdownComponent", void 0);
    __decorate([
        HostBinding('attr.style')
    ], GsFormComponent.prototype, "valueAsStyle", null);
    GsFormComponent = __decorate([
        Component({
            selector: 'gs-form',
            template: "<ng-container *ngIf=\"formGroup\">\n  <form\n    class=\"gs-form\"\n    [autocomplete]=\"formOptions.autocomplete || 'off'\"\n    [formGroup]=\"formGroup\"\n    (keydown.enter)=\"canSubmit($event)\"\n    (ngSubmit)=\"submit()\">\n\n    <div class=\"gs-form-body\">\n      <ng-container *ngFor=\"let field of formFields\">\n        <!-- form fields -->\n        <div class=\"gs-form-field\"\n          *ngIf=\"!field.notWidget && checkCondition(field)\"\n          [style.grid-column]=\"field.config.gridColumn ? sanitizeStyle(field.config.gridColumn) : null\"\n          [style.grid-row]=\"field.config.gridRow ? sanitizeStyle(field.config.gridRow) : null\">\n\n          <ng-container [ngSwitch]=\"field.selector\">\n            <gs-text-input *ngSwitchCase=\"fieldSelector.TEXT\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-text-input>\n            <gs-textarea *ngSwitchCase=\"fieldSelector.TEXTAREA\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-textarea>\n            <gs-password-input *ngSwitchCase=\"fieldSelector.PASSWORD\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-password-input>\n            <gs-number-input *ngSwitchCase=\"fieldSelector.NUMBER\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-number-input>\n            <gs-toggle *ngSwitchCase=\"fieldSelector.TOGGLE\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-toggle>\n            <gs-currency-input *ngSwitchCase=\"fieldSelector.CURRENCY\" [field]=\"field\" [formGroup]=\"formGroup\" [countryGlobal]=\"formOptions.country || null\"></gs-currency-input>\n            <gs-phone-input *ngSwitchCase=\"fieldSelector.PHONE\" [field]=\"field\" [formGroup]=\"formGroup\" [countryGlobal]=\"formOptions.country || null\"></gs-phone-input>\n            <gs-datepicker *ngSwitchCase=\"fieldSelector.DATE\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-datepicker>\n            <gs-file-input *ngSwitchCase=\"fieldSelector.FILE\" [field]=\"field\" [formGroup]=\"formGroup\" (fieldChanged)=\"onFieldChanged( $event )\"></gs-file-input>\n            <gs-separated-by-comma *ngSwitchCase=\"fieldSelector.COMMA\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-separated-by-comma>\n            <gs-two-data-input *ngSwitchCase=\"fieldSelector.TWO_DATA\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-two-data-input>\n            <gs-color-picker *ngSwitchCase=\"fieldSelector.COLOR\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-color-picker>\n            <gs-map-field *ngSwitchCase=\"fieldSelector.MAP\" [field]=\"field\" [formGroup]=\"formGroup\" [googleMapApiKey]=\"googleMapApiKey\"></gs-map-field>\n            <gs-checkbox *ngSwitchCase=\"fieldSelector.CHECKBOX\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-checkbox>\n            <gs-timepicker *ngSwitchCase=\"fieldSelector.TIME\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-timepicker>\n            <!-- fields with externalOptions @input() -->\n            <gs-radio-button *ngSwitchCase=\"fieldSelector.RADIO\" [field]=\"field\" [formGroup]=\"formGroup\"\n              [fieldOption]=\"field.config['externalOptions'] ? formOptions.fieldValues[field.config.model] : null\">\n            </gs-radio-button>\n            <gs-dropdown *ngSwitchCase=\"fieldSelector.DROPDOWN\" [field]=\"field\" [formGroup]=\"formGroup\"\n              [fieldOption]=\"field.config['externalOptions'] ? formOptions.fieldValues[field.config.model] : null\">\n            </gs-dropdown>\n            <gs-multiselect *ngSwitchCase=\"fieldSelector.MULTISELECT\" [field]=\"field\" [formGroup]=\"formGroup\"\n              [fieldOption]=\"field.config['externalOptions'] ? formOptions.fieldValues[field.config.model] : null\">\n            </gs-multiselect>\n          </ng-container>\n        </div>\n\n        <!-- Additional fields -->\n        <div class=\"gs-form-field\"\n          *ngIf=\"field.notWidget && checkCondition(field)\"\n          [style.grid-column]=\"field.config.gridColumn ? sanitizeStyle(field.config.gridColumn) : null\"\n          [style.grid-row]=\"field.config.gridRow ? sanitizeStyle(field.config.gridRow) : null\">\n          <ng-container [ngSwitch]=\"field.selector\">\n            <gs-divider *ngSwitchCase=\"fieldSelector.DIVIDER\" [divider]=\"field\"></gs-divider>\n            <gs-show-data *ngSwitchCase=\"fieldSelector.SHOW_DATA\" [data]=\"field\"></gs-show-data>\n            <gs-button *ngSwitchCase=\"fieldSelector.BUTTON\" [button]=\"field\" (hdlAction)=\"formActions($event.action, $event.id)\"></gs-button>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <div class=\"gs-form-footer\">\n      <span *ngIf=\"formOptions.context.cancelButton && formOptions.context.cancelButton.show\">\n        <button type=\"reset\" class=\"button button-secondary\">\n          {{ formOptions.context.cancelButton.text | translate }}\n        </button>\n      </span>\n\n      <span *ngIf=\"formOptions.context.saveButton && formOptions.context.saveButton.show\">\n        <button type=\"submit\" class=\"button button-primary\"\n          [class.disabled]=\"formOptions.onErrorDisableSubmit && formGroup.invalid\">\n          {{ formOptions.context.saveButton.text | translate  }}\n        </button>\n      </span>\n    </div>\n  </form>\n</ng-container>\n",
            styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-form .gs-form-body{display:-ms-grid;display:grid;grid-template-columns:var(--gs-layout-columns-quantity,repeat(auto-fit,minmax(200px,1fr)));padding:var(--gs-layout-padding,1rem 1rem 0);margin-bottom:1rem;gap:1rem}@media screen and (max-width:576px){.gs-form .gs-form-body{-ms-grid-columns:1fr;grid-template-columns:1fr;padding:.8rem;gap:.8rem}.gs-form .gs-form-body .gs-form-field{grid-column:auto!important}.gs-form .gs-form-footer .button{width:100%;margin:unset}}.gs-form .gs-form-body .gs-form-field{position:relative}.gs-form .gs-form-body .gs-form-field .gs-form-field_label{display:block;font-size:var(--gs-font-size,.9rem);margin-bottom:6px}.gs-form .gs-form-body .gs-no-widget{-ms-grid-row-align:center;align-self:center}.gs-form .gs-form-footer{display:-ms-grid;display:grid;-ms-grid-columns:auto;grid-template-columns:auto;gap:1rem}.gs-form .gs-form-footer .button{width:100%}.gs-form .gs-form-footer .button:first-child{margin-right:auto}.gs-form .gs-form-footer .button:last-child{margin-left:auto}@media screen and (max-width:576px){.gs-form .gs-form-footer{-ms-grid-columns:1fr;grid-template-columns:1fr;padding:.8rem;gap:.8rem}}"]
        }),
        __param(3, Inject('customStyles')),
        __param(4, Inject('googleMapApiKey'))
    ], GsFormComponent);
    return GsFormComponent;
}());

// https://github.com/changhuixu/ngx-digit-only/blob/master/projects/uiowa/digit-only/src/lib/digit-only.directive.ts
var DigitOnlyDirective = /** @class */ (function () {
    function DigitOnlyDirective(el) {
        this.el = el;
        this.decimalCounter = 0;
        this.navigationKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'Clear',
            'Copy',
            'Paste'
        ];
        this.decimal = false;
        this.inputElement = el.nativeElement;
    }
    DigitOnlyDirective.prototype.onKeyDown = function (e) {
        if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) || // Allow: Cmd+X (Mac)
            (this.decimal && e.key === '.' && this.decimalCounter < 1) // Allow: only one decimal point
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if (e.key === ' ' || isNaN(Number(e.key))) {
            e.preventDefault();
        }
    };
    DigitOnlyDirective.prototype.onKeyUp = function (e) {
        if (!this.decimal) {
            return;
        }
        else {
            this.decimalCounter = this.el.nativeElement.value.split('.').length - 1;
        }
    };
    DigitOnlyDirective.prototype.onPaste = function (event) {
        var pastedInput = event.clipboardData.getData('text/plain');
        var pasted = false;
        if (!this.decimal) {
            pasted = document.execCommand('insertText', false, pastedInput.replace(/[^0-9]/g, ''));
        }
        else if (this.isValidDecimal(pastedInput)) {
            pasted = document.execCommand('insertText', false, pastedInput.replace(/[^0-9.]/g, ''));
        }
        if (pasted) {
            event.preventDefault();
        }
        else {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(pastedInput);
                document.execCommand('paste');
            }
        }
    };
    DigitOnlyDirective.prototype.onDrop = function (event) {
        var textData = event.dataTransfer.getData('text');
        this.inputElement.focus();
        var pasted = false;
        if (!this.decimal) {
            pasted = document.execCommand('insertText', false, textData.replace(/[^0-9]/g, ''));
        }
        else if (this.isValidDecimal(textData)) {
            pasted = document.execCommand('insertText', false, textData.replace(/[^0-9.]/g, ''));
        }
        if (pasted) {
            event.preventDefault();
        }
        else {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textData);
                document.execCommand('paste');
            }
        }
    };
    DigitOnlyDirective.prototype.isValidDecimal = function (str) {
        return str.split('.').length <= 2;
    };
    DigitOnlyDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], DigitOnlyDirective.prototype, "decimal", void 0);
    __decorate([
        HostListener('keydown', ['$event'])
    ], DigitOnlyDirective.prototype, "onKeyDown", null);
    __decorate([
        HostListener('keyup', ['$event'])
    ], DigitOnlyDirective.prototype, "onKeyUp", null);
    __decorate([
        HostListener('paste', ['$event'])
    ], DigitOnlyDirective.prototype, "onPaste", null);
    __decorate([
        HostListener('drop', ['$event'])
    ], DigitOnlyDirective.prototype, "onDrop", null);
    DigitOnlyDirective = __decorate([
        Directive({
            selector: '[gsDigitOnly]'
        })
    ], DigitOnlyDirective);
    return DigitOnlyDirective;
}());

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new EventEmitter();
    }
    ClickOutsideDirective.prototype.onMouseEnter = function (targetElement) {
        var clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    };
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Output('gsClickOutside')
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        HostListener('document:click', ['$event.target'])
    ], ClickOutsideDirective.prototype, "onMouseEnter", null);
    ClickOutsideDirective = __decorate([
        Directive({
            selector: '[gsClickOutside]'
        })
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());

var directive = [
    DigitOnlyDirective,
    ClickOutsideDirective,
];
var widgets = [
    GsGenericFieldComponent,
    GsTextInputComponent,
    GsTextareaComponent,
    GsPasswordInputComponent,
    GsNumberInputComponent,
    GsToggleComponent,
    GsCheckboxComponent,
    GsRadioButtonComponent,
    GsDropdownComponent,
    GsCurrencyInputComponent,
    GsPhoneInputComponent,
    GsDatePickerComponent,
    GsSeparatedByCommaComponent,
    GsFileInputComponent,
    GsDividerComponent,
    GsTwoDataInputComponent,
    GsMultiselectComponent,
    GsColorPickerComponent,
    GsMapFieldComponent,
    GsTimePickerComponent,
    GsButtonComponent,
    GsShowDataComponent,
    GsFormComponent
];
var GsFormsModule = /** @class */ (function () {
    function GsFormsModule() {
    }
    GsFormsModule_1 = GsFormsModule;
    GsFormsModule.forRoot = function (styles, googleMapApiKey) {
        if (googleMapApiKey && !document.getElementById('google-map-script')) {
            var googleScript = document.createElement('script');
            googleScript.defer = true;
            googleScript.async = true;
            googleScript.id = 'google-map-script';
            googleScript.type = 'text/javascript';
            googleScript.src = "https://maps.googleapis.com/maps/api/js?key=" + googleMapApiKey + "&libraries=places";
            document.body.appendChild(googleScript);
        }
        return {
            ngModule: GsFormsModule_1,
            providers: [
                {
                    provide: 'customStyles',
                    useValue: styles
                },
                {
                    provide: 'googleMapApiKey',
                    useValue: googleMapApiKey
                }
            ]
        };
    };
    var GsFormsModule_1;
    GsFormsModule = GsFormsModule_1 = __decorate([
        NgModule({
            declarations: __spread(directive, widgets),
            imports: [
                CommonModule,
                TranslateModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            providers: [
                GsFormsService
            ],
            exports: __spread(directive, widgets),
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
    ], GsFormsModule);
    return GsFormsModule;
}());

/*
 * Public API Surface of gs-forms
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GButton, GCheckboxField, GColorPickerField, GCurrencyField, GDatePickerField, GDivider, GDropdownField, GFieldBooleanConfiguration, GFieldButtonConfiguration, GFieldConfiguration, GFieldCountryCode, GFieldCountryFormmatConfiguration, GFieldDividerConfiguration, GFieldFile, GFieldFileConfiguration, GFieldMapConfiguration, GFieldNumberConfiguration, GFieldOptionValuesConfiguration, GFieldSelector, GFieldStringConfiguration, GFieldTwoDataConfiguration, GFieldValidatorType, GFieldValueButtonType, GFieldValueType, GMapField, GMultiselectField, GNumberField, GPasswordField, GPhoneField, GRadioField, GSeparatedByComma, GShowData, GTaxDocumentTypeField, GTextField, GTextareaField, GTimeField, GToggleField, GTwoDataInput, GsButtonComponent, GsCheckboxComponent, GsColorPickerComponent, GsCurrencyInputComponent, GsDatePickerComponent, GsDividerComponent, GsDropdownComponent, GsFileInputComponent, GsFormComponent, GsFormsModule, GsFormsService, GsGenericFieldComponent, GsMapFieldComponent, GsMultiselectComponent, GsNumberInputComponent, GsPasswordInputComponent, GsPhoneInputComponent, GsRadioButtonComponent, GsSeparatedByCommaComponent, GsShowDataComponent, GsTextInputComponent, GsTextareaComponent, GsTimePickerComponent, GsToggleComponent, GsTwoDataInputComponent, LOCATION, MESSAGES, VALIDATION_MESSAGES, DigitOnlyDirective as ɵa, ClickOutsideDirective as ɵb, GsTextInputComponent as ɵc, GsTextareaComponent as ɵd, GsPasswordInputComponent as ɵe, GsNumberInputComponent as ɵf, GsToggleComponent as ɵg, GsCheckboxComponent as ɵh, GsRadioButtonComponent as ɵi, GsDropdownComponent as ɵj, GsCurrencyInputComponent as ɵk, GsPhoneInputComponent as ɵl, GsDatePickerComponent as ɵm, GsSeparatedByCommaComponent as ɵn, GsFileInputComponent as ɵo, GsDividerComponent as ɵp, GsTwoDataInputComponent as ɵq, GsMultiselectComponent as ɵr, GsColorPickerComponent as ɵs, GsMapFieldComponent as ɵt, GsButtonComponent as ɵu, GsShowDataComponent as ɵv };
//# sourceMappingURL=gs-ng-forms.js.map
