import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GFieldValidatorType } from './gs-forms.enums';
import { TranslateService } from '@ngx-translate/core';
import { VALIDATION_MESSAGES, MESSAGES } from './gs-forms.constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@angular/common/http";
var GsFormsService = /** @class */ (function () {
    function GsFormsService(formBuilder, translateService, http) {
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.http = http;
    }
    GsFormsService.prototype.buildErrors = function (validator, value) {
        switch (validator) {
            case GFieldValidatorType.MIN:
                return Validators.min(value);
            case GFieldValidatorType.MAX:
                return Validators.max(value);
            case GFieldValidatorType.REQUIRED:
                return Validators.required;
            case GFieldValidatorType.EMAIL:
                return Validators.email;
            case GFieldValidatorType.MIN_LENGTH:
                return Validators.minLength(value);
            case GFieldValidatorType.MAX_LENGTH:
                return Validators.maxLength(value);
            case GFieldValidatorType.PATTERN:
                return Validators.pattern(value);
        }
    };
    GsFormsService.prototype.setDefaultFormObject = function (field, formObject, hasValidators) {
        formObject[field.config.model] = [];
        formObject[field.config.model].push({
            value: field.config.value,
            disabled: false
        });
        var validators = [];
        var fields = field.config.validators;
        for (var validator in fields) {
            if (Object.prototype.hasOwnProperty.call(fields, validator) && fields[validator]) {
                validators.push(this.buildErrors(validator, fields[validator]));
            }
        }
        if (hasValidators) {
            formObject[field.config.model].push(Validators.compose(validators));
        }
        return formObject;
    };
    GsFormsService.prototype.buildForm = function (formField) {
        var e_1, _a;
        var formObject = new Object();
        try {
            for (var formField_1 = tslib_1.__values(formField), formField_1_1 = formField_1.next(); !formField_1_1.done; formField_1_1 = formField_1.next()) {
                var field = formField_1_1.value;
                if (field.config.model && !field.notWidget) {
                    this.setDefaultFormObject(field, formObject, field.config.validators ? true : false);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (formField_1_1 && !formField_1_1.done && (_a = formField_1.return)) _a.call(formField_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.formBuilder.group(formObject);
    };
    GsFormsService.prototype.fieldError = function (field) {
        var error = field.errors;
        if (error[GFieldValidatorType.MIN]) {
            return this.getValidationMessage('ERR_MIN', error[GFieldValidatorType.MIN].min);
        }
        else if (error[GFieldValidatorType.MAX]) {
            return this.getValidationMessage('ERR_MAX', error[GFieldValidatorType.MAX].max);
        }
        else if (error[GFieldValidatorType.REQUIRED]) {
            return this.getValidationMessage('ERR_REQUIRED');
        }
        else if (error[GFieldValidatorType.EMAIL]) {
            return this.getValidationMessage('ERR_EMAIL');
        }
        else if (error[GFieldValidatorType.MIN_LENGTH]) {
            return this.getValidationMessage('ERR_MIN_LENGTH', error[GFieldValidatorType.MIN_LENGTH].requiredLength);
        }
        else if (error[GFieldValidatorType.MAX_LENGTH]) {
            return this.getValidationMessage('ERR_MAX_LENGTH', error[GFieldValidatorType.MAX_LENGTH].requiredLength);
        }
        else if (error[GFieldValidatorType.PATTERN]) {
            return this.getValidationMessage('ERR_PATTERN');
        }
        else {
            return this.getValidationMessage('DEFAULT');
        }
    };
    GsFormsService.prototype.getValidationMessage = function (key, param) {
        var lang = this.translateService.currentLang;
        if (!lang) {
            console.warn("translateService.currentLang is not set, using default language: 'en'");
            lang = 'en';
        }
        var messageLang = VALIDATION_MESSAGES.en;
        if (!VALIDATION_MESSAGES[lang]) {
            console.warn("We don't have support for language " + lang + ". Please email us to hi@tavoohoh.com. Using default language: 'en'");
        }
        else {
            messageLang = VALIDATION_MESSAGES[lang];
        }
        var message = messageLang[key];
        if (param) {
            message = message.replace('${param}', param);
        }
        return message;
    };
    GsFormsService.prototype.getMessage = function (key, param) {
        var messageLang = !this.translateService.currentLang ? MESSAGES.en : MESSAGES[this.translateService.currentLang];
        var message = messageLang[key];
        if (param) {
            message = message.replace('${param}', param);
        }
        return message;
    };
    GsFormsService.prototype.getLang = function () {
        return this.translateService.getDefaultLang();
    };
    GsFormsService.prototype.uploadFileServices = function (url, method, file, paramName) {
        var formData = new FormData();
        formData.append(paramName, file);
        return this.http[method](url, formData);
    };
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
    GsFormsService.prototype.mapFieldOptionValues = function (options, optionValue, optionText) {
        var mappedValues = options.map(function (obj) {
            return {
                value: obj[optionValue],
                text: obj[optionText]
            };
        });
        return mappedValues;
    };
    /**
     * @description
     * Patch form values
     *
     * @param formFields your `GFormFields`
     * @param formValues an object of values like `FormGroup` value.
     * The keys of `formValues` most match the model name of your `GFields`
     */
    GsFormsService.prototype.patchFormValues = function (formFields, formValues, resetForm, resetFields) {
        if (!resetFields) {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < formFields.length; i++) {
                formFields[i].config.value = null;
            }
        }
        if (!resetForm) {
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < formFields.length; i++) {
                if (formValues[formFields[i].config.model]) {
                    formFields[i].config.value = formValues[formFields[i].config.model];
                }
            }
        }
        return formFields;
    };
    GsFormsService.prototype.getAddress = function (lan, lng, apikey) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lan + "," + lng + "&result_type=street_address&key=" + apikey);
    };
    GsFormsService.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: TranslateService },
        { type: HttpClient }
    ]; };
    GsFormsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GsFormsService_Factory() { return new GsFormsService(i0.ɵɵinject(i1.FormBuilder), i0.ɵɵinject(i2.TranslateService), i0.ɵɵinject(i3.HttpClient)); }, token: GsFormsService, providedIn: "root" });
    GsFormsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GsFormsService);
    return GsFormsService;
}());
export { GsFormsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtZm9ybXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncy9uZy1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9ncy1mb3Jtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBTXJFO0lBRUUsd0JBQ1UsV0FBd0IsRUFDeEIsZ0JBQWtDLEVBQ2xDLElBQWdCO1FBRmhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUN0QixDQUFDO0lBRUUsb0NBQVcsR0FBbEIsVUFBbUIsU0FBaUIsRUFBRSxLQUFVO1FBQzlDLFFBQVEsU0FBUyxFQUFFO1lBQ2pCLEtBQUssbUJBQW1CLENBQUMsR0FBRztnQkFDMUIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9CLEtBQUssbUJBQW1CLENBQUMsR0FBRztnQkFDMUIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9CLEtBQUssbUJBQW1CLENBQUMsUUFBUTtnQkFDL0IsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBRTdCLEtBQUssbUJBQW1CLENBQUMsS0FBSztnQkFDNUIsT0FBTyxVQUFVLENBQUMsS0FB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QUNGO1NBQ0Y7UUFFRCxPQUFPLFVBQXlCLENBQUM7SUFDbkMsQ0FBQztJQUVNLG1DQUFVLEdBQWpCLFVBQWtCLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTTtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDhEQUE0RCxHQUFHLFNBQUksR0FBRyx3Q0FBbUMsTUFBUSxDQUFDLENBQUM7SUFDMUksQ0FBQzs7Z0JBek1zQixXQUFXO2dCQUNOLGdCQUFnQjtnQkFDNUIsVUFBVTs7O0lBTGYsY0FBYztRQUgxQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csY0FBYyxDQTZNMUI7eUJBMU5EO0NBME5DLEFBN01ELElBNk1DO1NBN01ZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgR0Zvcm1GaWVsZHMsIEdGaWVsZCwgR0ZpZWxkT3B0aW9uVmFsdWVzLCBHRm9ybUZpZWxkc1JlYWRPbmx5IH0gZnJvbSAnLi9ncy1mb3Jtcy5tb2RlbHMnO1xuaW1wb3J0IHsgR0ZpZWxkVmFsaWRhdG9yVHlwZSB9IGZyb20gJy4vZ3MtZm9ybXMuZW51bXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVkFMSURBVElPTl9NRVNTQUdFUywgTUVTU0FHRVMgfSBmcm9tICcuL2dzLWZvcm1zLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR3NGb3Jtc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgKSB7IH1cblxuICBwdWJsaWMgYnVpbGRFcnJvcnModmFsaWRhdG9yOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBWYWxpZGF0b3JzIHtcbiAgICBzd2l0Y2ggKHZhbGlkYXRvcikge1xuICAgICAgY2FzZSBHRmllbGRWYWxpZGF0b3JUeXBlLk1JTjpcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMubWluKHZhbHVlKTtcblxuICAgICAgY2FzZSBHRmllbGRWYWxpZGF0b3JUeXBlLk1BWDpcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMubWF4KHZhbHVlKTtcblxuICAgICAgY2FzZSBHRmllbGRWYWxpZGF0b3JUeXBlLlJFUVVJUkVEOlxuICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5yZXF1aXJlZDtcblxuICAgICAgY2FzZSBHRmllbGRWYWxpZGF0b3JUeXBlLkVNQUlMOlxuICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5lbWFpbDtcblxuICAgICAgY2FzZSBHRmllbGRWYWxpZGF0b3JUeXBlLk1JTl9MRU5HVEg6XG4gICAgICAgIHJldHVybiBWYWxpZGF0b3JzLm1pbkxlbmd0aCh2YWx1ZSk7XG5cbiAgICAgIGNhc2UgR0ZpZWxkVmFsaWRhdG9yVHlwZS5NQVhfTEVOR1RIOlxuICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXhMZW5ndGgodmFsdWUpO1xuXG4gICAgICBjYXNlIEdGaWVsZFZhbGlkYXRvclR5cGUuUEFUVEVSTjpcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMucGF0dGVybih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREZWZhdWx0Rm9ybU9iamVjdChmaWVsZDogR0ZpZWxkLCBmb3JtT2JqZWN0OiBvYmplY3QsIGhhc1ZhbGlkYXRvcnM6IGJvb2xlYW4pOiBvYmplY3Qge1xuICAgIGZvcm1PYmplY3RbZmllbGQuY29uZmlnLm1vZGVsXSA9IFtdO1xuICAgIGZvcm1PYmplY3RbZmllbGQuY29uZmlnLm1vZGVsXS5wdXNoKHtcbiAgICAgIHZhbHVlOiBmaWVsZC5jb25maWcudmFsdWUsXG4gICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9KTtcblxuICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBbXTtcbiAgICBjb25zdCBmaWVsZHMgPSBmaWVsZC5jb25maWcudmFsaWRhdG9ycztcblxuICAgIGZvciAoY29uc3QgdmFsaWRhdG9yIGluIGZpZWxkcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmaWVsZHMsIHZhbGlkYXRvcikgJiYgZmllbGRzW3ZhbGlkYXRvcl0pIHtcbiAgICAgICAgdmFsaWRhdG9ycy5wdXNoKHRoaXMuYnVpbGRFcnJvcnModmFsaWRhdG9yLCBmaWVsZHNbdmFsaWRhdG9yXSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZGF0b3JzKSB7XG4gICAgICBmb3JtT2JqZWN0W2ZpZWxkLmNvbmZpZy5tb2RlbF0ucHVzaChWYWxpZGF0b3JzLmNvbXBvc2UodmFsaWRhdG9ycykpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybU9iamVjdDtcbiAgfVxuXG4gIHB1YmxpYyBidWlsZEZvcm0oZm9ybUZpZWxkOiBHRm9ybUZpZWxkcyk6IEZvcm1Hcm91cCB7XG4gICAgY29uc3QgZm9ybU9iamVjdCA9IG5ldyBPYmplY3QoKTtcblxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgZm9ybUZpZWxkKSB7XG4gICAgICBpZiAoZmllbGQuY29uZmlnLm1vZGVsICYmICFmaWVsZC5ub3RXaWRnZXQpIHtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0Rm9ybU9iamVjdChmaWVsZCwgZm9ybU9iamVjdCwgZmllbGQuY29uZmlnLnZhbGlkYXRvcnMgPyB0cnVlIDogZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGZvcm1PYmplY3QpO1xuICB9XG5cbiAgcHVibGljIGZpZWxkRXJyb3IoZmllbGQ6IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgZXJyb3IgPSBmaWVsZC5lcnJvcnM7XG5cbiAgICBpZiAoZXJyb3JbR0ZpZWxkVmFsaWRhdG9yVHlwZS5NSU5dKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZSgnRVJSX01JTicsIGVycm9yW0dGaWVsZFZhbGlkYXRvclR5cGUuTUlOXS5taW4pO1xuXG4gICAgfSBlbHNlIGlmIChlcnJvcltHRmllbGRWYWxpZGF0b3JUeXBlLk1BWF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFZhbGlkYXRpb25NZXNzYWdlKCdFUlJfTUFYJywgZXJyb3JbR0ZpZWxkVmFsaWRhdG9yVHlwZS5NQVhdLm1heCk7XG5cbiAgICB9IGVsc2UgaWYgKGVycm9yW0dGaWVsZFZhbGlkYXRvclR5cGUuUkVRVUlSRURdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZSgnRVJSX1JFUVVJUkVEJyk7XG5cbiAgICB9IGVsc2UgaWYgKGVycm9yW0dGaWVsZFZhbGlkYXRvclR5cGUuRU1BSUxdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZSgnRVJSX0VNQUlMJyk7XG5cbiAgICB9IGVsc2UgaWYgKGVycm9yW0dGaWVsZFZhbGlkYXRvclR5cGUuTUlOX0xFTkdUSF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFZhbGlkYXRpb25NZXNzYWdlKCdFUlJfTUlOX0xFTkdUSCcsIGVycm9yW0dGaWVsZFZhbGlkYXRvclR5cGUuTUlOX0xFTkdUSF0ucmVxdWlyZWRMZW5ndGgpO1xuXG4gICAgfSBlbHNlIGlmIChlcnJvcltHRmllbGRWYWxpZGF0b3JUeXBlLk1BWF9MRU5HVEhdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZSgnRVJSX01BWF9MRU5HVEgnLCBlcnJvcltHRmllbGRWYWxpZGF0b3JUeXBlLk1BWF9MRU5HVEhdLnJlcXVpcmVkTGVuZ3RoKTtcblxuICAgIH0gZWxzZSBpZiAoZXJyb3JbR0ZpZWxkVmFsaWRhdG9yVHlwZS5QQVRURVJOXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoJ0VSUl9QQVRURVJOJyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoJ0RFRkFVTFQnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0VmFsaWRhdGlvbk1lc3NhZ2Uoa2V5OiBzdHJpbmcsIHBhcmFtPzogc3RyaW5nKSB7XG4gICAgbGV0IGxhbmcgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmc7XG5cbiAgICBpZiAoIWxhbmcpIHtcbiAgICAgIGNvbnNvbGUud2FybihgdHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZyBpcyBub3Qgc2V0LCB1c2luZyBkZWZhdWx0IGxhbmd1YWdlOiAnZW4nYCk7XG4gICAgICBsYW5nID0gJ2VuJztcbiAgICB9XG5cbiAgICBsZXQgbWVzc2FnZUxhbmcgPSBWQUxJREFUSU9OX01FU1NBR0VTLmVuO1xuXG4gICAgaWYgKCFWQUxJREFUSU9OX01FU1NBR0VTW2xhbmddKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFdlIGRvbid0IGhhdmUgc3VwcG9ydCBmb3IgbGFuZ3VhZ2UgJHtsYW5nfS4gUGxlYXNlIGVtYWlsIHVzIHRvIGhpQHRhdm9vaG9oLmNvbS4gVXNpbmcgZGVmYXVsdCBsYW5ndWFnZTogJ2VuJ2ApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlTGFuZyA9IFZBTElEQVRJT05fTUVTU0FHRVNbbGFuZ107XG4gICAgfVxuXG4gICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlTGFuZ1trZXldO1xuXG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCcke3BhcmFtfScsIHBhcmFtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNZXNzYWdlKGtleTogc3RyaW5nLCBwYXJhbT86IHN0cmluZykge1xuICAgIGNvbnN0IG1lc3NhZ2VMYW5nID0gIXRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZyA/IE1FU1NBR0VTLmVuIDogTUVTU0FHRVNbdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nXTtcbiAgICBsZXQgbWVzc2FnZSA9IG1lc3NhZ2VMYW5nW2tleV07XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCcke3BhcmFtfScsIHBhcmFtKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGFuZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0RGVmYXVsdExhbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGxvYWRGaWxlU2VydmljZXModXJsOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBmaWxlOiBGaWxlLCBwYXJhbU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChwYXJhbU5hbWUsIGZpbGUpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2RdKHVybCwgZm9ybURhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBDb252ZXJ0IGFuIGFycmF5IG9mIHZhbHVlcyBgQXJyYXk8e1trZXk6IHN0cmluZ106IGFueX0+IHwgQXJyYXk8e1trZXk6IHN0cmluZ106IGFueSwgW2tleTogc3RyaW5nXTogYW55fT5gXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEFuIGFycmF5IG9mIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9uVmFsdWVcbiAgICogVGhlIGtleSB0byBiZSBtYXBwZWQgdG8gYEdGaWVsZE9wdGlvblZhbHVlc2Aga2V5IGB2YWx1ZWBcbiAgICogQHBhcmFtIG9wdGlvblRleHRcbiAgICogVGhlIGtleSB0byBiZSBtYXBwZWQgdG8gYEdGaWVsZE9wdGlvblZhbHVlc2Aga2V5IGB0ZXh0YFxuICAgKlxuICAgKiBAa2V5IHZhbHVlXG4gICAqIFRoZSB2YWx1ZSB1c2VkIGluIGEgc2VsZWN0IG9wdGlvblxuICAgKiBAa2V5IHRleHRcbiAgICogVGhlIHRleHQgdXNlZCBpbnNpZGUgb2Ygc2VsZWN0IG9wdGlvblxuICAgKi9cbiAgcHVibGljIG1hcEZpZWxkT3B0aW9uVmFsdWVzKG9wdGlvbnM6IEFycmF5PHt9Piwgb3B0aW9uVmFsdWU6IHN0cmluZywgb3B0aW9uVGV4dDogc3RyaW5nLCApOiBHRmllbGRPcHRpb25WYWx1ZXMge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlcyA9IG9wdGlvbnMubWFwKG9iaiA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogb2JqW29wdGlvblZhbHVlXSxcbiAgICAgICAgdGV4dDogb2JqW29wdGlvblRleHRdXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcHBlZFZhbHVlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUGF0Y2ggZm9ybSB2YWx1ZXNcbiAgICpcbiAgICogQHBhcmFtIGZvcm1GaWVsZHMgeW91ciBgR0Zvcm1GaWVsZHNgXG4gICAqIEBwYXJhbSBmb3JtVmFsdWVzIGFuIG9iamVjdCBvZiB2YWx1ZXMgbGlrZSBgRm9ybUdyb3VwYCB2YWx1ZS5cbiAgICogVGhlIGtleXMgb2YgYGZvcm1WYWx1ZXNgIG1vc3QgbWF0Y2ggdGhlIG1vZGVsIG5hbWUgb2YgeW91ciBgR0ZpZWxkc2BcbiAgICovXG4gIHB1YmxpYyBwYXRjaEZvcm1WYWx1ZXMoXG4gICAgZm9ybUZpZWxkczogR0Zvcm1GaWVsZHMgfCBHRm9ybUZpZWxkc1JlYWRPbmx5LFxuICAgIGZvcm1WYWx1ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgcmVzZXRGb3JtPzogYm9vbGVhbixcbiAgICByZXNldEZpZWxkcz86IGJvb2xlYW5cbiAgKTogR0Zvcm1GaWVsZHMge1xuXG4gICAgaWYgKCFyZXNldEZpZWxkcykge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9ybUZpZWxkc1tpXS5jb25maWcudmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcmVzZXRGb3JtKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZm9ybVZhbHVlc1tmb3JtRmllbGRzW2ldLmNvbmZpZy5tb2RlbF0pIHtcbiAgICAgICAgICBmb3JtRmllbGRzW2ldLmNvbmZpZy52YWx1ZSA9IGZvcm1WYWx1ZXNbZm9ybUZpZWxkc1tpXS5jb25maWcubW9kZWxdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1GaWVsZHMgYXMgR0Zvcm1GaWVsZHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWRkcmVzcyhsYW4sIGxuZywgYXBpa2V5KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9sYXRsbmc9JHtsYW59LCR7bG5nfSZyZXN1bHRfdHlwZT1zdHJlZXRfYWRkcmVzcyZrZXk9JHthcGlrZXl9YCk7XG4gIH1cbn1cbiJdfQ==