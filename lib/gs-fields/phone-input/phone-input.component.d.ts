import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { GPhoneField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
export declare class GsPhoneInputComponent extends GsGenericFieldComponent implements OnChanges {
    field: GPhoneField;
    private countryGlobal;
    inputElement: ElementRef;
    countryCode: string;
    country: string;
    countryCodeOptions: Array<{
        code: string;
        country: string;
    }>;
    showCountryOptions: boolean;
    phoneMask: string;
    editCountry: boolean;
    value: string;
    touched: boolean;
    invalid: boolean;
    fieldValidatorType: typeof GFieldValidatorType;
    ngOnChanges(changes: SimpleChanges): void;
    formatPhone(keyup: boolean, touched?: boolean): string;
    updatePhoneMask(country: string): void;
    private setCountryCodeOptions;
    toggleCountryOptions(close?: boolean): void;
    errorText(error: string): string;
    returnBuildingError(): void;
}
