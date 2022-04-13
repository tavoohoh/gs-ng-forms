import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GsFormsService } from '../../gs-forms.service';
import { GFieldValidatorType } from '../../gs-forms.enums';
var GsGenericFieldComponent = /** @class */ (function () {
    function GsGenericFieldComponent(formsService) {
        this.formsService = formsService;
        this.fieldValidatorType = GFieldValidatorType;
    }
    GsGenericFieldComponent.prototype.validateField = function ($event) {
        return this.formGroup.controls[this.field.config.model].dirty && this.formGroup.controls[this.field.config.model].errors;
    };
    GsGenericFieldComponent.prototype.getFieldError = function ($event) {
        return this.formsService.fieldError(this.formGroup.controls[this.field.config.model]);
    };
    GsGenericFieldComponent.ctorParameters = function () { return [
        { type: GsFormsService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], GsGenericFieldComponent.prototype, "field", void 0);
    tslib_1.__decorate([
        Input()
    ], GsGenericFieldComponent.prototype, "formGroup", void 0);
    GsGenericFieldComponent = tslib_1.__decorate([
        Component({
            template: ""
        })
    ], GsGenericFieldComponent);
    return GsGenericFieldComponent;
}());
export { GsGenericFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dlbmVyaWMtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdzL25nLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2dzLWZpZWxkcy9fZ2VuZXJpYy1maWVsZC9fZ2VuZXJpYy1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUszRDtJQU1FLGlDQUNTLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUg5Qix1QkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztJQUk1QyxDQUFDO0lBRUUsK0NBQWEsR0FBcEIsVUFBcUIsTUFBWTtRQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDM0gsQ0FBQztJQUVNLCtDQUFhLEdBQXBCLFVBQXFCLE1BQVk7UUFDL0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7O2dCQVRzQixjQUFjOztJQU41QjtRQUFSLEtBQUssRUFBRTswREFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7OERBQTZCO0lBRjFCLHVCQUF1QjtRQUhuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyx1QkFBdUIsQ0FpQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWpCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHc0Zvcm1zU2VydmljZSB9IGZyb20gJy4uLy4uL2dzLWZvcm1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgR0ZpZWxkVmFsaWRhdG9yVHlwZSB9IGZyb20gJy4uLy4uL2dzLWZvcm1zLmVudW1zJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBHc0dlbmVyaWNGaWVsZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBmaWVsZDogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG5cbiAgcHVibGljIGZpZWxkVmFsaWRhdG9yVHlwZSA9IEdGaWVsZFZhbGlkYXRvclR5cGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGZvcm1zU2VydmljZTogR3NGb3Jtc1NlcnZpY2VcbiAgKSB7IH1cblxuICBwdWJsaWMgdmFsaWRhdGVGaWVsZCgkZXZlbnQ/OiBhbnkpOiBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLmRpcnR5ICYmIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZmllbGQuY29uZmlnLm1vZGVsXS5lcnJvcnM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmllbGRFcnJvcigkZXZlbnQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm1zU2VydmljZS5maWVsZEVycm9yKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZmllbGQuY29uZmlnLm1vZGVsXSk7XG4gIH1cbn1cbiJdfQ==