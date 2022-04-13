import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
let GsTimePickerComponent = class GsTimePickerComponent extends GsGenericFieldComponent {
    constructor() {
        super(...arguments);
        this.fieldTouchedHours = false;
        this.fieldTouchedMinutes = false;
        this.validateFormatHours = false;
        this.validateFormatMinutes = false;
        this.validateRequiredHours = false;
        this.validateRequiredMinutes = false;
    }
    ngOnInit() {
        this.errorsTextArray = {
            requiredMinutes: this.formsService.getValidationMessage('ERR_REQUIRED_MIN'),
            requiredHours: this.formsService.getValidationMessage('ERR_REQUIRED_HOUR'),
            requiredFulltime: this.formsService.getValidationMessage('ERR_REQUIRED_FULLTIME'),
            patternMinutes: this.formsService.getValidationMessage('ERR_PATTERN_MIN'),
            patternHours: this.formsService.getValidationMessage('ERR_PATTERN_HOUR'),
            patternFulltime: this.formsService.getValidationMessage('ERR_PATTERN_FULLTIME')
        };
    }
    ngOnChanges(changes) {
        if (changes.field.currentValue) {
            this.field = changes.field.currentValue;
            if (this.field.config.value) {
                this.fieldValueHours = this.field.config.value.toString().split(':')[0] || '';
                this.fieldValueMinutes = this.field.config.value.toString().split(':')[1] || '';
            }
        }
    }
    onUpdateValue(isMinuteInput = false) {
        this.validateFormatHours = false;
        this.validateFormatMinutes = false;
        if (!this.fieldTouchedMinutes && isMinuteInput) {
            this.fieldTouchedMinutes = true;
        }
        if (!this.fieldTouchedHours && !isMinuteInput) {
            this.fieldTouchedHours = true;
        }
        if (this.fieldValueHours && !(this.fieldValueHours > 0 && this.fieldValueHours <= 24) && this.fieldTouchedHours) {
            this.validateFormatHours = true;
        }
        if (this.fieldValueMinutes && !(this.fieldValueMinutes >= 0 && this.fieldValueMinutes < 60) && this.fieldTouchedMinutes) {
            this.validateFormatMinutes = true;
        }
        const updatedValue = {
            fullTime: `${this.fieldValueHours}:${this.fieldValueMinutes}`,
            hour: this.fieldValueHours,
            min: this.fieldValueMinutes
        };
        if (updatedValue.hour && updatedValue.min && !this.validateFormatHours && !this.validateFormatMinutes) {
            this.formGroup.controls[this.field.config.model].patchValue(updatedValue);
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
        }
        else {
            this.formGroup.controls[this.field.config.model].patchValue(null);
        }
    }
    validateRequired(isMinuteInput) {
        const input = isMinuteInput ? 'Minutes' : 'Hours';
        this[`validateRequired${input}`] = this[`fieldTouched${input}`] &&
            (this[`fieldValue${input}`] === undefined || this[`fieldValue${input}`] === '');
        return this[`validateRequired${input}`];
    }
};
tslib_1.__decorate([
    Input()
], GsTimePickerComponent.prototype, "field", void 0);
GsTimePickerComponent = tslib_1.__decorate([
    Component({
        selector: 'gs-timepicker',
        template: "<div class=\"gs-field\" [class.gs-field-has-error]=\"\n  validateField() ||\n  validateRequired(true) && !validateFormatMinutes && !validateFormatHours && !validateRequiredHours && validateRequiredMinutes ||\n  validateRequired() && !validateFormatMinutes && !validateFormatHours && validateRequiredHours && !validateRequiredMinutes ||\n  validateRequiredHours && validateRequiredMinutes ||\n  validateFormatMinutes && !validateFormatHours ||\n  validateFormatHours && !validateFormatMinutes ||\n  validateFormatHours && validateFormatMinutes\n\">\n  \n  <label\n    class=\"gs-field-box\"\n    [class.gs-form-field-box-full]=\"field.config.label\">\n\n    <span\n      class=\"gs-field-label\"\n      *ngIf=\"field.config.label\">\n      {{ field.config.label | translate }}\n    </span>\n\n    <div class=\"gs-field-input gs-field-timepicker\">\n      <!-- hour input -->\n      <input \n        type=\"text\"\n        class=\"gs-field-input gs-field-timepicker-input-hour\" \n        placeholder=\"HH\"\n        [decimal]=\"false\"\n        [gsDigitOnly]=\"true\" \n        [autocomplete]=\"field.config.autocomplete || 'off'\"\n        [(ngModel)]=\"fieldValueHours\" \n        maxlength=\"2\"\n        (keyup)=\"onUpdateValue(false)\"/>\n      <!-- : divider -->\n      <span class=\"gs-field-input gs-field-timepicker-input-divider\">:</span>\n      <!-- min input -->\n      <input \n        type=\"text\"\n        class=\"gs-field-input gs-field-timepicker-input-min\" \n        placeholder=\"mm\"\n        [decimal]=\"false\"\n        [gsDigitOnly]=\"true\" \n        [autocomplete]=\"field.config.autocomplete || 'off'\"\n        maxlength=\"2\"\n        [(ngModel)]=\"fieldValueMinutes\"\n        (keyup)=\"onUpdateValue(true)\"/>\n    </div>\n  </label>\n\n  <span class=\"gs-field-error\">\n    <!-- show one error at a time --->\n    <ng-container *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </ng-container>\n    <ng-container *ngIf=\"validateRequired(true) && !validateFormatMinutes && !validateFormatHours && !validateRequiredHours && validateRequiredMinutes\">\n      {{errorsTextArray.requiredMinutes}}\n    </ng-container>\n    <ng-container *ngIf=\"validateRequired() && !validateFormatMinutes && !validateFormatHours && validateRequiredHours && !validateRequiredMinutes\">\n      {{errorsTextArray.requiredHours}}\n    </ng-container>\n    <ng-container *ngIf=\"validateRequiredHours && validateRequiredMinutes\">\n      {{errorsTextArray.requiredFulltime}}\n    </ng-container>\n    <ng-container *ngIf=\"validateFormatMinutes && !validateFormatHours\">\n      {{errorsTextArray.patternMinutes}}\n    </ng-container>\n    <ng-container *ngIf=\"validateFormatHours && !validateFormatMinutes\">\n      {{errorsTextArray.patternHours}}\n    </ng-container>\n    <ng-container *ngIf=\"validateFormatHours && validateFormatMinutes\">\n      {{errorsTextArray.patternFulltime}}\n    </ng-container>\n  </span>\n</div>",
        styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}input{background:0 0;border:none;outline:0;margin:0;width:100%}.gs-field-timepicker{display:-ms-grid;display:grid;-ms-grid-columns:1fr -webkit-min-content 1fr;-ms-grid-columns:1fr min-content 1fr;grid-template-columns:1fr -webkit-min-content 1fr;grid-template-columns:1fr min-content 1fr}.gs-field-timepicker .gs-field-input.gs-field-timepicker-input-divider,.gs-field-timepicker .gs-field-input.gs-field-timepicker-input-hour,.gs-field-timepicker .gs-field-input.gs-field-timepicker-input-min{grid-column:unset;grid-row:unset;-ms-grid-row-align:center;align-self:center}.gs-field-timepicker .gs-field-timepicker-input-hour,.gs-field-timepicker .gs-field-timepicker-input-min{text-align:center}.gs-field-timepicker .gs-field-timepicker-input-hour{border-radius:1rem 0 0 1rem}.gs-field-timepicker .gs-field-timepicker-input-min{border-radius:0 1rem 1rem 0}.gs-field-timepicker .gs-field-timepicker-input-divider{line-height:1;background-color:#e5e5e4;text-align:center;padding:.2rem .6rem}"]
    })
], GsTimePickerComponent);
export { GsTimePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZmllbGRzL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQVFyRixJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFzQixTQUFRLHVCQUF1QjtJQUxsRTs7UUFVUyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQzVCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQUM1QiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLDRCQUF1QixHQUFHLEtBQUssQ0FBQztJQXVFekMsQ0FBQztJQTVEQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNyQixlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztZQUMzRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQztZQUMxRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDO1lBQ2pGLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO1lBQ3pFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO1lBQ3hFLGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDO1NBQ2hG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QUM7UUFDbEQsSUFBSSxDQUFDLG1CQUFtQixLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEtBQUssRUFBRSxDQUFDO1lBQzdELENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxFQUFFLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRixPQUFPLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0YsQ0FBQTtBQWhGVTtJQUFSLEtBQUssRUFBRTtvREFBMEI7QUFEdkIscUJBQXFCO0lBTGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLGc3RkFBMEM7O0tBRTNDLENBQUM7R0FDVyxxQkFBcUIsQ0FpRmpDO1NBakZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHVGltZUZpZWxkIH0gZnJvbSAnLi4vLi4vZ3MtZm9ybXMud2lkZ2V0cyc7XG5pbXBvcnQgeyBHc0dlbmVyaWNGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL19nZW5lcmljLWZpZWxkL19nZW5lcmljLWZpZWxkLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3MtdGltZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZXBpY2tlci5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdzVGltZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIEdzR2VuZXJpY0ZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgZmllbGQ6IEdUaW1lRmllbGQ7XG5cbiAgcHVibGljIGZpZWxkVmFsdWVIb3VyczogYW55O1xuICBwdWJsaWMgZmllbGRWYWx1ZU1pbnV0ZXM6IGFueTtcbiAgcHVibGljIGZpZWxkVG91Y2hlZEhvdXJzID0gZmFsc2U7XG4gIHB1YmxpYyBmaWVsZFRvdWNoZWRNaW51dGVzID0gZmFsc2U7XG4gIHB1YmxpYyB2YWxpZGF0ZUZvcm1hdEhvdXJzID0gZmFsc2U7XG4gIHB1YmxpYyB2YWxpZGF0ZUZvcm1hdE1pbnV0ZXMgPSBmYWxzZTtcbiAgcHVibGljIHZhbGlkYXRlUmVxdWlyZWRIb3VycyA9IGZhbHNlO1xuICBwdWJsaWMgdmFsaWRhdGVSZXF1aXJlZE1pbnV0ZXMgPSBmYWxzZTtcblxuICBwdWJsaWMgZXJyb3JzVGV4dEFycmF5OiB7XG4gICAgcmVxdWlyZWRNaW51dGVzOiBzdHJpbmc7XG4gICAgcmVxdWlyZWRIb3Vyczogc3RyaW5nO1xuICAgIHJlcXVpcmVkRnVsbHRpbWU6IHN0cmluZztcbiAgICBwYXR0ZXJuTWludXRlczogc3RyaW5nO1xuICAgIHBhdHRlcm5Ib3Vyczogc3RyaW5nO1xuICAgIHBhdHRlcm5GdWxsdGltZTogc3RyaW5nO1xuICB9O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3JzVGV4dEFycmF5ID0ge1xuICAgICAgcmVxdWlyZWRNaW51dGVzOiB0aGlzLmZvcm1zU2VydmljZS5nZXRWYWxpZGF0aW9uTWVzc2FnZSgnRVJSX1JFUVVJUkVEX01JTicpLFxuICAgICAgcmVxdWlyZWRIb3VyczogdGhpcy5mb3Jtc1NlcnZpY2UuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoJ0VSUl9SRVFVSVJFRF9IT1VSJyksXG4gICAgICByZXF1aXJlZEZ1bGx0aW1lOiB0aGlzLmZvcm1zU2VydmljZS5nZXRWYWxpZGF0aW9uTWVzc2FnZSgnRVJSX1JFUVVJUkVEX0ZVTExUSU1FJyksXG4gICAgICBwYXR0ZXJuTWludXRlczogdGhpcy5mb3Jtc1NlcnZpY2UuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoJ0VSUl9QQVRURVJOX01JTicpLFxuICAgICAgcGF0dGVybkhvdXJzOiB0aGlzLmZvcm1zU2VydmljZS5nZXRWYWxpZGF0aW9uTWVzc2FnZSgnRVJSX1BBVFRFUk5fSE9VUicpLFxuICAgICAgcGF0dGVybkZ1bGx0aW1lOiB0aGlzLmZvcm1zU2VydmljZS5nZXRWYWxpZGF0aW9uTWVzc2FnZSgnRVJSX1BBVFRFUk5fRlVMTFRJTUUnKVxuICAgIH07XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuZmllbGQuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmZpZWxkID0gY2hhbmdlcy5maWVsZC5jdXJyZW50VmFsdWU7XG4gICAgICBpZiAodGhpcy5maWVsZC5jb25maWcudmFsdWUpIHtcbiAgICAgICAgdGhpcy5maWVsZFZhbHVlSG91cnMgPSB0aGlzLmZpZWxkLmNvbmZpZy52YWx1ZS50b1N0cmluZygpLnNwbGl0KCc6JylbMF0gfHwgJyc7XG4gICAgICAgIHRoaXMuZmllbGRWYWx1ZU1pbnV0ZXMgPSB0aGlzLmZpZWxkLmNvbmZpZy52YWx1ZS50b1N0cmluZygpLnNwbGl0KCc6JylbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uVXBkYXRlVmFsdWUoaXNNaW51dGVJbnB1dDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy52YWxpZGF0ZUZvcm1hdEhvdXJzID0gZmFsc2U7XG4gICAgdGhpcy52YWxpZGF0ZUZvcm1hdE1pbnV0ZXMgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZmllbGRUb3VjaGVkTWludXRlcyAmJiBpc01pbnV0ZUlucHV0KSB7XG4gICAgICB0aGlzLmZpZWxkVG91Y2hlZE1pbnV0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5maWVsZFRvdWNoZWRIb3VycyAmJiAhaXNNaW51dGVJbnB1dCkge1xuICAgICAgdGhpcy5maWVsZFRvdWNoZWRIb3VycyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmllbGRWYWx1ZUhvdXJzICYmICEodGhpcy5maWVsZFZhbHVlSG91cnMgPiAwICYmIHRoaXMuZmllbGRWYWx1ZUhvdXJzIDw9IDI0KSAmJiB0aGlzLmZpZWxkVG91Y2hlZEhvdXJzKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlRm9ybWF0SG91cnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZpZWxkVmFsdWVNaW51dGVzICYmICEodGhpcy5maWVsZFZhbHVlTWludXRlcyA+PSAwICYmIHRoaXMuZmllbGRWYWx1ZU1pbnV0ZXMgPCA2MCkgJiYgdGhpcy5maWVsZFRvdWNoZWRNaW51dGVzKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlRm9ybWF0TWludXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZFZhbHVlID0ge1xuICAgICAgZnVsbFRpbWU6IGAke3RoaXMuZmllbGRWYWx1ZUhvdXJzfToke3RoaXMuZmllbGRWYWx1ZU1pbnV0ZXN9YCxcbiAgICAgIGhvdXI6IHRoaXMuZmllbGRWYWx1ZUhvdXJzLFxuICAgICAgbWluOiB0aGlzLmZpZWxkVmFsdWVNaW51dGVzXG4gICAgfTtcblxuICAgIGlmICh1cGRhdGVkVmFsdWUuaG91ciAmJiB1cGRhdGVkVmFsdWUubWluICYmICF0aGlzLnZhbGlkYXRlRm9ybWF0SG91cnMgJiYgIXRoaXMudmFsaWRhdGVGb3JtYXRNaW51dGVzKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0ucGF0Y2hWYWx1ZSh1cGRhdGVkVmFsdWUpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnBhdGNoVmFsdWUobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlUmVxdWlyZWQoaXNNaW51dGVJbnB1dD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBpbnB1dCA9IGlzTWludXRlSW5wdXQgPyAnTWludXRlcycgOiAnSG91cnMnO1xuICAgIHRoaXNbYHZhbGlkYXRlUmVxdWlyZWQke2lucHV0fWBdID0gdGhpc1tgZmllbGRUb3VjaGVkJHtpbnB1dH1gXSAmJlxuICAgICAgKHRoaXNbYGZpZWxkVmFsdWUke2lucHV0fWBdID09PSB1bmRlZmluZWQgfHwgdGhpc1tgZmllbGRWYWx1ZSR7aW5wdXR9YF0gPT09ICcnKTtcbiAgICByZXR1cm4gdGhpc1tgdmFsaWRhdGVSZXF1aXJlZCR7aW5wdXR9YF07XG4gIH1cbn1cbiJdfQ==