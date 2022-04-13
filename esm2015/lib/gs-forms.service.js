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
let GsFormsService = class GsFormsService {
    constructor(formBuilder, translateService, http) {
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.http = http;
    }
    buildErrors(validator, value) {
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
    }
    setDefaultFormObject(field, formObject, hasValidators) {
        formObject[field.config.model] = [];
        formObject[field.config.model].push({
            value: field.config.value,
            disabled: false
        });
        const validators = [];
        const fields = field.config.validators;
        for (const validator in fields) {
            if (Object.prototype.hasOwnProperty.call(fields, validator) && fields[validator]) {
                validators.push(this.buildErrors(validator, fields[validator]));
            }
        }
        if (hasValidators) {
            formObject[field.config.model].push(Validators.compose(validators));
        }
        return formObject;
    }
    buildForm(formField) {
        const formObject = new Object();
        for (const field of formField) {
            if (field.config.model && !field.notWidget) {
                this.setDefaultFormObject(field, formObject, field.config.validators ? true : false);
            }
        }
        return this.formBuilder.group(formObject);
    }
    fieldError(field) {
        const error = field.errors;
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
    }
    getValidationMessage(key, param) {
        let lang = this.translateService.currentLang;
        if (!lang) {
            console.warn(`translateService.currentLang is not set, using default language: 'en'`);
            lang = 'en';
        }
        let messageLang = VALIDATION_MESSAGES.en;
        if (!VALIDATION_MESSAGES[lang]) {
            console.warn(`We don't have support for language ${lang}. Please email us to hi@tavoohoh.com. Using default language: 'en'`);
        }
        else {
            messageLang = VALIDATION_MESSAGES[lang];
        }
        let message = messageLang[key];
        if (param) {
            message = message.replace('${param}', param);
        }
        return message;
    }
    getMessage(key, param) {
        const messageLang = !this.translateService.currentLang ? MESSAGES.en : MESSAGES[this.translateService.currentLang];
        let message = messageLang[key];
        if (param) {
            message = message.replace('${param}', param);
        }
        return message;
    }
    getLang() {
        return this.translateService.getDefaultLang();
    }
    uploadFileServices(url, method, file, paramName) {
        const formData = new FormData();
        formData.append(paramName, file);
        return this.http[method](url, formData);
    }
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
    mapFieldOptionValues(options, optionValue, optionText) {
        const mappedValues = options.map(obj => {
            return {
                value: obj[optionValue],
                text: obj[optionText]
            };
        });
        return mappedValues;
    }
    /**
     * @description
     * Patch form values
     *
     * @param formFields your `GFormFields`
     * @param formValues an object of values like `FormGroup` value.
     * The keys of `formValues` most match the model name of your `GFields`
     */
    patchFormValues(formFields, formValues, resetForm, resetFields) {
        if (!resetFields) {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < formFields.length; i++) {
                formFields[i].config.value = null;
            }
        }
        if (!resetForm) {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < formFields.length; i++) {
                if (formValues[formFields[i].config.model]) {
                    formFields[i].config.value = formValues[formFields[i].config.model];
                }
            }
        }
        return formFields;
    }
    getAddress(lan, lng, apikey) {
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lan},${lng}&result_type=street_address&key=${apikey}`);
    }
};
GsFormsService.ctorParameters = () => [
    { type: FormBuilder },
    { type: TranslateService },
    { type: HttpClient }
];
GsFormsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GsFormsService_Factory() { return new GsFormsService(i0.ɵɵinject(i1.FormBuilder), i0.ɵɵinject(i2.TranslateService), i0.ɵɵinject(i3.HttpClient)); }, token: GsFormsService, providedIn: "root" });
GsFormsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GsFormsService);
export { GsFormsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtZm9ybXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncy9uZy1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9ncy1mb3Jtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBTXJFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFFekIsWUFDVSxXQUF3QixFQUN4QixnQkFBa0MsRUFDbEMsSUFBZ0I7UUFGaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3RCLENBQUM7SUFFRSxXQUFXLENBQUMsU0FBaUIsRUFBRSxLQUFVO1FBQzlDLFFBQVEsU0FBUyxFQUFFO1lBQ2pCLEtBQUssbUJBQW1CLENBQUMsR0FBRztnQkFDMUIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9CLEtBQUssbUJBQW1CLENBQUMsR0FBRztnQkFDMUIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9CLEtBQUssbUJBQW1CLENBQUMsUUFBUTtnQkFDL0IsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBRTdCLEtBQUssbUJBQW1CLENBQUMsS0FBSztnQkFDNUIs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QU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNERBQTRELEdBQUcsSUFBSSxHQUFHLG1DQUFtQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzFJLENBQUM7Q0FDRixDQUFBOztZQTFNd0IsV0FBVztZQUNOLGdCQUFnQjtZQUM1QixVQUFVOzs7QUFMZixjQUFjO0lBSDFCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxjQUFjLENBNk0xQjtTQTdNWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEdGb3JtRmllbGRzLCBHRmllbGQsIEdGaWVsZE9wdGlvblZhbHVlcywgR0Zvcm1GaWVsZHNSZWFkT25seSB9IGZyb20gJy4vZ3MtZm9ybXMubW9kZWxzJztcbmltcG9ydCB7IEdGaWVsZFZhbGlkYXRvclR5cGUgfSBmcm9tICcuL2dzLWZvcm1zLmVudW1zJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFZBTElEQVRJT05fTUVTU0FHRVMsIE1FU1NBR0VTIH0gZnJvbSAnLi9ncy1mb3Jtcy5jb25zdGFudHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdzRm9ybXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG4gICkgeyB9XG5cbiAgcHVibGljIGJ1aWxkRXJyb3JzKHZhbGlkYXRvcjogc3RyaW5nLCB2YWx1ZTogYW55KTogVmFsaWRhdG9ycyB7XG4gICAgc3dpdGNoICh2YWxpZGF0b3IpIHtcbiAgICAgIGNhc2UgR0ZpZWxkVmFsaWRhdG9yVHlwZS5NSU46XG4gICAgICAgIHJldHVybiBWYWxpZGF0b3JzLm1pbih2YWx1ZSk7XG5cbiAgICAgIGNhc2UgR0ZpZWxkVmFsaWRhdG9yVHlwZS5NQVg6XG4gICAgICAgIHJldHVybiBWYWxpZGF0b3JzLm1heCh2YWx1ZSk7XG5cbiAgICAgIGNhc2UgR0ZpZWxkVmFsaWRhdG9yVHlwZS5SRVFVSVJFRDpcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMucmVxdWlyZWQ7XG5cbiAgICAgIGNhc2UgR0ZpZWxkVmFsaWRhdG9yVHlwZS5FTUFJTDpcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMuZW1haWw7XG5cbiAgICAgIGNhc2UgR0ZpZWxkVmFsaWRhdG9yVHlwZS5NSU5fTEVOR1RIOlxuICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5taW5MZW5ndGgodmFsdWUpO1xuXG4gICAgICBjYXNlIEdGaWVsZFZhbGlkYXRvclR5cGUuTUFYX0xFTkdUSDpcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMubWF4TGVuZ3RoKHZhbHVlKTtcblxuICAgICAgY2FzZSBHRmllbGRWYWxpZGF0b3JUeXBlLlBBVFRFUk46XG4gICAgICAgIHJldHVybiBWYWxpZGF0b3JzLnBhdHRlcm4odmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RGVmYXVsdEZvcm1PYmplY3QoZmllbGQ6IEdGaWVsZCwgZm9ybU9iamVjdDogb2JqZWN0LCBoYXNWYWxpZGF0b3JzOiBib29sZWFuKTogb2JqZWN0IHtcbiAgICBmb3JtT2JqZWN0W2ZpZWxkLmNvbmZpZy5tb2RlbF0gPSBbXTtcbiAgICBmb3JtT2JqZWN0W2ZpZWxkLmNvbmZpZy5tb2RlbF0ucHVzaCh7XG4gICAgICB2YWx1ZTogZmllbGQuY29uZmlnLnZhbHVlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBjb25zdCB2YWxpZGF0b3JzID0gW107XG4gICAgY29uc3QgZmllbGRzID0gZmllbGQuY29uZmlnLnZhbGlkYXRvcnM7XG5cbiAgICBmb3IgKGNvbnN0IHZhbGlkYXRvciBpbiBmaWVsZHMpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZmllbGRzLCB2YWxpZGF0b3IpICYmIGZpZWxkc1t2YWxpZGF0b3JdKSB7XG4gICAgICAgIHZhbGlkYXRvcnMucHVzaCh0aGlzLmJ1aWxkRXJyb3JzKHZhbGlkYXRvciwgZmllbGRzW3ZhbGlkYXRvcl0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRhdG9ycykge1xuICAgICAgZm9ybU9iamVjdFtmaWVsZC5jb25maWcubW9kZWxdLnB1c2goVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1PYmplY3Q7XG4gIH1cblxuICBwdWJsaWMgYnVpbGRGb3JtKGZvcm1GaWVsZDogR0Zvcm1GaWVsZHMpOiBGb3JtR3JvdXAge1xuICAgIGNvbnN0IGZvcm1PYmplY3QgPSBuZXcgT2JqZWN0KCk7XG5cbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm1GaWVsZCkge1xuICAgICAgaWYgKGZpZWxkLmNvbmZpZy5tb2RlbCAmJiAhZmllbGQubm90V2lkZ2V0KSB7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdEZvcm1PYmplY3QoZmllbGQsIGZvcm1PYmplY3QsIGZpZWxkLmNvbmZpZy52YWxpZGF0b3JzID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5mb3JtQnVpbGRlci5ncm91cChmb3JtT2JqZWN0KTtcbiAgfVxuXG4gIHB1YmxpYyBmaWVsZEVycm9yKGZpZWxkOiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVycm9yID0gZmllbGQuZXJyb3JzO1xuXG4gICAgaWYgKGVycm9yW0dGaWVsZFZhbGlkYXRvclR5cGUuTUlOXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoJ0VSUl9NSU4nLCBlcnJvcltHRmllbGRWYWxpZGF0b3JUeXBlLk1JTl0ubWluKTtcblxuICAgIH0gZWxzZSBpZiAoZXJyb3JbR0ZpZWxkVmFsaWRhdG9yVHlwZS5NQVhdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZSgnRVJSX01BWCcsIGVycm9yW0dGaWVsZFZhbGlkYXRvclR5cGUuTUFYXS5tYXgpO1xuXG4gICAgfSBlbHNlIGlmIChlcnJvcltHRmllbGRWYWxpZGF0b3JUeXBlLlJFUVVJUkVEXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoJ0VSUl9SRVFVSVJFRCcpO1xuXG4gICAgfSBlbHNlIGlmIChlcnJvcltHRmllbGRWYWxpZGF0b3JUeXBlLkVNQUlMXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoJ0VSUl9FTUFJTCcpO1xuXG4gICAgfSBlbHNlIGlmIChlcnJvcltHRmllbGRWYWxpZGF0b3JUeXBlLk1JTl9MRU5HVEhdKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZSgnRVJSX01JTl9MRU5HVEgnLCBlcnJvcltHRmllbGRWYWxpZGF0b3JUeXBlLk1JTl9MRU5HVEhdLnJlcXVpcmVkTGVuZ3RoKTtcblxuICAgIH0gZWxzZSBpZiAoZXJyb3JbR0ZpZWxkVmFsaWRhdG9yVHlwZS5NQVhfTEVOR1RIXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoJ0VSUl9NQVhfTEVOR1RIJywgZXJyb3JbR0ZpZWxkVmFsaWRhdG9yVHlwZS5NQVhfTEVOR1RIXS5yZXF1aXJlZExlbmd0aCk7XG5cbiAgICB9IGVsc2UgaWYgKGVycm9yW0dGaWVsZFZhbGlkYXRvclR5cGUuUEFUVEVSTl0pIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFZhbGlkYXRpb25NZXNzYWdlKCdFUlJfUEFUVEVSTicpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFZhbGlkYXRpb25NZXNzYWdlKCdERUZBVUxUJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFZhbGlkYXRpb25NZXNzYWdlKGtleTogc3RyaW5nLCBwYXJhbT86IHN0cmluZykge1xuICAgIGxldCBsYW5nID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nO1xuXG4gICAgaWYgKCFsYW5nKSB7XG4gICAgICBjb25zb2xlLndhcm4oYHRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcgaXMgbm90IHNldCwgdXNpbmcgZGVmYXVsdCBsYW5ndWFnZTogJ2VuJ2ApO1xuICAgICAgbGFuZyA9ICdlbic7XG4gICAgfVxuXG4gICAgbGV0IG1lc3NhZ2VMYW5nID0gVkFMSURBVElPTl9NRVNTQUdFUy5lbjtcblxuICAgIGlmICghVkFMSURBVElPTl9NRVNTQUdFU1tsYW5nXSkge1xuICAgICAgY29uc29sZS53YXJuKGBXZSBkb24ndCBoYXZlIHN1cHBvcnQgZm9yIGxhbmd1YWdlICR7bGFuZ30uIFBsZWFzZSBlbWFpbCB1cyB0byBoaUB0YXZvb2hvaC5jb20uIFVzaW5nIGRlZmF1bHQgbGFuZ3VhZ2U6ICdlbidgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZUxhbmcgPSBWQUxJREFUSU9OX01FU1NBR0VTW2xhbmddO1xuICAgIH1cblxuICAgIGxldCBtZXNzYWdlID0gbWVzc2FnZUxhbmdba2V5XTtcblxuICAgIGlmIChwYXJhbSkge1xuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnJHtwYXJhbX0nLCBwYXJhbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWVzc2FnZShrZXk6IHN0cmluZywgcGFyYW0/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBtZXNzYWdlTGFuZyA9ICF0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcgPyBNRVNTQUdFUy5lbiA6IE1FU1NBR0VTW3RoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZ107XG4gICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlTGFuZ1trZXldO1xuICAgIGlmIChwYXJhbSkge1xuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgnJHtwYXJhbX0nLCBwYXJhbSk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgcHVibGljIGdldExhbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldERlZmF1bHRMYW5nKCk7XG4gIH1cblxuICBwdWJsaWMgdXBsb2FkRmlsZVNlcnZpY2VzKHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgZmlsZTogRmlsZSwgcGFyYW1OYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQocGFyYW1OYW1lLCBmaWxlKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBbbWV0aG9kXSh1cmwsIGZvcm1EYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQ29udmVydCBhbiBhcnJheSBvZiB2YWx1ZXMgYEFycmF5PHtba2V5OiBzdHJpbmddOiBhbnl9PiB8IEFycmF5PHtba2V5OiBzdHJpbmddOiBhbnksIFtrZXk6IHN0cmluZ106IGFueX0+YFxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBBbiBhcnJheSBvZiB2YWx1ZXNcbiAgICogQHBhcmFtIG9wdGlvblZhbHVlXG4gICAqIFRoZSBrZXkgdG8gYmUgbWFwcGVkIHRvIGBHRmllbGRPcHRpb25WYWx1ZXNgIGtleSBgdmFsdWVgXG4gICAqIEBwYXJhbSBvcHRpb25UZXh0XG4gICAqIFRoZSBrZXkgdG8gYmUgbWFwcGVkIHRvIGBHRmllbGRPcHRpb25WYWx1ZXNgIGtleSBgdGV4dGBcbiAgICpcbiAgICogQGtleSB2YWx1ZVxuICAgKiBUaGUgdmFsdWUgdXNlZCBpbiBhIHNlbGVjdCBvcHRpb25cbiAgICogQGtleSB0ZXh0XG4gICAqIFRoZSB0ZXh0IHVzZWQgaW5zaWRlIG9mIHNlbGVjdCBvcHRpb25cbiAgICovXG4gIHB1YmxpYyBtYXBGaWVsZE9wdGlvblZhbHVlcyhvcHRpb25zOiBBcnJheTx7fT4sIG9wdGlvblZhbHVlOiBzdHJpbmcsIG9wdGlvblRleHQ6IHN0cmluZywgKTogR0ZpZWxkT3B0aW9uVmFsdWVzIHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZXMgPSBvcHRpb25zLm1hcChvYmogPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IG9ialtvcHRpb25WYWx1ZV0sXG4gICAgICAgIHRleHQ6IG9ialtvcHRpb25UZXh0XVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBwZWRWYWx1ZXM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFBhdGNoIGZvcm0gdmFsdWVzXG4gICAqXG4gICAqIEBwYXJhbSBmb3JtRmllbGRzIHlvdXIgYEdGb3JtRmllbGRzYFxuICAgKiBAcGFyYW0gZm9ybVZhbHVlcyBhbiBvYmplY3Qgb2YgdmFsdWVzIGxpa2UgYEZvcm1Hcm91cGAgdmFsdWUuXG4gICAqIFRoZSBrZXlzIG9mIGBmb3JtVmFsdWVzYCBtb3N0IG1hdGNoIHRoZSBtb2RlbCBuYW1lIG9mIHlvdXIgYEdGaWVsZHNgXG4gICAqL1xuICBwdWJsaWMgcGF0Y2hGb3JtVmFsdWVzKFxuICAgIGZvcm1GaWVsZHM6IEdGb3JtRmllbGRzIHwgR0Zvcm1GaWVsZHNSZWFkT25seSxcbiAgICBmb3JtVmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgIHJlc2V0Rm9ybT86IGJvb2xlYW4sXG4gICAgcmVzZXRGaWVsZHM/OiBib29sZWFuXG4gICk6IEdGb3JtRmllbGRzIHtcblxuICAgIGlmICghcmVzZXRGaWVsZHMpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWZvci1vZlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1GaWVsZHNbaV0uY29uZmlnLnZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlc2V0Rm9ybSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGZvcm1WYWx1ZXNbZm9ybUZpZWxkc1tpXS5jb25maWcubW9kZWxdKSB7XG4gICAgICAgICAgZm9ybUZpZWxkc1tpXS5jb25maWcudmFsdWUgPSBmb3JtVmFsdWVzW2Zvcm1GaWVsZHNbaV0uY29uZmlnLm1vZGVsXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtRmllbGRzIGFzIEdGb3JtRmllbGRzO1xuICB9XG5cbiAgcHVibGljIGdldEFkZHJlc3MobGFuLCBsbmcsIGFwaWtleSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/bGF0bG5nPSR7bGFufSwke2xuZ30mcmVzdWx0X3R5cGU9c3RyZWV0X2FkZHJlc3Mma2V5PSR7YXBpa2V5fWApO1xuICB9XG59XG4iXX0=