import * as tslib_1 from "tslib";
import { Component, Input, Inject, HostBinding, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { GsFormsService } from './gs-forms.service';
import { GFieldSelector, GFieldValidatorType, GFieldValueButtonType } from './gs-forms.enums';
import { GsFileInputComponent, GsDatePickerComponent, GsDropdownComponent } from './gs-fields';
var GsFormComponent = /** @class */ (function () {
    function GsFormComponent(formsService, sanitizer, cdRef, customStyles, apikey) {
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
    GsFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.formFields && changes.formFields.currentValue) {
            if (this.formGroup) {
                this.formGroup.reset();
            }
            var form = this.formsService.buildForm(changes.formFields.currentValue);
            this.formFields = changes.formFields.currentValue;
            this.formGroup = form;
            this.formGroup.updateValueAndValidity();
        }
        if (this.formGroup) {
            this.onFormChanges();
        }
    };
    GsFormComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    GsFormComponent.prototype.onFormChanges = function () {
        var _this = this;
        this.formGroup.valueChanges.pipe(takeUntil(this.destroyed$))
            .subscribe(function () {
            _this.formChanges.emit(_this.formGroup);
        });
        var fieldWithDisplay = this.formFields.find(function (field) {
            if (field.config.displayIf && !field.notWidget) {
                return field;
            }
        });
        if (fieldWithDisplay) {
            this.formGroup.controls[fieldWithDisplay.config.displayIf.model].valueChanges
                .subscribe(function () {
                _this.formGroup.controls[fieldWithDisplay.config.model].patchValue('');
                _this.formGroup.controls[fieldWithDisplay.config.model].clearValidators();
                _this.formGroup.controls[fieldWithDisplay.config.model].updateValueAndValidity();
            });
        }
    };
    GsFormComponent.prototype.submit = function () {
        this.form.emit(this.formGroup);
    };
    GsFormComponent.prototype.canSubmit = function ($event) {
        if (this.formOptions.onErrorDisableSubmit && this.formGroup.invalid) {
            $event.preventDefault();
            return;
        }
        else {
            this.submit();
        }
    };
    GsFormComponent.prototype.isRequired = function (field) {
        return field.config.validators ? field.config.validators[this.fieldValidatorType.REQUIRED] : false;
    };
    GsFormComponent.prototype.validateField = function (field) {
        return this.formGroup.controls[field].dirty && this.formGroup.controls[field].errors;
    };
    GsFormComponent.prototype.getFieldError = function (field) {
        return this.formsService.fieldError(this.formGroup.controls[field]);
    };
    GsFormComponent.prototype.sanitizeStyle = function (value) {
        return this.sanitizer.bypassSecurityTrustStyle(value);
    };
    GsFormComponent.prototype.checkCondition = function (field) {
        if (!field.config.displayIf) {
            return true;
        }
        if (this.formGroup.controls[field.config.displayIf.model].value === field.config.displayIf.hasValue) {
            var validators = [];
            var fields = field.config.validators;
            for (var validator in fields) {
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
    };
    Object.defineProperty(GsFormComponent.prototype, "valueAsStyle", {
        /**
         * Custom styles
         */
        get: function () {
            var variables = '';
            if (this.customStyles) {
                // colors
                if (this.customStyles.color) {
                    if (this.customStyles.color.font) {
                        variables = variables + ("--gs-color-font: " + this.customStyles.color.font + "!important;");
                    }
                    if (this.customStyles.color.primary) {
                        variables = variables + ("--gs-color-primary: " + this.customStyles.color.primary + "!important;");
                    }
                    if (this.customStyles.color.secondary) {
                        variables = variables + ("--gs-color-secondary: " + this.customStyles.color.secondary + "!important;");
                    }
                    if (this.customStyles.color.neutral) {
                        variables = variables + ("--gs-color-neutral: " + this.customStyles.color.neutral + "!important;");
                    }
                    if (this.customStyles.color.border) {
                        variables = variables + ("--gs-color-border: " + this.customStyles.color.border + "!important;");
                    }
                    if (this.customStyles.color.white) {
                        variables = variables + ("--gs-color-white: " + this.customStyles.color.white + "!important;");
                    }
                }
                // ui
                if (this.customStyles.ui) {
                    // font
                    if (this.customStyles.ui.fontSize) {
                        variables = variables + ("--gs-font-size: " + this.customStyles.ui.fontSize + "!important;");
                    }
                    // padding
                    if (this.customStyles.ui.padding) {
                        variables = variables + ("--gs-padding: " + this.customStyles.ui.padding + "!important;");
                    }
                    // opacity
                    if (this.customStyles.ui.disabledOpacity) {
                        variables = variables + ("--gs-disabled-opacity: " + this.customStyles.ui.disabledOpacity + "!important;");
                    }
                    // ui input
                    if (this.customStyles.ui.input) {
                        if (this.customStyles.ui.input.padding) {
                            variables = variables + ("--gs-input-padding: " + this.customStyles.ui.input.padding + "!important;");
                        }
                        if (this.customStyles.ui.input.color) {
                            variables = variables + ("--gs-input-color: " + this.customStyles.ui.input.color + "!important;");
                        }
                        if (this.customStyles.ui.input.background) {
                            variables = variables + ("--gs-input-background: " + this.customStyles.ui.input.background + "!important;");
                        }
                        if (this.customStyles.ui.input.borderSize) {
                            variables = variables + ("--gs-input-border-size: " + this.customStyles.ui.input.borderSize + "!important;");
                        }
                        if (this.customStyles.ui.input.borderStyle) {
                            variables = variables + ("--gs-input-border-style: " + this.customStyles.ui.input.borderStyle + "!important;");
                        }
                        if (this.customStyles.ui.input.borderColor) {
                            variables = variables + ("--gs-input-border-color: " + this.customStyles.ui.input.borderColor + "!important;");
                        }
                        if (this.customStyles.ui.input.borderRadius) {
                            variables = variables + ("--gs-input-border-radius: " + this.customStyles.ui.input.borderRadius + "!important;");
                        }
                        if (this.customStyles.ui.input.borderTop) {
                            variables = variables + ("--gs-input-border-top: " + this.customStyles.ui.input.borderTop + "!important;");
                        }
                        if (this.customStyles.ui.input.borderRight) {
                            variables = variables + ("--gs-input-border-right: " + this.customStyles.ui.input.borderRight + "!important;");
                        }
                        if (this.customStyles.ui.input.borderBottom) {
                            variables = variables + ("--gs-input-border-bottom: " + this.customStyles.ui.input.borderRadius + "!important;");
                        }
                        if (this.customStyles.ui.input.borderLeft) {
                            variables = variables + ("--gs-input-border-left: " + this.customStyles.ui.input.borderLeft + "!important;");
                        }
                    }
                    // ui primary button
                    if (this.customStyles.ui.primaryButton) {
                        if (this.customStyles.ui.primaryButton.padding) {
                            variables = variables + ("--gs-primary-button-padding: " + this.customStyles.ui.primaryButton.padding + "!important;");
                        }
                        if (this.customStyles.ui.primaryButton.color) {
                            variables = variables + ("--gs-primary-button-color: " + this.customStyles.ui.primaryButton.color + "!important;");
                        }
                        if (this.customStyles.ui.primaryButton.background) {
                            variables = variables + ("--gs-primary-button-background: " + this.customStyles.ui.primaryButton.background + "!important;");
                        }
                        if (this.customStyles.ui.primaryButton.borderColor) {
                            variables = variables + ("--gs-primary-button-border-color: " + this.customStyles.ui.primaryButton.borderColor + "!important;");
                        }
                        if (this.customStyles.ui.primaryButton.borderRadius) {
                            variables = variables + ("--gs-primary-button-border-radius: " + this.customStyles.ui.primaryButton.borderRadius + "!important;");
                        }
                    }
                    // ui secondary button
                    if (this.customStyles.ui.secondaryButton) {
                        if (this.customStyles.ui.secondaryButton.padding) {
                            variables = variables + ("--gs-secondary-button-padding: " + this.customStyles.ui.secondaryButton.padding + "!important;");
                        }
                        if (this.customStyles.ui.secondaryButton.color) {
                            variables = variables + ("--gs-secondary-button-color: " + this.customStyles.ui.secondaryButton.color + "!important;");
                        }
                        if (this.customStyles.ui.secondaryButton.background) {
                            variables = variables + ("--gs-secondary-button-background: " + this.customStyles.ui.secondaryButton.background + "!important;");
                        }
                        if (this.customStyles.ui.secondaryButton.borderColor) {
                            variables = variables + ("--gs-secondary-button-border-color: " + this.customStyles.ui.secondaryButton.borderColor + "!important;");
                        }
                        if (this.customStyles.ui.secondaryButton.borderRadius) {
                            variables = variables + ("--gs-secondary-button-border-radius: " + this.customStyles.ui.secondaryButton.borderRadius + "!important;");
                        }
                    }
                }
                // layout
                if (this.formOptions && this.formOptions.layout) {
                    if (this.formOptions.layout.columns) {
                        if (typeof this.formOptions.layout.columns === 'number') {
                            // if typeof number
                            variables = variables + ("--gs-layout-columns-quantity: repeat(" + this.formOptions.layout.columns + ", 1fr)!important;");
                        }
                        else {
                            // if typeof string
                            variables = variables + ("--gs-layout-columns-quantity: " + this.formOptions.layout.columns + "!important;");
                        }
                    }
                    if (this.formOptions.layout.innerPadding) {
                        variables = variables + ("--gs-layout-padding: " + this.formOptions.layout.innerPadding + "!important;");
                    }
                }
                return this.sanitizer.bypassSecurityTrustStyle(variables);
            }
        },
        enumerable: true,
        configurable: true
    });
    GsFormComponent.prototype.formActions = function (action, id) {
        switch (action) {
            case GFieldValueButtonType.SUBMIT:
                this.submit();
                break;
            case GFieldValueButtonType.RESET:
                if (this.formGroup) {
                    this.formGroup.reset();
                    if (this.fileInputComponent !== undefined) {
                        this.fileInputComponent.forEach(function (el) { return el.resetField(); });
                    }
                    if (this.datePickerComponent !== undefined) {
                        this.datePickerComponent.forEach(function (el) { return el.resetField(); });
                    }
                    if (this.dropdownComponent !== undefined) {
                        this.dropdownComponent.forEach(function (el) { return el.resetField(); });
                    }
                }
                break;
            case GFieldValueButtonType.CUSTOM:
                this.customButtonClick.emit(id);
                break;
        }
    };
    GsFormComponent.prototype.onFieldChanged = function (changes) {
        this.fieldChanged.emit(changes);
    };
    GsFormComponent.ctorParameters = function () { return [
        { type: GsFormsService },
        { type: DomSanitizer },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: ['customStyles',] }] },
        { type: undefined, decorators: [{ type: Inject, args: ['googleMapApiKey',] }] }
    ]; };
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
    return GsFormComponent;
}());
export { GsFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWEsVUFBVSxFQUFvQixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8vRjtJQXdFRSx5QkFDVSxZQUE0QixFQUM1QixTQUF1QixFQUN2QixLQUF3QixFQUNSLFlBQVksRUFDVCxNQUFNO1FBSnpCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBMUUxQixlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQTRDbkM7O1dBRUc7UUFDZSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUN2RDs7V0FFRztRQUNlLGdCQUFX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QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixrcEtBQXVDOztTQUV4QyxDQUFDO1FBNkVHLG1CQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUN0QixtQkFBQSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtPQTdFakIsZUFBZSxDQW1ZM0I7SUFBRCxzQkFBQztDQUFBLEFBbllELElBbVlDO1NBbllZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBJbmplY3QsXG4gIEhvc3RCaW5kaW5nLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgVmlld0NoaWxkcmVuLFxuICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgR3NGb3Jtc1NlcnZpY2UgfSBmcm9tICcuL2dzLWZvcm1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgR0ZpZWxkU2VsZWN0b3IsIEdGaWVsZFZhbGlkYXRvclR5cGUsIEdGaWVsZFZhbHVlQnV0dG9uVHlwZSB9IGZyb20gJy4vZ3MtZm9ybXMuZW51bXMnO1xuaW1wb3J0IHsgR0Zvcm1GaWVsZHMsIEdTdHlsZXMsIEdGb3JtT3B0aW9ucywgR0ZpZWxkIH0gZnJvbSAnLi9ncy1mb3Jtcy5tb2RlbHMnO1xuaW1wb3J0IHsgR3NGaWxlSW5wdXRDb21wb25lbnQsIEdzRGF0ZVBpY2tlckNvbXBvbmVudCwgR3NEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vZ3MtZmllbGRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3MtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncy1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3MtZm9ybS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0KCk7XG4gIC8qKlxuICAgKiBJbnB1dDogZm9ybU9wdGlvbnM6IEdGb3JtT3B0aW9uc1xuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU2V0IGN1c3RvbSBjb25maWd1cmF0aW9uIHRvIHRoZSBmb3JtXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHB1YmxpYyBmb3JtT3B0aW9uczogR0Zvcm1PcHRpb25zID0ge1xuICAgKiAgIGNvdW50cnk6IEdGaWVsZENvdW50cnlDb2RlLkNPLFxuICAgKiAgIGZpZWxkVmFsdWVzOiB7XG4gICAqICAgICBjaGVja2JveDogW1xuICAgKiAgICAgICB7XG4gICAqICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAqICAgICAgICAgdGV4dDogJ3RydWUnXG4gICAqICAgICAgIH1cbiAgICogICAgIF1cbiAgICogICB9LFxuICAgKiAgIGxheW91dDoge1xuICAgKiAgICAgY29sdW1uczogJ3JlcGVhdCg0LCAxZnIpJyxcbiAgICogICB9XG4gICAqIH07XG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgZm9ybU9wdGlvbnM6IEdGb3JtT3B0aW9ucztcbiAgLyoqXG4gICAqIElucHV0OiBmb3JtRmllbGRzOiBHRm9ybUZpZWxkc1xuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogRm9ybSBmaWVsZHMgYXJyYXlcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogcHVibGljIGZvcm1GaWVsZHM6IEdGb3JtRmllbGRzID0gW1xuICAgKiAgIG5ldyBHVGV4dEZpZWxkKHtcbiAgICogICAgIG1vZGVsOiAndGV4dCcsXG4gICAqICAgICBsYWJlbDogJ1RFWFQnLFxuICAgKiAgICAgcGxhY2Vob2xkZXI6ICdURVhUX0lOUFVUJyxcbiAgICogICAgIHZhbHVlOiAnSGVsbG8gdGV4dCBpbnB1dCcsXG4gICAqICAgICB2YWxpZGF0b3JzOiB7XG4gICAqICAgICAgIFtHRmllbGRWYWxpZGF0b3JUeXBlLlJFUVVJUkVEXTogdHJ1ZVxuICAgKiAgICAgfSxcbiAgICogICB9KSxcbiAgICogXTtcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBmb3JtRmllbGRzOiBHRm9ybUZpZWxkcztcbiAgLyoqXG4gICAqIEdldCBmb3JtIGdyb3VwLiBmb3JtR3JvdXA6IEZvcm1Hcm91cCBgZm9ybWBcbiAgICovXG4gIEBPdXRwdXQoKSBwcml2YXRlIGZvcm0gPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcbiAgLyoqXG4gICAqIEdldCBmb3JtIGdyb3VwIGNoYW5nZXMuIGZvcm1Hcm91cDogRm9ybUdyb3VwIGBmb3JtYFxuICAgKi9cbiAgQE91dHB1dCgpIHByaXZhdGUgZm9ybUNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcbiAgLyoqXG4gICAqIEdldCBidXR0b24gZXZlbnQgc2VsZWN0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBwcml2YXRlIGN1c3RvbUJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIC8qKlxuICAgKiBHZXQgZm9ybSBncm91cCBjaGFuZ2VzLiBmb3JtR3JvdXA6IEZvcm1Hcm91cCBgZm9ybWBcbiAgICovXG4gIEBPdXRwdXQoKSBwcml2YXRlIGZpZWxkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT4oKTtcblxuICBAVmlld0NoaWxkcmVuKEdzRmlsZUlucHV0Q29tcG9uZW50KSBmaWxlSW5wdXRDb21wb25lbnQ6IFF1ZXJ5TGlzdDxHc0ZpbGVJbnB1dENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGRyZW4oR3NEYXRlUGlja2VyQ29tcG9uZW50KSBkYXRlUGlja2VyQ29tcG9uZW50OiBRdWVyeUxpc3Q8R3NEYXRlUGlja2VyQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZHJlbihHc0Ryb3Bkb3duQ29tcG9uZW50KSBkcm9wZG93bkNvbXBvbmVudDogUXVlcnlMaXN0PEdzRHJvcGRvd25Db21wb25lbnQ+O1xuXG4gIHB1YmxpYyBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGZpZWxkU2VsZWN0b3IgPSBHRmllbGRTZWxlY3RvcjtcbiAgcHVibGljIGZpZWxkVmFsaWRhdG9yVHlwZSA9IEdGaWVsZFZhbGlkYXRvclR5cGU7XG4gIHByaXZhdGUgY3VzdG9tU3R5bGVzOiBHU3R5bGVzO1xuICBwdWJsaWMgZ29vZ2xlTWFwQXBpS2V5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3Jtc1NlcnZpY2U6IEdzRm9ybXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdCgnY3VzdG9tU3R5bGVzJykgY3VzdG9tU3R5bGVzLFxuICAgIEBJbmplY3QoJ2dvb2dsZU1hcEFwaUtleScpIGFwaWtleVxuICApIHtcbiAgICB0aGlzLmN1c3RvbVN0eWxlcyA9IGN1c3RvbVN0eWxlcztcbiAgICB0aGlzLmdvb2dsZU1hcEFwaUtleSA9IGFwaWtleTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmZvcm1GaWVsZHMgJiYgY2hhbmdlcy5mb3JtRmllbGRzLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwKSB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmZvcm1zU2VydmljZS5idWlsZEZvcm0oY2hhbmdlcy5mb3JtRmllbGRzLmN1cnJlbnRWYWx1ZSk7XG5cbiAgICAgIHRoaXMuZm9ybUZpZWxkcyA9IGNoYW5nZXMuZm9ybUZpZWxkcy5jdXJyZW50VmFsdWU7XG4gICAgICB0aGlzLmZvcm1Hcm91cCA9IGZvcm07XG5cbiAgICAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JtR3JvdXApIHtcbiAgICAgIHRoaXMub25Gb3JtQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Gb3JtQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC52YWx1ZUNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcm1DaGFuZ2VzLmVtaXQodGhpcy5mb3JtR3JvdXApO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBmaWVsZFdpdGhEaXNwbGF5ID0gdGhpcy5mb3JtRmllbGRzLmZpbmQoKGZpZWxkOiBHRmllbGQpID0+IHtcbiAgICAgIGlmIChmaWVsZC5jb25maWcuZGlzcGxheUlmICYmICFmaWVsZC5ub3RXaWRnZXQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZpZWxkV2l0aERpc3BsYXkpIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkV2l0aERpc3BsYXkuY29uZmlnLmRpc3BsYXlJZi5tb2RlbF0udmFsdWVDaGFuZ2VzXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkV2l0aERpc3BsYXkuY29uZmlnLm1vZGVsXS5wYXRjaFZhbHVlKCcnKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZFdpdGhEaXNwbGF5LmNvbmZpZy5tb2RlbF0uY2xlYXJWYWxpZGF0b3JzKCk7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGRXaXRoRGlzcGxheS5jb25maWcubW9kZWxdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0uZW1pdCh0aGlzLmZvcm1Hcm91cCk7XG4gIH1cblxuICBwdWJsaWMgY2FuU3VibWl0KCRldmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm1PcHRpb25zLm9uRXJyb3JEaXNhYmxlU3VibWl0ICYmIHRoaXMuZm9ybUdyb3VwLmludmFsaWQpIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1Ym1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc1JlcXVpcmVkKGZpZWxkOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmllbGQuY29uZmlnLnZhbGlkYXRvcnMgPyBmaWVsZC5jb25maWcudmFsaWRhdG9yc1t0aGlzLmZpZWxkVmFsaWRhdG9yVHlwZS5SRVFVSVJFRF0gOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZUZpZWxkKGZpZWxkOiBhbnkpOiBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGRdLmRpcnR5ICYmIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkXS5lcnJvcnM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmllbGRFcnJvcihmaWVsZDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3Jtc1NlcnZpY2UuZmllbGRFcnJvcih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZF0pO1xuICB9XG5cbiAgcHVibGljIHNhbml0aXplU3R5bGUodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGNoZWNrQ29uZGl0aW9uKGZpZWxkOiBHRmllbGQpIHtcbiAgICBpZiAoIWZpZWxkLmNvbmZpZy5kaXNwbGF5SWYpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5jb25maWcuZGlzcGxheUlmLm1vZGVsXS52YWx1ZSA9PT0gZmllbGQuY29uZmlnLmRpc3BsYXlJZi5oYXNWYWx1ZSkge1xuICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IFtdO1xuICAgICAgY29uc3QgZmllbGRzID0gZmllbGQuY29uZmlnLnZhbGlkYXRvcnM7XG5cbiAgICAgIGZvciAoY29uc3QgdmFsaWRhdG9yIGluIGZpZWxkcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZpZWxkcywgdmFsaWRhdG9yKSAmJiBmaWVsZHNbdmFsaWRhdG9yXSkge1xuICAgICAgICAgIHZhbGlkYXRvcnMucHVzaCh0aGlzLmZvcm1zU2VydmljZS5idWlsZEVycm9ycyh2YWxpZGF0b3IsIGZpZWxkc1t2YWxpZGF0b3JdKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLmNvbmZpZy5tb2RlbF0pIHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQuY29uZmlnLm1vZGVsXS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMuY29tcG9zZSh2YWxpZGF0b3JzKSk7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLmNvbmZpZy5tb2RlbF0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLmNvbmZpZy5tb2RlbF0pIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLmNvbmZpZy5tb2RlbF0uY2xlYXJWYWxpZGF0b3JzKCk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5jb25maWcubW9kZWxdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9tIHN0eWxlc1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnN0eWxlJylcbiAgcHVibGljIGdldCB2YWx1ZUFzU3R5bGUoKTogYW55IHtcbiAgICBsZXQgdmFyaWFibGVzID0gJyc7XG5cbiAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMpIHtcbiAgICAgIC8vIGNvbG9yc1xuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5mb250KSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtY29sb3ItZm9udDogJHt0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5mb250fSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5wcmltYXJ5KSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtY29sb3ItcHJpbWFyeTogJHt0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5wcmltYXJ5fSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5zZWNvbmRhcnkpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1jb2xvci1zZWNvbmRhcnk6ICR7dGhpcy5jdXN0b21TdHlsZXMuY29sb3Iuc2Vjb25kYXJ5fSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5uZXV0cmFsKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtY29sb3ItbmV1dHJhbDogJHt0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5uZXV0cmFsfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5ib3JkZXIpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1jb2xvci1ib3JkZXI6ICR7dGhpcy5jdXN0b21TdHlsZXMuY29sb3IuYm9yZGVyfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci53aGl0ZSkge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWNvbG9yLXdoaXRlOiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLndoaXRlfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB1aVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpKSB7XG4gICAgICAgIC8vIGZvbnRcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmZvbnRTaXplKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtZm9udC1zaXplOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLmZvbnRTaXplfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhZGRpbmdcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnBhZGRpbmcpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1wYWRkaW5nOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnBhZGRpbmd9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3BhY2l0eVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuZGlzYWJsZWRPcGFjaXR5KSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtZGlzYWJsZWQtb3BhY2l0eTogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5kaXNhYmxlZE9wYWNpdHl9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdWkgaW5wdXRcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LnBhZGRpbmcpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWlucHV0LXBhZGRpbmc6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQucGFkZGluZ30haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmNvbG9yKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1pbnB1dC1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5jb2xvcn0haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWlucHV0LWJhY2tncm91bmQ6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQuYmFja2dyb3VuZH0haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlclNpemUpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWlucHV0LWJvcmRlci1zaXplOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlclNpemV9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5ib3JkZXJTdHlsZSkge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtaW5wdXQtYm9yZGVyLXN0eWxlOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlclN0eWxlfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQuYm9yZGVyQ29sb3IpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWlucHV0LWJvcmRlci1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5ib3JkZXJDb2xvcn0haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlclJhZGl1cykge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtaW5wdXQtYm9yZGVyLXJhZGl1czogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5ib3JkZXJSYWRpdXN9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5ib3JkZXJUb3ApIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWlucHV0LWJvcmRlci10b3A6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQuYm9yZGVyVG9wfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuaW5wdXQuYm9yZGVyUmlnaHQpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWlucHV0LWJvcmRlci1yaWdodDogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5ib3JkZXJSaWdodH0haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmlucHV0LmJvcmRlckJvdHRvbSkge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtaW5wdXQtYm9yZGVyLWJvdHRvbTogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5ib3JkZXJSYWRpdXN9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5ib3JkZXJMZWZ0KSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1pbnB1dC1ib3JkZXItbGVmdDogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5pbnB1dC5ib3JkZXJMZWZ0fSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1aSBwcmltYXJ5IGJ1dHRvblxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbikge1xuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLnBhZGRpbmcpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLXByaW1hcnktYnV0dG9uLXBhZGRpbmc6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5wYWRkaW5nfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5jb2xvcikge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtcHJpbWFyeS1idXR0b24tY29sb3I6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5jb2xvcn0haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZDogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJhY2tncm91bmR9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlckNvbG9yKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1wcmltYXJ5LWJ1dHRvbi1ib3JkZXItY29sb3I6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJDb2xvcn0haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyUmFkaXVzKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1wcmltYXJ5LWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyUmFkaXVzfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1aSBzZWNvbmRhcnkgYnV0dG9uXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5zZWNvbmRhcnlCdXR0b24pIHtcbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuc2Vjb25kYXJ5QnV0dG9uLnBhZGRpbmcpIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLXNlY29uZGFyeS1idXR0b24tcGFkZGluZzogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5zZWNvbmRhcnlCdXR0b24ucGFkZGluZ30haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnNlY29uZGFyeUJ1dHRvbi5jb2xvcikge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3Mtc2Vjb25kYXJ5LWJ1dHRvbi1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5zZWNvbmRhcnlCdXR0b24uY29sb3J9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5zZWNvbmRhcnlCdXR0b24uYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3Mtc2Vjb25kYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnNlY29uZGFyeUJ1dHRvbi5iYWNrZ3JvdW5kfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkuc2Vjb25kYXJ5QnV0dG9uLmJvcmRlckNvbG9yKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1zZWNvbmRhcnktYnV0dG9uLWJvcmRlci1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5zZWNvbmRhcnlCdXR0b24uYm9yZGVyQ29sb3J9IWltcG9ydGFudDtgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5zZWNvbmRhcnlCdXR0b24uYm9yZGVyUmFkaXVzKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1zZWNvbmRhcnktYnV0dG9uLWJvcmRlci1yYWRpdXM6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkuc2Vjb25kYXJ5QnV0dG9uLmJvcmRlclJhZGl1c30haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGxheW91dFxuICAgICAgaWYgKHRoaXMuZm9ybU9wdGlvbnMgJiYgdGhpcy5mb3JtT3B0aW9ucy5sYXlvdXQpIHtcblxuICAgICAgICBpZiAodGhpcy5mb3JtT3B0aW9ucy5sYXlvdXQuY29sdW1ucykge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5mb3JtT3B0aW9ucy5sYXlvdXQuY29sdW1ucyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIC8vIGlmIHR5cGVvZiBudW1iZXJcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWxheW91dC1jb2x1bW5zLXF1YW50aXR5OiByZXBlYXQoJHt0aGlzLmZvcm1PcHRpb25zLmxheW91dC5jb2x1bW5zfSwgMWZyKSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdHlwZW9mIHN0cmluZ1xuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtbGF5b3V0LWNvbHVtbnMtcXVhbnRpdHk6ICR7dGhpcy5mb3JtT3B0aW9ucy5sYXlvdXQuY29sdW1uc30haW1wb3J0YW50O2A7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybU9wdGlvbnMubGF5b3V0LmlubmVyUGFkZGluZykge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWxheW91dC1wYWRkaW5nOiAke3RoaXMuZm9ybU9wdGlvbnMubGF5b3V0LmlubmVyUGFkZGluZ30haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShcbiAgICAgICAgdmFyaWFibGVzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb3JtQWN0aW9ucyhhY3Rpb246IHN0cmluZywgaWQ/OiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSBHRmllbGRWYWx1ZUJ1dHRvblR5cGUuU1VCTUlUOlxuICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgR0ZpZWxkVmFsdWVCdXR0b25UeXBlLlJFU0VUOlxuICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXApIHtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZmlsZUlucHV0Q29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUlucHV0Q29tcG9uZW50LmZvckVhY2goZWwgPT4gZWwucmVzZXRGaWVsZCgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VyQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlckNvbXBvbmVudC5mb3JFYWNoKGVsID0+IGVsLnJlc2V0RmllbGQoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25Db21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkNvbXBvbmVudC5mb3JFYWNoKGVsID0+IGVsLnJlc2V0RmllbGQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBHRmllbGRWYWx1ZUJ1dHRvblR5cGUuQ1VTVE9NOlxuICAgICAgICB0aGlzLmN1c3RvbUJ1dHRvbkNsaWNrLmVtaXQoaWQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25GaWVsZENoYW5nZWQoY2hhbmdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIHRoaXMuZmllbGRDaGFuZ2VkLmVtaXQoY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==