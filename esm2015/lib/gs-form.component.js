import * as tslib_1 from "tslib";
import { Component, Input, Inject, HostBinding, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { GsFormsService } from './gs-forms.service';
import { GFieldSelector, GFieldValidatorType, GFieldValueButtonType } from './gs-forms.enums';
import { GsFileInputComponent, GsDatePickerComponent, GsDropdownComponent } from './gs-fields';
let GsFormComponent = class GsFormComponent {
    constructor(formsService, sanitizer, cdRef, customStyles, apikey) {
        this.formsService = formsService;
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.destroyed$ = new Subject();
        /**
         * Get form group. formGroup: FormGroup `form`
         */
        this.form = new EventEmitter();
        /**
         * Get form group changes. formGroup: FormGroup `form`
         */
        this.formChanges = new EventEmitter();
        /**
         * Get button event selected
         */
        this.customButtonClick = new EventEmitter();
        /**
         * Get form group changes. formGroup: FormGroup `form`
         */
        this.fieldChanged = new EventEmitter();
        this.fieldSelector = GFieldSelector;
        this.fieldValidatorType = GFieldValidatorType;
        this.customStyles = customStyles;
        this.googleMapApiKey = apikey;
    }
    ngOnChanges(changes) {
        if (changes && changes.formFields && changes.formFields.currentValue) {
            if (this.formGroup) {
                this.formGroup.reset();
            }
            const form = this.formsService.buildForm(changes.formFields.currentValue);
            this.formFields = changes.formFields.currentValue;
            this.formGroup = form;
            this.formGroup.updateValueAndValidity();
        }
        if (this.formGroup) {
            this.onFormChanges();
        }
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    onFormChanges() {
        this.formGroup.valueChanges.pipe(takeUntil(this.destroyed$))
            .subscribe(() => {
            this.formChanges.emit(this.formGroup);
        });
        const fieldWithDisplay = this.formFields.find((field) => {
            if (field.config.displayIf && !field.notWidget) {
                return field;
            }
        });
        if (fieldWithDisplay) {
            this.formGroup.controls[fieldWithDisplay.config.displayIf.model].valueChanges
                .subscribe(() => {
                this.formGroup.controls[fieldWithDisplay.config.model].patchValue('');
                this.formGroup.controls[fieldWithDisplay.config.model].clearValidators();
                this.formGroup.controls[fieldWithDisplay.config.model].updateValueAndValidity();
            });
        }
    }
    submit() {
        this.form.emit(this.formGroup);
    }
    canSubmit($event) {
        if (this.formOptions.onErrorDisableSubmit && this.formGroup.invalid) {
            $event.preventDefault();
            return;
        }
        else {
            this.submit();
        }
    }
    isRequired(field) {
        return field.config.validators ? field.config.validators[this.fieldValidatorType.REQUIRED] : false;
    }
    validateField(field) {
        return this.formGroup.controls[field].dirty && this.formGroup.controls[field].errors;
    }
    getFieldError(field) {
        return this.formsService.fieldError(this.formGroup.controls[field]);
    }
    sanitizeStyle(value) {
        return this.sanitizer.bypassSecurityTrustStyle(value);
    }
    checkCondition(field) {
        if (!field.config.displayIf) {
            return true;
        }
        if (this.formGroup.controls[field.config.displayIf.model].value === field.config.displayIf.hasValue) {
            const validators = [];
            const fields = field.config.validators;
            for (const validator in fields) {
                if (Object.prototype.hasOwnProperty.call(fields, validator) && fields[validator]) {
                    validators.push(this.formsService.buildErrors(validator, fields[validator]));
                }
            }
            if (this.formGroup.controls[field.config.model]) {
                this.formGroup.controls[field.config.model].setValidators(Validators.compose(validators));
                this.formGroup.controls[field.config.model].updateValueAndValidity();
            }
            return true;
        }
        else if (this.formGroup.controls[field.config.model]) {
            this.formGroup.controls[field.config.model].clearValidators();
            this.formGroup.controls[field.config.model].updateValueAndValidity();
        }
        return false;
    }
    /**
     * Custom styles
     */
    get valueAsStyle() {
        let variables = '';
        if (this.customStyles) {
            // colors
            if (this.customStyles.color) {
                if (this.customStyles.color.font) {
                    variables = variables + `--gs-color-font: ${this.customStyles.color.font}!important;`;
                }
                if (this.customStyles.color.primary) {
                    variables = variables + `--gs-color-primary: ${this.customStyles.color.primary}!important;`;
                }
                if (this.customStyles.color.secondary) {
                    variables = variables + `--gs-color-secondary: ${this.customStyles.color.secondary}!important;`;
                }
                if (this.customStyles.color.neutral) {
                    variables = variables + `--gs-color-neutral: ${this.customStyles.color.neutral}!important;`;
                }
                if (this.customStyles.color.border) {
                    variables = variables + `--gs-color-border: ${this.customStyles.color.border}!important;`;
                }
                if (this.customStyles.color.white) {
                    variables = variables + `--gs-color-white: ${this.customStyles.color.white}!important;`;
                }
            }
            // ui
            if (this.customStyles.ui) {
                // font
                if (this.customStyles.ui.fontSize) {
                    variables = variables + `--gs-font-size: ${this.customStyles.ui.fontSize}!important;`;
                }
                // padding
                if (this.customStyles.ui.padding) {
                    variables = variables + `--gs-padding: ${this.customStyles.ui.padding}!important;`;
                }
                // opacity
                if (this.customStyles.ui.disabledOpacity) {
                    variables = variables + `--gs-disabled-opacity: ${this.customStyles.ui.disabledOpacity}!important;`;
                }
                // ui input
                if (this.customStyles.ui.input) {
                    if (this.customStyles.ui.input.padding) {
                        variables = variables + `--gs-input-padding: ${this.customStyles.ui.input.padding}!important;`;
                    }
                    if (this.customStyles.ui.input.color) {
                        variables = variables + `--gs-input-color: ${this.customStyles.ui.input.color}!important;`;
                    }
                    if (this.customStyles.ui.input.background) {
                        variables = variables + `--gs-input-background: ${this.customStyles.ui.input.background}!important;`;
                    }
                    if (this.customStyles.ui.input.borderSize) {
                        variables = variables + `--gs-input-border-size: ${this.customStyles.ui.input.borderSize}!important;`;
                    }
                    if (this.customStyles.ui.input.borderStyle) {
                        variables = variables + `--gs-input-border-style: ${this.customStyles.ui.input.borderStyle}!important;`;
                    }
                    if (this.customStyles.ui.input.borderColor) {
                        variables = variables + `--gs-input-border-color: ${this.customStyles.ui.input.borderColor}!important;`;
                    }
                    if (this.customStyles.ui.input.borderRadius) {
                        variables = variables + `--gs-input-border-radius: ${this.customStyles.ui.input.borderRadius}!important;`;
                    }
                    if (this.customStyles.ui.input.borderTop) {
                        variables = variables + `--gs-input-border-top: ${this.customStyles.ui.input.borderTop}!important;`;
                    }
                    if (this.customStyles.ui.input.borderRight) {
                        variables = variables + `--gs-input-border-right: ${this.customStyles.ui.input.borderRight}!important;`;
                    }
                    if (this.customStyles.ui.input.borderBottom) {
                        variables = variables + `--gs-input-border-bottom: ${this.customStyles.ui.input.borderRadius}!important;`;
                    }
                    if (this.customStyles.ui.input.borderLeft) {
                        variables = variables + `--gs-input-border-left: ${this.customStyles.ui.input.borderLeft}!important;`;
                    }
                }
                // ui primary button
                if (this.customStyles.ui.primaryButton) {
                    if (this.customStyles.ui.primaryButton.padding) {
                        variables = variables + `--gs-primary-button-padding: ${this.customStyles.ui.primaryButton.padding}!important;`;
                    }
                    if (this.customStyles.ui.primaryButton.color) {
                        variables = variables + `--gs-primary-button-color: ${this.customStyles.ui.primaryButton.color}!important;`;
                    }
                    if (this.customStyles.ui.primaryButton.background) {
                        variables = variables + `--gs-primary-button-background: ${this.customStyles.ui.primaryButton.background}!important;`;
                    }
                    if (this.customStyles.ui.primaryButton.borderColor) {
                        variables = variables + `--gs-primary-button-border-color: ${this.customStyles.ui.primaryButton.borderColor}!important;`;
                    }
                    if (this.customStyles.ui.primaryButton.borderRadius) {
                        variables = variables + `--gs-primary-button-border-radius: ${this.customStyles.ui.primaryButton.borderRadius}!important;`;
                    }
                }
                // ui secondary button
                if (this.customStyles.ui.secondaryButton) {
                    if (this.customStyles.ui.secondaryButton.padding) {
                        variables = variables + `--gs-secondary-button-padding: ${this.customStyles.ui.secondaryButton.padding}!important;`;
                    }
                    if (this.customStyles.ui.secondaryButton.color) {
                        variables = variables + `--gs-secondary-button-color: ${this.customStyles.ui.secondaryButton.color}!important;`;
                    }
                    if (this.customStyles.ui.secondaryButton.background) {
                        variables = variables + `--gs-secondary-button-background: ${this.customStyles.ui.secondaryButton.background}!important;`;
                    }
                    if (this.customStyles.ui.secondaryButton.borderColor) {
                        variables = variables + `--gs-secondary-button-border-color: ${this.customStyles.ui.secondaryButton.borderColor}!important;`;
                    }
                    if (this.customStyles.ui.secondaryButton.borderRadius) {
                        variables = variables + `--gs-secondary-button-border-radius: ${this.customStyles.ui.secondaryButton.borderRadius}!important;`;
                    }
                }
            }
            // layout
            if (this.formOptions && this.formOptions.layout) {
                if (this.formOptions.layout.columns) {
                    if (typeof this.formOptions.layout.columns === 'number') {
                        // if typeof number
                        variables = variables + `--gs-layout-columns-quantity: repeat(${this.formOptions.layout.columns}, 1fr)!important;`;
                    }
                    else {
                        // if typeof string
                        variables = variables + `--gs-layout-columns-quantity: ${this.formOptions.layout.columns}!important;`;
                    }
                }
                if (this.formOptions.layout.innerPadding) {
                    variables = variables + `--gs-layout-padding: ${this.formOptions.layout.innerPadding}!important;`;
                }
            }
            return this.sanitizer.bypassSecurityTrustStyle(variables);
        }
    }
    formActions(action, id) {
        switch (action) {
            case GFieldValueButtonType.SUBMIT:
                this.submit();
                break;
            case GFieldValueButtonType.RESET:
                if (this.formGroup) {
                    this.formGroup.reset();
                    if (this.fileInputComponent !== undefined) {
                        this.fileInputComponent.forEach(el => el.resetField());
                    }
                    if (this.datePickerComponent !== undefined) {
                        this.datePickerComponent.forEach(el => el.resetField());
                    }
                    if (this.dropdownComponent !== undefined) {
                        this.dropdownComponent.forEach(el => el.resetField());
                    }
                }
                break;
            case GFieldValueButtonType.CUSTOM:
                this.customButtonClick.emit(id);
                break;
        }
    }
    onFieldChanged(changes) {
        this.fieldChanged.emit(changes);
    }
};
GsFormComponent.ctorParameters = () => [
    { type: GsFormsService },
    { type: DomSanitizer },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: ['customStyles',] }] },
    { type: undefined, decorators: [{ type: Inject, args: ['googleMapApiKey',] }] }
];
tslib_1.__decorate([
    Input()
], GsFormComponent.prototype, "formOptions", void 0);
tslib_1.__decorate([
    Input()
], GsFormComponent.prototype, "formFields", void 0);
tslib_1.__decorate([
    Output()
], GsFormComponent.prototype, "form", void 0);
tslib_1.__decorate([
    Output()
], GsFormComponent.prototype, "formChanges", void 0);
tslib_1.__decorate([
    Output()
], GsFormComponent.prototype, "customButtonClick", void 0);
tslib_1.__decorate([
    Output()
], GsFormComponent.prototype, "fieldChanged", void 0);
tslib_1.__decorate([
    ViewChildren(GsFileInputComponent)
], GsFormComponent.prototype, "fileInputComponent", void 0);
tslib_1.__decorate([
    ViewChildren(GsDatePickerComponent)
], GsFormComponent.prototype, "datePickerComponent", void 0);
tslib_1.__decorate([
    ViewChildren(GsDropdownComponent)
], GsFormComponent.prototype, "dropdownComponent", void 0);
tslib_1.__decorate([
    HostBinding('attr.style')
], GsFormComponent.prototype, "valueAsStyle", null);
GsFormComponent = tslib_1.__decorate([
    Component({
        selector: 'gs-form',
        template: "<ng-container *ngIf=\"formGroup\">\n  <form\n    class=\"gs-form\"\n    [autocomplete]=\"formOptions.autocomplete || 'off'\"\n    [formGroup]=\"formGroup\"\n    (keydown.enter)=\"canSubmit($event)\"\n    (ngSubmit)=\"submit()\">\n\n    <div class=\"gs-form-body\">\n      <ng-container *ngFor=\"let field of formFields\">\n        <!-- form fields -->\n        <div class=\"gs-form-field\"\n          *ngIf=\"!field.notWidget && checkCondition(field)\"\n          [style.grid-column]=\"field.config.gridColumn ? sanitizeStyle(field.config.gridColumn) : null\"\n          [style.grid-row]=\"field.config.gridRow ? sanitizeStyle(field.config.gridRow) : null\">\n\n          <ng-container [ngSwitch]=\"field.selector\">\n            <gs-text-input *ngSwitchCase=\"fieldSelector.TEXT\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-text-input>\n            <gs-textarea *ngSwitchCase=\"fieldSelector.TEXTAREA\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-textarea>\n            <gs-password-input *ngSwitchCase=\"fieldSelector.PASSWORD\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-password-input>\n            <gs-number-input *ngSwitchCase=\"fieldSelector.NUMBER\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-number-input>\n            <gs-toggle *ngSwitchCase=\"fieldSelector.TOGGLE\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-toggle>\n            <gs-currency-input *ngSwitchCase=\"fieldSelector.CURRENCY\" [field]=\"field\" [formGroup]=\"formGroup\" [countryGlobal]=\"formOptions.country || null\"></gs-currency-input>\n            <gs-phone-input *ngSwitchCase=\"fieldSelector.PHONE\" [field]=\"field\" [formGroup]=\"formGroup\" [countryGlobal]=\"formOptions.country || null\"></gs-phone-input>\n            <gs-datepicker *ngSwitchCase=\"fieldSelector.DATE\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-datepicker>\n            <gs-file-input *ngSwitchCase=\"fieldSelector.FILE\" [field]=\"field\" [formGroup]=\"formGroup\" (fieldChanged)=\"onFieldChanged( $event )\"></gs-file-input>\n            <gs-separated-by-comma *ngSwitchCase=\"fieldSelector.COMMA\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-separated-by-comma>\n            <gs-two-data-input *ngSwitchCase=\"fieldSelector.TWO_DATA\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-two-data-input>\n            <gs-color-picker *ngSwitchCase=\"fieldSelector.COLOR\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-color-picker>\n            <gs-map-field *ngSwitchCase=\"fieldSelector.MAP\" [field]=\"field\" [formGroup]=\"formGroup\" [googleMapApiKey]=\"googleMapApiKey\"></gs-map-field>\n            <gs-checkbox *ngSwitchCase=\"fieldSelector.CHECKBOX\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-checkbox>\n            <gs-timepicker *ngSwitchCase=\"fieldSelector.TIME\" [field]=\"field\" [formGroup]=\"formGroup\"></gs-timepicker>\n            <!-- fields with externalOptions @input() -->\n            <gs-radio-button *ngSwitchCase=\"fieldSelector.RADIO\" [field]=\"field\" [formGroup]=\"formGroup\"\n              [fieldOption]=\"field.config['externalOptions'] ? formOptions.fieldValues[field.config.model] : null\">\n            </gs-radio-button>\n            <gs-dropdown *ngSwitchCase=\"fieldSelector.DROPDOWN\" [field]=\"field\" [formGroup]=\"formGroup\"\n              [fieldOption]=\"field.config['externalOptions'] ? formOptions.fieldValues[field.config.model] : null\">\n            </gs-dropdown>\n            <gs-multiselect *ngSwitchCase=\"fieldSelector.MULTISELECT\" [field]=\"field\" [formGroup]=\"formGroup\"\n              [fieldOption]=\"field.config['externalOptions'] ? formOptions.fieldValues[field.config.model] : null\">\n            </gs-multiselect>\n          </ng-container>\n        </div>\n\n        <!-- Additional fields -->\n        <div class=\"gs-form-field\"\n          *ngIf=\"field.notWidget && checkCondition(field)\"\n          [style.grid-column]=\"field.config.gridColumn ? sanitizeStyle(field.config.gridColumn) : null\"\n          [style.grid-row]=\"field.config.gridRow ? sanitizeStyle(field.config.gridRow) : null\">\n          <ng-container [ngSwitch]=\"field.selector\">\n            <gs-divider *ngSwitchCase=\"fieldSelector.DIVIDER\" [divider]=\"field\"></gs-divider>\n            <gs-show-data *ngSwitchCase=\"fieldSelector.SHOW_DATA\" [data]=\"field\"></gs-show-data>\n            <gs-button *ngSwitchCase=\"fieldSelector.BUTTON\" [button]=\"field\" (hdlAction)=\"formActions($event.action, $event.id)\"></gs-button>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <div class=\"gs-form-footer\">\n      <span *ngIf=\"formOptions.context.cancelButton && formOptions.context.cancelButton.show\">\n        <button type=\"reset\" class=\"button button-secondary\">\n          {{ formOptions.context.cancelButton.text | translate }}\n        </button>\n      </span>\n\n      <span *ngIf=\"formOptions.context.saveButton && formOptions.context.saveButton.show\">\n        <button type=\"submit\" class=\"button button-primary\"\n          [class.disabled]=\"formOptions.onErrorDisableSubmit && formGroup.invalid\">\n          {{ formOptions.context.saveButton.text | translate  }}\n        </button>\n      </span>\n    </div>\n  </form>\n</ng-container>\n",
        styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-form .gs-form-body{display:-ms-grid;display:grid;grid-template-columns:var(--gs-layout-columns-quantity,repeat(auto-fit,minmax(200px,1fr)));padding:var(--gs-layout-padding,1rem 1rem 0);margin-bottom:1rem;gap:1rem}@media screen and (max-width:576px){.gs-form .gs-form-body{-ms-grid-columns:1fr;grid-template-columns:1fr;padding:.8rem;gap:.8rem}.gs-form .gs-form-body .gs-form-field{grid-column:auto!important}.gs-form .gs-form-footer .button{width:100%;margin:unset}}.gs-form .gs-form-body .gs-form-field{position:relative}.gs-form .gs-form-body .gs-form-field .gs-form-field_label{display:block;font-size:var(--gs-font-size,.9rem);margin-bottom:6px}.gs-form .gs-form-body .gs-no-widget{-ms-grid-row-align:center;align-self:center}.gs-form .gs-form-footer{display:-ms-grid;display:grid;-ms-grid-columns:auto;grid-template-columns:auto;gap:1rem}.gs-form .gs-form-footer .button{width:100%}.gs-form .gs-form-footer .button:first-child{margin-right:auto}.gs-form .gs-form-footer .button:last-child{margin-left:auto}@media screen and (max-width:576px){.gs-form .gs-form-footer{-ms-grid-columns:1fr;grid-template-columns:1fr;padding:.8rem;gap:.8rem}}"]
    }),
    tslib_1.__param(3, Inject('customStyles')),
    tslib_1.__param(4, Inject('googleMapApiKey'))
], GsFormComponent);
export { GsFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWEsVUFBVSxFQUFvQixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8vRixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBd0UxQixZQUNVLFlBQTRCLEVBQzVCLFNBQXVCLEVBQ3ZCLEtBQXdCLEVBQ1IsWUFBWSxFQUNULE1BQU07UUFKekIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQzVCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUExRTFCLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBNENuQzs7V0FFRztRQUNlLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYSxD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LE1BQU07Z0JBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07U0FDVDtJQUNILENBQUM7SUFFTSxjQUFjLENBQUMsT0FBa0M7UUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7O1lBMVR5QixjQUFjO1lBQ2pCLFlBQVk7WUFDaEIsaUJBQWlCOzRDQUMvQixNQUFNLFNBQUMsY0FBYzs0Q0FDckIsTUFBTSxTQUFDLGlCQUFpQjs7QUFyRGxCO0lBQVIsS0FBSyxFQUFFO29EQUFrQztBQW9CakM7SUFBUixLQUFLLEVBQUU7bURBQWdDO0FBSTlCO0lBQVQsTUFBTSxFQUFFOzZDQUE4QztBQUk3QztJQUFULE1BQU0sRUFBRTtvREFBcUQ7QUFJcEQ7SUFBVCxNQUFNLEVBQUU7MERBQXdEO0FBSXZEO0lBQVQsTUFBTSxFQUFFO3FEQUFzRTtBQUUzQztJQUFuQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7MkRBQXFEO0FBQ25EO0lBQXBDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQzs0REFBdUQ7QUFDeEQ7SUFBbEMsWUFBWSxDQUFDLG1CQUFtQixDQUFDOzBEQUFtRDtBQThIckY7SUFEQyxXQUFXLENBQUMsWUFBWSxDQUFDO21EQXFLekI7QUFsV1UsZUFBZTtJQUwzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixrcEtBQXVDOztLQUV4QyxDQUFDO0lBNkVHLG1CQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUN0QixtQkFBQSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtHQTdFakIsZUFBZSxDQW1ZM0I7U0FuWVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEluamVjdCxcbiAgSG9zdEJpbmRpbmcsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdDaGVja2VkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBHc0Zvcm1zU2VydmljZSB9IGZyb20gJy4vZ3MtZm9ybXMuc2VydmljZSc7XG5pbXBvcnQgeyBHRmllbGRTZWxlY3RvciwgR0ZpZWxkVmFsaWRhdG9yVHlwZSwgR0ZpZWxkVmFsdWVCdXR0b25UeXBlIH0gZnJvbSAnLi9ncy1mb3Jtcy5lbnVtcyc7XG5pbXBvcnQgeyBHRm9ybUZpZWxkcywgR1N0eWxlcywgR0Zvcm1PcHRpb25zLCBHRmllbGQgfSBmcm9tICcuL2dzLWZvcm1zLm1vZGVscyc7XG5pbXBvcnQgeyBHc0ZpbGVJbnB1dENvbXBvbmVudCwgR3NEYXRlUGlja2VyQ29tcG9uZW50LCBHc0Ryb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9ncy1maWVsZHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncy1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dzLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncy1mb3JtLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3NGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcbiAgLyoqXG4gICAqIElucHV0OiBmb3JtT3B0aW9uczogR0Zvcm1PcHRpb25zXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBTZXQgY3VzdG9tIGNvbmZpZ3VyYXRpb24gdG8gdGhlIGZvcm1cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogcHVibGljIGZvcm1PcHRpb25zOiBHRm9ybU9wdGlvbnMgPSB7XG4gICAqICAgY291bnRyeTogR0ZpZWxkQ291bnRyeUNvZGUuQ08sXG4gICAqICAgZmllbGRWYWx1ZXM6IHtcbiAgICogICAgIGNoZWNrYm94OiBbXG4gICAqICAgICAgIHtcbiAgICogICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICogICAgICAgICB0ZXh0OiAndHJ1ZSdcbiAgICogICAgICAgfVxuICAgKiAgICAgXVxuICAgKiAgIH0sXG4gICAqICAgbGF5b3V0OiB7XG4gICAqICAgICBjb2x1bW5zOiAncmVwZWF0KDQsIDFmciknLFxuICAgKiAgIH1cbiAgICogfTtcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBmb3JtT3B0aW9uczogR0Zvcm1PcHRpb25zO1xuICAvKipcbiAgICogSW5wdXQ6IGZvcm1GaWVsZHM6IEdGb3JtRmllbGRzXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBGb3JtIGZpZWxkcyBhcnJheVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBwdWJsaWMgZm9ybUZpZWxkczogR0Zvcm1GaWVsZHMgPSBbXG4gICAqICAgbmV3IEdUZXh0RmllbGQoe1xuICAgKiAgICAgbW9kZWw6ICd0ZXh0JyxcbiAgICogICAgIGxhYmVsOiAnVEVYVCcsXG4gICAqICAgICBwbGFjZWhvbGRlcjogJ1RFWFRfSU5QVVQnLFxuICAgKiAgICAgdmFsdWU6ICdIZWxsbyB0ZXh0IGlucHV0JyxcbiAgICogICAgIHZhbGlkYXRvcnM6IHtcbiAgICogICAgICAgW0dGaWVsZFZhbGlkYXRvclR5cGUuUkVRVUlSRURdOiB0cnVlXG4gICAqICAgICB9LFxuICAgKiAgIH0pLFxuICAgKiBdO1xuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGZvcm1GaWVsZHM6IEdGb3JtRmllbGRzO1xuICAvKipcbiAgICogR2V0IGZvcm0gZ3JvdXAuIGZvcm1Hcm91cDogRm9ybUdyb3VwIGBmb3JtYFxuICAgKi9cbiAgQE91dHB1dCgpIHByaXZhdGUgZm9ybSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUdyb3VwPigpO1xuICAvKipcbiAgICogR2V0IGZvcm0gZ3JvdXAgY2hhbmdlcy4gZm9ybUdyb3VwOiBGb3JtR3JvdXAgYGZvcm1gXG4gICAqL1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBmb3JtQ2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUdyb3VwPigpO1xuICAvKipcbiAgICogR2V0IGJ1dHRvbiBldmVudCBzZWxlY3RlZFxuICAgKi9cbiAgQE91dHB1dCgpIHByaXZhdGUgY3VzdG9tQnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgLyoqXG4gICAqIEdldCBmb3JtIGdyb3VwIGNoYW5nZXMuIGZvcm1Hcm91cDogRm9ybUdyb3VwIGBmb3JtYFxuICAgKi9cbiAgQE91dHB1dCgpIHByaXZhdGUgZmllbGRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9PigpO1xuXG4gIEBWaWV3Q2hpbGRyZW4oR3NGaWxlSW5wdXRDb21wb25lbnQpIGZpbGVJbnB1dENvbXBvbmVudDogUXVlcnlMaXN0PEdzRmlsZUlucHV0Q29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZHJlbihHc0RhdGVQaWNrZXJDb21wb25lbnQpIGRhdGVQaWNrZXJDb21wb25lbnQ6IFF1ZXJ5TGlzdDxHc0RhdGVQaWNrZXJDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkcmVuKEdzRHJvcGRvd25Db21wb25lbnQpIGRyb3Bkb3duQ29tcG9uZW50OiBRdWVyeUxpc3Q8R3NEcm9wZG93bkNvbXBvbmVudD47XG5cbiAgcHVibGljIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBwdWJsaWMgZmllbGRTZWxlY3RvciA9IEdGaWVsZFNlbGVjdG9yO1xuICBwdWJsaWMgZmllbGRWYWxpZGF0b3JUeXBlID0gR0ZpZWxkVmFsaWRhdG9yVHlwZTtcbiAgcHJpdmF0ZSBjdXN0b21TdHlsZXM6IEdTdHlsZXM7XG4gIHB1YmxpYyBnb29nbGVNYXBBcGlLZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1zU2VydmljZTogR3NGb3Jtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KCdjdXN0b21TdHlsZXMnKSBjdXN0b21TdHlsZXMsXG4gICAgQEluamVjdCgnZ29vZ2xlTWFwQXBpS2V5JykgYXBpa2V5XG4gICkge1xuICAgIHRoaXMuY3VzdG9tU3R5bGVzID0gY3VzdG9tU3R5bGVzO1xuICAgIHRoaXMuZ29vZ2xlTWFwQXBpS2V5ID0gYXBpa2V5O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZm9ybUZpZWxkcyAmJiBjaGFuZ2VzLmZvcm1GaWVsZHMuY3VycmVudFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXApIHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZm9ybXNTZXJ2aWNlLmJ1aWxkRm9ybShjaGFuZ2VzLmZvcm1GaWVsZHMuY3VycmVudFZhbHVlKTtcblxuICAgICAgdGhpcy5mb3JtRmllbGRzID0gY2hhbmdlcy5mb3JtRmllbGRzLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwID0gZm9ybTtcblxuICAgICAgdGhpcy5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm1Hcm91cCkge1xuICAgICAgdGhpcy5vbkZvcm1DaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkZvcm1DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUNoYW5nZXMuZW1pdCh0aGlzLmZvcm1Hcm91cCk7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IGZpZWxkV2l0aERpc3BsYXkgPSB0aGlzLmZvcm1GaWVsZHMuZmluZCgoZmllbGQ6IEdGaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmNvbmZpZy5kaXNwbGF5SWYgJiYgIWZpZWxkLm5vdFdpZGdldCkge1xuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZmllbGRXaXRoRGlzcGxheSkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGRXaXRoRGlzcGxheS5jb25maWcuZGlzcGxheUlmLm1vZGVsXS52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGRXaXRoRGlzcGxheS5jb25maWcubW9kZWxdLnBhdGNoVmFsdWUoJycpO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkV2l0aERpc3BsYXkuY29uZmlnLm1vZGVsXS5jbGVhclZhbGlkYXRvcnMoKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZFdpdGhEaXNwbGF5LmNvbmZpZy5tb2RlbF0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5lbWl0KHRoaXMuZm9ybUdyb3VwKTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5TdWJtaXQoJGV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybU9wdGlvbnMub25FcnJvckRpc2FibGVTdWJtaXQgJiYgdGhpcy5mb3JtR3JvdXAuaW52YWxpZCkge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3VibWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzUmVxdWlyZWQoZmllbGQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmaWVsZC5jb25maWcudmFsaWRhdG9ycyA/IGZpZWxkLmNvbmZpZy52YWxpZGF0b3JzW3RoaXMuZmllbGRWYWxpZGF0b3JUeXBlLlJFUVVJUkVEXSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlRmllbGQoZmllbGQ6IGFueSk6IFZhbGlkYXRpb25FcnJvcnMge1xuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZF0uZGlydHkgJiYgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGRdLmVycm9ycztcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWVsZEVycm9yKGZpZWxkOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm1zU2VydmljZS5maWVsZEVycm9yKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkXSk7XG4gIH1cblxuICBwdWJsaWMgc2FuaXRpemVTdHlsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tDb25kaXRpb24oZmllbGQ6IEdGaWVsZCkge1xuICAgIGlmICghZmllbGQuY29uZmlnLmRpc3BsYXlJZikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLmNvbmZpZy5kaXNwbGF5SWYubW9kZWxdLnZhbHVlID09PSBmaWVsZC5jb25maWcuZGlzcGxheUlmLmhhc1ZhbHVlKSB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JzID0gW107XG4gICAgICBjb25zdCBmaWVsZHMgPSBmaWVsZC5jb25maWcudmFsaWRhdG9ycztcblxuICAgICAgZm9yIChjb25zdCB2YWxpZGF0b3IgaW4gZmllbGRzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZmllbGRzLCB2YWxpZGF0b3IpICYmIGZpZWxkc1t2YWxpZGF0b3JdKSB7XG4gICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKHRoaXMuZm9ybXNTZXJ2aWNlLmJ1aWxkRXJyb3JzKHZhbGlkYXRvciwgZmllbGRzW3ZhbGlkYXRvcl0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQuY29uZmlnLm1vZGVsXSkge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5jb25maWcubW9kZWxdLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMpKTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQuY29uZmlnLm1vZGVsXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQuY29uZmlnLm1vZGVsXSkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQuY29uZmlnLm1vZGVsXS5jbGVhclZhbGlkYXRvcnMoKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLmNvbmZpZy5tb2RlbF0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXN0b20gc3R5bGVzXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuc3R5bGUnKVxuICBwdWJsaWMgZ2V0IHZhbHVlQXNTdHlsZSgpOiBhbnkge1xuICAgIGxldCB2YXJpYWJsZXMgPSAnJztcblxuICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcykge1xuICAgICAgLy8gY29sb3JzXG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMuY29sb3IpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLmZvbnQpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1jb2xvci1mb250OiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLmZvbnR9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLnByaW1hcnkpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1jb2xvci1wcmltYXJ5OiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLnByaW1hcnl9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLnNlY29uZGFyeSkge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWNvbG9yLXNlY29uZGFyeTogJHt0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5zZWNvbmRhcnl9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLm5ldXRyYWwpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1jb2xvci1uZXV0cmFsOiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLm5ldXRyYWx9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLmJvcmRlcikge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWNvbG9yLWJvcmRlcjogJHt0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5ib3JkZXJ9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLndoaXRlKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtY29sb3Itd2hpdGU6ICR7dGhpcy5jdXN0b21TdHlsZXMuY29sb3Iud2hpdGV9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHVpXG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkpIHtcbiAgICAgICAgLy8gZm9udFxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuZm9udFNpemUpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1mb250LXNpemU6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkuZm9udFNpemV9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFkZGluZ1xuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucGFkZGluZykge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLXBhZGRpbmc6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucGFkZGluZ30haW1wb3J0YW50O2A7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvcGFjaXR5XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5kaXNhYmxlZE9wYWNpdHkpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1kaXNhYmxlZC1vcGFjaXR5OiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLmRpc2FibGVkT3BhY2l0eX0haW1wb3J0YW50O2A7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1aSBpbnB1dFxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQpIHtcbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQucGFkZGluZykge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtaW5wdXQtcGFkZGluZzogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5wYWRkaW5nfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQuY29sb3IpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWlucHV0LWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmNvbG9yfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQuYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtaW5wdXQtYmFja2dyb3VuZDogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5iYWNrZ3JvdW5kfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQuYm9yZGVyU2l6ZSkge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtaW5wdXQtYm9yZGVyLXNpemU6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQuYm9yZGVyU2l6ZX0haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlclN0eWxlKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1pbnB1dC1ib3JkZXItc3R5bGU6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQuYm9yZGVyU3R5bGV9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5ib3JkZXJDb2xvcikge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtaW5wdXQtYm9yZGVyLWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlckNvbG9yfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQuYm9yZGVyUmFkaXVzKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1pbnB1dC1ib3JkZXItcmFkaXVzOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlclJhZGl1c30haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlclRvcCkge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtaW5wdXQtYm9yZGVyLXRvcDogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5ib3JkZXJUb3B9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5ib3JkZXJSaWdodCkge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtaW5wdXQtYm9yZGVyLXJpZ2h0OiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlclJpZ2h0fSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQuYm9yZGVyQm90dG9tKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1pbnB1dC1ib3JkZXItYm90dG9tOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlclJhZGl1c30haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlckxlZnQpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWlucHV0LWJvcmRlci1sZWZ0OiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlckxlZnR9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVpIHByaW1hcnkgYnV0dG9uXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24ucGFkZGluZykge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtcHJpbWFyeS1idXR0b24tcGFkZGluZzogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLnBhZGRpbmd9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmNvbG9yKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1wcmltYXJ5LWJ1dHRvbi1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmNvbG9yfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5iYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYmFja2dyb3VuZH0haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyQ29sb3IpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLXByaW1hcnktYnV0dG9uLWJvcmRlci1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlckNvbG9yfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJSYWRpdXMpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLXByaW1hcnktYnV0dG9uLWJvcmRlci1yYWRpdXM6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJSYWRpdXN9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVpIHNlY29uZGFyeSBidXR0b25cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnNlY29uZGFyeUJ1dHRvbikge1xuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5zZWNvbmRhcnlCdXR0b24ucGFkZGluZykge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3Mtc2Vjb25kYXJ5LWJ1dHRvbi1wYWRkaW5nOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnNlY29uZGFyeUJ1dHRvbi5wYWRkaW5nfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuc2Vjb25kYXJ5QnV0dG9uLmNvbG9yKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1zZWNvbmRhcnktYnV0dG9uLWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnNlY29uZGFyeUJ1dHRvbi5jb2xvcn0haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnNlY29uZGFyeUJ1dHRvbi5iYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1zZWNvbmRhcnktYnV0dG9uLWJhY2tncm91bmQ6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkuc2Vjb25kYXJ5QnV0dG9uLmJhY2tncm91bmR9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5zZWNvbmRhcnlCdXR0b24uYm9yZGVyQ29sb3IpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLXNlY29uZGFyeS1idXR0b24tYm9yZGVyLWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnNlY29uZGFyeUJ1dHRvbi5ib3JkZXJDb2xvcn0haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnNlY29uZGFyeUJ1dHRvbi5ib3JkZXJSYWRpdXMpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLXNlY29uZGFyeS1idXR0b24tYm9yZGVyLXJhZGl1czogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5zZWNvbmRhcnlCdXR0b24uYm9yZGVyUmFkaXVzfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gbGF5b3V0XG4gICAgICBpZiAodGhpcy5mb3JtT3B0aW9ucyAmJiB0aGlzLmZvcm1PcHRpb25zLmxheW91dCkge1xuXG4gICAgICAgIGlmICh0aGlzLmZvcm1PcHRpb25zLmxheW91dC5jb2x1bW5zKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZvcm1PcHRpb25zLmxheW91dC5jb2x1bW5zID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gaWYgdHlwZW9mIG51bWJlclxuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtbGF5b3V0LWNvbHVtbnMtcXVhbnRpdHk6IHJlcGVhdCgke3RoaXMuZm9ybU9wdGlvbnMubGF5b3V0LmNvbHVtbnN9LCAxZnIpIWltcG9ydGFudDtgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB0eXBlb2Ygc3RyaW5nXG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1sYXlvdXQtY29sdW1ucy1xdWFudGl0eTogJHt0aGlzLmZvcm1PcHRpb25zLmxheW91dC5jb2x1bW5zfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtT3B0aW9ucy5sYXlvdXQuaW5uZXJQYWRkaW5nKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtbGF5b3V0LXBhZGRpbmc6ICR7dGhpcy5mb3JtT3B0aW9ucy5sYXlvdXQuaW5uZXJQYWRkaW5nfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKFxuICAgICAgICB2YXJpYWJsZXNcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvcm1BY3Rpb25zKGFjdGlvbjogc3RyaW5nLCBpZD86IHN0cmluZykge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICBjYXNlIEdGaWVsZFZhbHVlQnV0dG9uVHlwZS5TVUJNSVQ6XG4gICAgICAgIHRoaXMuc3VibWl0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBHRmllbGRWYWx1ZUJ1dHRvblR5cGUuUkVTRVQ6XG4gICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cCkge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5maWxlSW5wdXRDb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5maWxlSW5wdXRDb21wb25lbnQuZm9yRWFjaChlbCA9PiBlbC5yZXNldEZpZWxkKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZXJDb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VyQ29tcG9uZW50LmZvckVhY2goZWwgPT4gZWwucmVzZXRGaWVsZCgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5kcm9wZG93bkNvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duQ29tcG9uZW50LmZvckVhY2goZWwgPT4gZWwucmVzZXRGaWVsZCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEdGaWVsZFZhbHVlQnV0dG9uVHlwZS5DVVNUT006XG4gICAgICAgIHRoaXMuY3VzdG9tQnV0dG9uQ2xpY2suZW1pdChpZCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkZpZWxkQ2hhbmdlZChjaGFuZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy5maWVsZENoYW5nZWQuZW1pdChjaGFuZ2VzKTtcbiAgfVxufVxuIl19