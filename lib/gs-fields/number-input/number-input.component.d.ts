import { GNumberField } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
export declare class GsNumberInputComponent extends GsGenericFieldComponent {
    field: GNumberField;
    setPresicion(input: {
        value: string;
    }): void;
}
