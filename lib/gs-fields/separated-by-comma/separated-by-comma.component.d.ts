import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { GSeparatedByComma } from '../../gs-forms.widgets';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
export declare class GsSeparatedByCommaComponent extends GsGenericFieldComponent implements OnChanges {
    field: GSeparatedByComma;
    inputElement: ElementRef;
    fieldOption: Array<string>;
    value: string;
    ngOnChanges(changes: SimpleChanges): void;
    focusInput(): void;
    removeValue(valIndex: number): void;
    disableEnter(event: Event): void;
    removeLastValue(event: any): void;
    removeAll(): void;
    addValue(event: any): void;
}
