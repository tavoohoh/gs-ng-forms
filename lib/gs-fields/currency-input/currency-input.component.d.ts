import { OnChanges, SimpleChanges } from '@angular/core';
import { GCurrencyField } from '../../gs-forms.widgets';
import { GFieldValidatorType } from '../../gs-forms.enums';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
export declare class GsCurrencyInputComponent extends GsGenericFieldComponent implements OnChanges {
    field: GCurrencyField;
    private countryGlobal;
    pattern: string | RegExp;
    prefix: string;
    suffix: string;
    value: string;
    private thousandsSeparator;
    private decimalSeparator;
    private precision;
    fieldValidatorType: typeof GFieldValidatorType;
    ngOnChanges(changes: SimpleChanges): void;
    formatCurrency(keyup: boolean): void;
    returnBuildingError(): void;
}
