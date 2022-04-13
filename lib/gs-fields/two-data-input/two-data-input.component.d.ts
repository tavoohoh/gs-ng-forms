import { OnChanges, SimpleChanges } from '@angular/core';
import { GTwoDataInput } from '../../gs-forms.widgets';
import { GFieldValidatorType, GFieldValueType } from '../../gs-forms.enums';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
export declare class GsTwoDataInputComponent extends GsGenericFieldComponent implements OnChanges {
    field: GTwoDataInput;
    leftFieldValue: any;
    rightFieldValue: any;
    leftFieldType: any;
    rightFieldType: any;
    leftFieldPlaceholder: string;
    rightFieldPlaceholder: string;
    valueType: typeof GFieldValueType;
    fieldValidatorType: typeof GFieldValidatorType;
    rightFieldTouched: boolean;
    leftFieldTouched: boolean;
    ngOnChanges(changes: SimpleChanges): void;
    setGrid(): object;
    onUpdateValue(right: boolean): void;
    checkMinMaxValidator(input: string, validator: string): any;
    requiredText(right: boolean): string;
    validateRequired(right: boolean): boolean;
}
