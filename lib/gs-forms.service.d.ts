import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GFormFields, GFieldOptionValues, GFormFieldsReadOnly } from './gs-forms.models';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
export declare class GsFormsService {
    private formBuilder;
    private translateService;
    private http;
    constructor(formBuilder: FormBuilder, translateService: TranslateService, http: HttpClient);
    buildErrors(validator: string, value: any): Validators;
    private setDefaultFormObject;
    buildForm(formField: GFormFields): FormGroup;
    fieldError(field: any): string;
    getValidationMessage(key: string, param?: string): string;
    getMessage(key: string, param?: string): string;
    getLang(): string;
    uploadFileServices(url: string, method: string, file: File, paramName: string): Observable<Response>;
    /**
     * @description
     * Convert an array of values `Array<{[key: string]: any}> | Array<{[key: string]: any, [key: string]: any}>`
     *
     * @param options
     * An array of values
     * @param optionValue
     * The key to be mapped to `GFieldOptionValues` key `value`
     * @param optionText
     * The key to be mapped to `GFieldOptionValues` key `text`
     *
     * @key value
     * The value used in a select option
     * @key text
     * The text used inside of select option
     */
    mapFieldOptionValues(options: Array<{}>, optionValue: string, optionText: string): GFieldOptionValues;
    /**
     * @description
     * Patch form values
     *
     * @param formFields your `GFormFields`
     * @param formValues an object of values like `FormGroup` value.
     * The keys of `formValues` most match the model name of your `GFields`
     */
    patchFormValues(formFields: GFormFields | GFormFieldsReadOnly, formValues: {
        [key: string]: any;
    }, resetForm?: boolean, resetFields?: boolean): GFormFields;
    getAddress(lan: any, lng: any, apikey: any): Observable<any>;
}
