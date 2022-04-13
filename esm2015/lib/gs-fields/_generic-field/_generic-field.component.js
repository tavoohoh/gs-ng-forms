import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { GsFormsService } from '../../gs-forms.service';
import { GFieldValidatorType } from '../../gs-forms.enums';
let GsGenericFieldComponent = class GsGenericFieldComponent {
    constructor(formsService) {
        this.formsService = formsService;
        this.fieldValidatorType = GFieldValidatorType;
    }
    validateField($event) {
        return this.formGroup.controls[this.field.config.model].dirty && this.formGroup.controls[this.field.config.model].errors;
    }
    getFieldError($event) {
        return this.formsService.fieldError(this.formGroup.controls[this.field.config.model]);
    }
};
GsGenericFieldComponent.ctorParameters = () => [
    { type: GsFormsService }
];
tslib_1.__decorate([
    Input()
], GsGenericFieldComponent.prototype, "field", void 0);
tslib_1.__decorate([
    Input()
], GsGenericFieldComponent.prototype, "formGroup", void 0);
GsGenericFieldComponent = tslib_1.__decorate([
    Component({
        template: ``
    })
], GsGenericFieldComponent);
export { GsGenericFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dlbmVyaWMtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdzL25nLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2dzLWZpZWxkcy9fZ2VuZXJpYy1maWVsZC9fZ2VuZXJpYy1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUszRCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQU1sQyxZQUNTLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUg5Qix1QkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztJQUk1QyxDQUFDO0lBRUUsYUFBYSxDQUFDLE1BQVk7UUFDL0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzNILENBQUM7SUFFTSxhQUFhLENBQUMsTUFBWTtRQUMvQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztDQUNGLENBQUE7O1lBVndCLGNBQWM7O0FBTjVCO0lBQVIsS0FBSyxFQUFFO3NEQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTswREFBNkI7QUFGMUIsdUJBQXVCO0lBSG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztHQUNXLHVCQUF1QixDQWlCbkM7U0FqQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3NGb3Jtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9ncy1mb3Jtcy5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEdGaWVsZFZhbGlkYXRvclR5cGUgfSBmcm9tICcuLi8uLi9ncy1mb3Jtcy5lbnVtcyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgR3NHZW5lcmljRmllbGRDb21wb25lbnQge1xuICBASW5wdXQoKSBwdWJsaWMgZmllbGQ6IGFueTtcbiAgQElucHV0KCkgcHVibGljIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuXG4gIHB1YmxpYyBmaWVsZFZhbGlkYXRvclR5cGUgPSBHRmllbGRWYWxpZGF0b3JUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBmb3Jtc1NlcnZpY2U6IEdzRm9ybXNTZXJ2aWNlXG4gICkgeyB9XG5cbiAgcHVibGljIHZhbGlkYXRlRmllbGQoJGV2ZW50PzogYW55KTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZmllbGQuY29uZmlnLm1vZGVsXS5kaXJ0eSAmJiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0uZXJyb3JzO1xuICB9XG5cbiAgcHVibGljIGdldEZpZWxkRXJyb3IoJGV2ZW50PzogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3Jtc1NlcnZpY2UuZmllbGRFcnJvcih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0pO1xuICB9XG59XG4iXX0=