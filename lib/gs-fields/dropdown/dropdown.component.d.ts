import { OnChanges, SimpleChanges } from '@angular/core';
import { GDropdownField } from '../../gs-forms.widgets';
import { GFieldOptionValues } from '../../gs-forms.models';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
export declare class GsDropdownComponent extends GsGenericFieldComponent implements OnChanges {
    field: GDropdownField;
    fieldOption: GFieldOptionValues;
    dropdownTextValue: string;
    ngOnChanges(changes: SimpleChanges): void;
    changeValue(text: string, value: string): void;
    private setDropdownValue;
    resetField(): void;
}
