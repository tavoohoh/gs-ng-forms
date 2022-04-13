import { OnChanges, SimpleChanges } from '@angular/core';
import { GDropdownField } from '../../gs-forms.widgets';
import { GFieldOptionValues, GFieldExistsOptionValues, GFieldOptionValueExists } from '../../gs-forms.models';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
export declare class GsMultiselectComponent extends GsGenericFieldComponent implements OnChanges {
    field: GDropdownField;
    fieldOption: GFieldOptionValues;
    options: GFieldExistsOptionValues;
    noSelection: boolean;
    touched: boolean;
    showMultiselectOptions: boolean;
    ngOnChanges(changes: SimpleChanges): void;
    toggleOption(option: GFieldOptionValueExists, touched?: boolean): void;
    toggleMultiselectOptions(value?: boolean): void;
    requiredText(): string;
}
