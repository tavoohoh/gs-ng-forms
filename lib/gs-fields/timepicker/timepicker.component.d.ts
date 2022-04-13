import { SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { GTimeField } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
export declare class GsTimePickerComponent extends GsGenericFieldComponent implements OnChanges, OnInit {
    field: GTimeField;
    fieldValueHours: any;
    fieldValueMinutes: any;
    fieldTouchedHours: boolean;
    fieldTouchedMinutes: boolean;
    validateFormatHours: boolean;
    validateFormatMinutes: boolean;
    validateRequiredHours: boolean;
    validateRequiredMinutes: boolean;
    errorsTextArray: {
        requiredMinutes: string;
        requiredHours: string;
        requiredFulltime: string;
        patternMinutes: string;
        patternHours: string;
        patternFulltime: string;
    };
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onUpdateValue(isMinuteInput?: boolean): void;
    validateRequired(isMinuteInput?: boolean): any;
}
