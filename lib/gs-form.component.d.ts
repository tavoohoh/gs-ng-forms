import { OnChanges, SimpleChanges, ChangeDetectorRef, AfterViewChecked, QueryList } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { GsFormsService } from './gs-forms.service';
import { GFieldSelector, GFieldValidatorType } from './gs-forms.enums';
import { GFormFields, GFormOptions, GField } from './gs-forms.models';
import { GsFileInputComponent, GsDatePickerComponent, GsDropdownComponent } from './gs-fields';
export declare class GsFormComponent implements AfterViewChecked, OnChanges {
    private formsService;
    private sanitizer;
    private cdRef;
    private destroyed$;
    /**
     * Input: formOptions: GFormOptions
     *
     * @description
     * Set custom configuration to the form
     *
     * @example
     * public formOptions: GFormOptions = {
     *   country: GFieldCountryCode.CO,
     *   fieldValues: {
     *     checkbox: [
     *       {
     *         value: true,
     *         text: 'true'
     *       }
     *     ]
     *   },
     *   layout: {
     *     columns: 'repeat(4, 1fr)',
     *   }
     * };
     */
    formOptions: GFormOptions;
    /**
     * Input: formFields: GFormFields
     *
     * @description
     * Form fields array
     *
     * @example
     * public formFields: GFormFields = [
     *   new GTextField({
     *     model: 'text',
     *     label: 'TEXT',
     *     placeholder: 'TEXT_INPUT',
     *     value: 'Hello text input',
     *     validators: {
     *       [GFieldValidatorType.REQUIRED]: true
     *     },
     *   }),
     * ];
     */
    formFields: GFormFields;
    /**
     * Get form group. formGroup: FormGroup `form`
     */
    private form;
    /**
     * Get form group changes. formGroup: FormGroup `form`
     */
    private formChanges;
    /**
     * Get button event selected
     */
    private customButtonClick;
    /**
     * Get form group changes. formGroup: FormGroup `form`
     */
    private fieldChanged;
    fileInputComponent: QueryList<GsFileInputComponent>;
    datePickerComponent: QueryList<GsDatePickerComponent>;
    dropdownComponent: QueryList<GsDropdownComponent>;
    formGroup: FormGroup;
    fieldSelector: typeof GFieldSelector;
    fieldValidatorType: typeof GFieldValidatorType;
    private customStyles;
    googleMapApiKey: string;
    constructor(formsService: GsFormsService, sanitizer: DomSanitizer, cdRef: ChangeDetectorRef, customStyles: any, apikey: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewChecked(): void;
    private onFormChanges;
    submit(): void;
    canSubmit($event: any): void;
    isRequired(field: any): boolean;
    validateField(field: any): ValidationErrors;
    getFieldError(field: any): string;
    sanitizeStyle(value: string): import("@angular/platform-browser").SafeStyle;
    checkCondition(field: GField): boolean;
    /**
     * Custom styles
     */
    readonly valueAsStyle: any;
    formActions(action: string, id?: string): void;
    onFieldChanged(changes: {
        [key: string]: string;
    }): void;
}
