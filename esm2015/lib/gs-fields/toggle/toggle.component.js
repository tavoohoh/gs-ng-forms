import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
let GsToggleComponent = class GsToggleComponent extends GsGenericFieldComponent {
};
tslib_1.__decorate([
    Input()
], GsToggleComponent.prototype, "field", void 0);
GsToggleComponent = tslib_1.__decorate([
    Component({
        selector: 'gs-toggle',
        template: "<ng-container [formGroup]=\"formGroup\">\n  <div\n    class=\"gs-field\" \n    [class.gs-field-has-error]=\"validateField()\">\n    \n    <label class=\"gs-field-box gs-input-switch-box\">\n  \n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <div class=\"gs-input-switch\">\n        <input \n          class=\"gs-input-switch-checkbox\"\n          type=\"checkbox\" \n          [id]=\"field.config.model\"\n          [formControlName]=\"field.config.model\"\n          [value]=\"field.config.value || null\"/>\n        <div class=\"gs-input-switch-slider\"></div>\n      </div>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n  </div>\n</ng-container>",
        styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-input-switch-box .gs-input-switch{position:relative;display:inline-block;height:17px;width:30px;margin-top:5px}.gs-input-switch-box .gs-input-switch .gs-input-switch-checkbox{display:none}.gs-input-switch-box .gs-input-switch .gs-input-switch-checkbox:checked~.gs-input-switch-slider{background-color:#332927}.gs-input-switch-box .gs-input-switch .gs-input-switch-checkbox:checked~.gs-input-switch-slider:before{-webkit-transform:translateX(13px);transform:translateX(13px)}.gs-input-switch-box .gs-input-switch .gs-input-switch-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#b8b4b4;border-radius:21px}.gs-input-switch-box .gs-input-switch .gs-input-switch-slider:before{-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;position:absolute;content:\"\";height:11px;width:11px;left:3px;bottom:3px;background-color:#fff;border-radius:50%}"]
    })
], GsToggleComponent);
export { GsToggleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncy9uZy1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9ncy1maWVsZHMvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBT3JGLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWtCLFNBQVEsdUJBQXVCO0NBRTdELENBQUE7QUFEVTtJQUFSLEtBQUssRUFBRTtnREFBNEI7QUFEekIsaUJBQWlCO0lBTDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLDAyQkFBc0M7O0tBRXZDLENBQUM7R0FDVyxpQkFBaUIsQ0FFN0I7U0FGWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHVG9nZ2xlRmllbGQgfSBmcm9tICcuLi8uLi9ncy1mb3Jtcy53aWRnZXRzJztcbmltcG9ydCB7IEdzR2VuZXJpY0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vX2dlbmVyaWMtZmllbGQvX2dlbmVyaWMtZmllbGQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3MtdG9nZ2xlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvZ2dsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvZ2dsZS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdzVG9nZ2xlQ29tcG9uZW50IGV4dGVuZHMgR3NHZW5lcmljRmllbGRDb21wb25lbnQge1xuICBASW5wdXQoKSBwdWJsaWMgZmllbGQ6IEdUb2dnbGVGaWVsZDtcbn1cbiJdfQ==