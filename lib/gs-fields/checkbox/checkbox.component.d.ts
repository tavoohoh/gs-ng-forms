import { OnChanges, SimpleChanges } from '@angular/core';
import { GCheckboxField } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
export declare class GsCheckboxComponent extends GsGenericFieldComponent implements OnChanges {
    field: GCheckboxField;
    ngOnChanges(changes: SimpleChanges): void;
}
