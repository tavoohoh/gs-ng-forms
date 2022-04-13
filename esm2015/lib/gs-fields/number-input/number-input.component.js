import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
let GsNumberInputComponent = class GsNumberInputComponent extends GsGenericFieldComponent {
    setPresicion(input) {
        const value = input.value;
        const pointIndex = value.indexOf('.');
        if (pointIndex >= 0) {
            const precision = this.field.config.precision || 3;
            const valueLeft = value.substr(0, pointIndex);
            const valueRight = value.substr(pointIndex, precision);
            input.value = valueLeft + valueRight;
        }
        else {
            input.value = value;
        }
    }
};
tslib_1.__decorate([
    Input()
], GsNumberInputComponent.prototype, "field", void 0);
GsNumberInputComponent = tslib_1.__decorate([
    Component({
        selector: 'gs-number-input',
        template: "<ng-container [formGroup]=\"formGroup\">\n  <div\n    class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label\n      class=\"gs-field-box\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <input\n        class=\"gs-field-input\"\n        type=\"text\"\n        inputmode=\"numeric\"\n        autocomplete=\"off\"\n        [decimal]=\"field.config.decimal\"\n        [autocomplete]=\"field.config.autocomplete || 'off'\"\n        [id]=\"field.config.model\"\n        [min]=\"field.config.validators ? field.config.validators[fieldValidatorType.MIN] : null\"\n        [max]=\"field.config.validators ? field.config.validators[fieldValidatorType.MAX] : null\"\n        [formControlName]=\"field.config.model\"\n        [placeholder]=\"field.config.placeholder || field.config.label || field.config.model | translate\"\n        [value]=\"field.config.value || null\"\n        (input)=\"setPresicion($event.target)\"\n        gsDigitOnly>\n\n        <!-- symbol -->\n        <div class=\"gs-form-field_symbol\" *ngIf=\"field.config.symbol\">\n          {{field.config.symbol}}\n        </div>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
        styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}"]
    })
], GsNumberInputComponent);
export { GsNumberInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncy9uZy1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9ncy1maWVsZHMvbnVtYmVyLWlucHV0L251bWJlci1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBT3JGLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXVCLFNBQVEsdUJBQXVCO0lBRzFELFlBQVksQ0FBQyxLQUF3QjtRQUMxQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEMsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ25CLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7WUFDbkQsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDOUMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdkQsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQ3RDO2FBQU07WUFDTCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNyQjtJQUNILENBQUM7Q0FDRixDQUFBO0FBZlU7SUFBUixLQUFLLEVBQUU7cURBQTRCO0FBRHpCLHNCQUFzQjtJQUxsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLDg4Q0FBNEM7O0tBRTdDLENBQUM7R0FDVyxzQkFBc0IsQ0FnQmxDO1NBaEJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdOdW1iZXJGaWVsZCB9IGZyb20gJy4uLy4uL2dzLWZvcm1zLndpZGdldHMnO1xuaW1wb3J0IHsgR3NHZW5lcmljRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9fZ2VuZXJpYy1maWVsZC9fZ2VuZXJpYy1maWVsZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncy1udW1iZXItaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnVtYmVyLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbnVtYmVyLWlucHV0LmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3NOdW1iZXJJbnB1dENvbXBvbmVudCBleHRlbmRzIEdzR2VuZXJpY0ZpZWxkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcHVibGljIGZpZWxkOiBHTnVtYmVyRmllbGQ7XG5cbiAgcHVibGljIHNldFByZXNpY2lvbihpbnB1dDogeyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHBvaW50SW5kZXggPSB2YWx1ZS5pbmRleE9mKCcuJyk7XG5cbiAgICBpZiAocG9pbnRJbmRleCA+PSAwKSB7XG4gICAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmZpZWxkLmNvbmZpZy5wcmVjaXNpb24gfHwgMztcbiAgICAgIGNvbnN0IHZhbHVlTGVmdCA9IHZhbHVlLnN1YnN0cigwLCBwb2ludEluZGV4KTtcbiAgICAgIGNvbnN0IHZhbHVlUmlnaHQgPSB2YWx1ZS5zdWJzdHIocG9pbnRJbmRleCwgcHJlY2lzaW9uKTtcbiAgICAgIGlucHV0LnZhbHVlID0gdmFsdWVMZWZ0ICsgdmFsdWVSaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==