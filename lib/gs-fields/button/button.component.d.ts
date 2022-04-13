import { EventEmitter } from '@angular/core';
import { GButton } from './../../gs-forms.widgets';
import { GFieldValueButtonType } from '../../gs-forms.enums';
export declare class GsButtonComponent {
    button: GButton;
    hdlAction: EventEmitter<any>;
    fieldValueButtonType: typeof GFieldValueButtonType;
    action(action: string): void;
}
