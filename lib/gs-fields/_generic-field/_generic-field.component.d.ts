import { GsFormsService } from '../../gs-forms.service';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { GFieldValidatorType } from '../../gs-forms.enums';
export declare class GsGenericFieldComponent {
    formsService: GsFormsService;
    field: any;
    formGroup: FormGroup;
    fieldValidatorType: typeof GFieldValidatorType;
    constructor(formsService: GsFormsService);
    validateField($event?: any): ValidationErrors;
    getFieldError($event?: any): string;
}
