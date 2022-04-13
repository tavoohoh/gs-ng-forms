import { SimpleChanges, OnChanges } from '@angular/core';
import { GRadioField } from '../../gs-forms.widgets';
import { GFieldOptionValues } from '../../gs-forms.models';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
export declare class GsRadioButtonComponent extends GsGenericFieldComponent implements OnChanges {
    field: GRadioField;
    fieldOption: GFieldOptionValues;
    ngOnChanges(changes: SimpleChanges): void;
}
