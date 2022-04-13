import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
let GsFileInputComponent = class GsFileInputComponent extends GsGenericFieldComponent {
    constructor() {
        super(...arguments);
        this.fieldChanged = new EventEmitter();
        this.loading = false;
        this.supportedFilesTranslates = {
            es: 'Archivos soportados',
            en: 'Supported files',
            pt: 'Arquivos suportados'
        };
        this.supportedSizeFilesTranslates = {
            es: `Tamaño limite`,
            en: 'Size limit',
            pt: 'Limite de tamanhos'
        };
        this.errorTranslates = {
            es: 'Ocurrio un error al subir el archivo. Por favor intenta de nuevo.',
            en: 'There was an error uploading the file. Please try again.',
            pt: 'Ocorreu um erro ao fazer o upload do arquivo. Por favor tente novamente.'
        };
    }
    ngOnInit() {
        this.supportedFilesText = this.supportedFilesTranslates[this.formsService.getLang() || 'en'];
        this.supportedSizeFilesText = this.supportedSizeFilesTranslates[this.formsService.getLang() || 'en'];
    }
    ngOnChanges(changes) {
        if (changes.field.currentValue) {
            if (this.field.config.value) {
                this.selectedFile = this.field.config.value;
                this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
                this.formGroup.controls[this.field.config.model].updateValueAndValidity();
            }
            if (this.field.config.returnFile) {
                this.returnFile = true;
            }
            else {
                this.returnFile = false;
            }
            if (this.field.config.size) {
            }
        }
    }
    onFileChange($event) {
        this.loading = true;
        const reader = new FileReader();
        const file = $event.target.files[0];
        const fileName = file.name.split('.').reverse()[1];
        this.field.config.value = file;
        this.size = file.size;
        if (!this.validFileType(file) || !this.validFileSize()) {
            this.loading = false;
        }
        if (file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                this.selectedFile = file;
            };
        }
        else {
            this.selectedFile = file;
        }
        this.fieldChanged.emit({ file, model: this.field.config.model });
        if (this.returnFile) {
            this.formGroup.controls[this.field.config.model].patchValue(file);
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
            this.loading = false;
        }
        else {
            this.processFile(file);
        }
    }
    processFile(file) {
        const reader = new FileReader();
        const url = this.field.config.api.url;
        const method = this.field.config.api.method;
        const paramName = this.field.config.api.fileParamName;
        this.errorText = null;
        reader.addEventListener('load', () => {
            this.formsService.uploadFileServices(url, method, file, paramName)
                .subscribe(response => {
                this.loading = false;
                this.formGroup.controls[this.field.config.model].patchValue(response);
                this.formGroup.controls[this.field.config.model].updateValueAndValidity();
            }, error => {
                this.loading = false;
                console.error('Unable to upload the image. Error:', error);
                this.errorText = this.errorTranslates[this.formsService.getLang() || 'en'];
                this.formGroup.controls[this.field.config.model].patchValue('unableToUploadFile');
                this.formGroup.controls[this.field.config.model].updateValueAndValidity();
                this.formGroup.controls[this.field.config.model].setErrors({ unableToUploadFile: true });
            });
        });
        reader.readAsDataURL(file);
    }
    returnFileSize(size) {
        if (size < 1024) {
            return size + 'bytes';
        }
        else if (size >= 1024 && size < 1048576) {
            return (size / 1024).toFixed(1) + 'KB';
        }
        else if (size >= 1048576) {
            return (size / 1048576).toFixed(1) + 'MB';
        }
    }
    validFileSize() {
        return this.field.config.size < this.size;
    }
    validFileType(file) {
        return this.field.config.accept.replace(/ /g, '').split(',').includes(`.${file.type.split('/')[1]}`);
    }
    resetField() {
        this.selectedFile = null;
    }
};
tslib_1.__decorate([
    Input()
], GsFileInputComponent.prototype, "field", void 0);
tslib_1.__decorate([
    Output()
], GsFileInputComponent.prototype, "fieldChanged", void 0);
GsFileInputComponent = tslib_1.__decorate([
    Component({
        selector: 'gs-file-input',
        template: "<ng-container [formGroup]=\"formGroup\">\n  <div class=\"gs-field\"\n    [class.gs-field-has-error]=\"validateField() || errorText\">\n\n    <label\n      (click)=\"file.click()\"\n      class=\"gs-field-box gs-field-box-icon gs-field-file-box\"\n      [class.gs-form-field-box-full]=\"field.config.label\">\n\n      <span\n        class=\"gs-field-label\"\n        *ngIf=\"field.config.label\">\n        {{ field.config.label | translate }}\n      </span>\n\n      <div class=\"gs-field-input gs-field-file-input\">\n        <ng-container *ngIf=\"selectedFile\">\n          {{ selectedFile.name }}\n        </ng-container>\n\n        <ng-container class=\"inner-margin\" *ngIf=\"!selectedFile\">\n          {{ field.config.placeholder || field.config.label || field.config.model | translate }}\n        </ng-container>\n      </div>\n\n      <svg class=\"gs-field-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z\"/>\n      </svg>\n    </label>\n\n    <span class=\"gs-field-error\" *ngIf=\"validateField()\">\n      {{ getFieldError(field.config.model) | translate }}\n    </span>\n\n    <span class=\"gs-field-error\" *ngIf=\"errorText\">\n      {{ errorText }}\n    </span>\n\n    <span class=\"gs-field-hint\" *ngIf=\"field.config.accept\">\n      {{ supportedFilesText }}: {{ field.config.accept }}\n      <span *ngIf=\"field.config.size\">\n       - {{ supportedSizeFilesText }}: {{ returnFileSize(field.config.size) }}\n      </span>\n    </span>\n\n    <input #file\n      class=\"gs-field-input-hidden\"\n      type=\"file\"\n      [id]=\"field.config.model\"\n      [accept]=\"field.config.accept || null\"\n      (change)=\"onFileChange($event)\" />\n  </div>\n</ng-container>\n",
        styles: ["*{color:var(--gs-color-font,#706967);outline:0;box-sizing:border-box}input,option,select,textarea{border:none;outline:0;display:block;box-shadow:none;box-sizing:border-box}input::-webkit-input-placeholder,option::-webkit-input-placeholder,select::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:.5}input::-moz-placeholder,option::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{opacity:.5}input::-ms-input-placeholder,option::-ms-input-placeholder,select::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:.5}input::placeholder,option::placeholder,select::placeholder,textarea::placeholder{opacity:.5}.disabled{opacity:var(--gs-disabled-opacity,.7);cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#b8b4b4);border-radius:var(--gs-primary-button-border-radius,1rem)}.button:hover{opacity:.8}.button.button-primary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-color,#fff);background:var(--gs-primary-button-background,#ff2426);border:none;border-radius:var(--gs-primary-button-border-radius,1rem)}.button.button-secondary{padding:var(--gs-primary-button-padding,1rem);color:var(--gs-primary-button-background,#ff2426);background:0 0;border:2px solid var(--gs-primary-button-background,#ff2426);border-radius:var(--gs-primary-button-border-radius,1rem)}*,input,select,textarea{font-size:var(--gs-font-size,.9rem);font-family:inherit;background-color:transparent}.gs-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gs-field{position:relative}.gs-field.gs-field-has-error .gs-field-box{border:2px solid #ff2426}.gs-field.gs-field-has-error .gs-field-error{display:block}.gs-field-box{border:2px solid var(--gs-input-border-color,none);display:-ms-grid;display:grid;background-color:var(--gs-input-background,#fff);padding:var(--gs-input-padding,12px);border-radius:var(--gs-input-border-radius,1rem);height:51px}.gs-field-box .gs-field-label{color:#706967;font-size:.6rem;font-weight:600;letter-spacing:.1em;line-height:1;text-transform:uppercase;-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;color:var(--gs-input-color,#332927);opacity:.5}.gs-field-box .gs-field-input{outline:0;border:none;width:100%;margin:0;font-weight:600;font-size:1rem;line-height:1;padding:0;-ms-grid-column:1;grid-column:1;-ms-grid-row:2;grid-row:2}.gs-field-box .gs-field-input :focus,.gs-field-box .gs-field-input:focus{outline:0}.gs-field-box .gs-field-input::-webkit-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-moz-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::-ms-input-placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-field-input::placeholder{color:var(--gs-input-color,#332927);opacity:.7;font-weight:400}.gs-field-box .gs-form-field_symbol{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center;text-align:right}.gs-field-box.gs-field-box-full .gs-field-input{padding:.1rem 0 0}.gs-field-box.gs-input-check-box,.gs-field-box.gs-input-switch-box{-ms-grid-columns:1fr auto;grid-template-columns:1fr auto}.gs-field-box.gs-input-check-box .gs-field-label,.gs-field-box.gs-input-switch-box .gs-field-label{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-input-check-box .gs-input-check,.gs-field-box.gs-input-check-box .gs-input-switch,.gs-field-box.gs-input-switch-box .gs-input-check,.gs-field-box.gs-input-switch-box .gs-input-switch{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1;-ms-grid-row-align:center;align-self:center}.gs-field-box.gs-field-box-icon{display:-ms-grid;display:grid;-ms-grid-columns:1fr 20px;grid-template-columns:1fr 20px}.gs-field-box.gs-field-box-icon .gs-field-icon{cursor:pointer;width:20px;fill:#706967;-ms-grid-column:2;grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1/3;-ms-grid-row-align:center;align-self:center}.gs-field-error,.gs-field-hint{font-size:.8rem;padding:.6rem 1rem;display:inline-block;margin-right:1rem}.gs-field-error{display:none;color:#ff2426}.gs-field-file-box{-ms-grid-columns:1fr 10px!important;grid-template-columns:1fr 10px!important}.gs-field-icon{width:10px!important}.gs-field-input-hidden{display:none}"]
    })
], GsFileInputComponent);
export { GsFileInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZmllbGRzL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBUXJGLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQXFCLFNBQVEsdUJBQXVCO0lBTGpFOztRQU9vQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFrQyxDQUFDO1FBSTdFLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHZiw2QkFBd0IsR0FBRztZQUNqQyxFQUFFLEVBQUUscUJBQXFCO1lBQ3pCLEVBQUUsRUFBRSxpQkFBaUI7WUFDckIsRUFBRSxFQUFFLHFCQUFxQjtTQUMxQixDQUFDO1FBQ00saUNBQTRCLEdBQUc7WUFDckMsRUFBRSxFQUFFLGVBQWU7WUFDbkIsRUFBRSxFQUFFLFlBQVk7WUFDaEIsRUFBRSxFQUFFLG9CQUFvQjtTQUN6QixDQUFDO1FBSU0sb0JBQWUsR0FBRztZQUN4QixFQUFFLEVBQUUsbUVBQW1FO1lBQ3ZFLEVBQUUsRUFBRSwwREFBMEQ7WUFDOUQsRUFBRSxFQUFFLDBFQUEwRTtTQUMvRSxDQUFDO0lBK0dKLENBQUM7SUE1R0MsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxD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QUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFFTyxhQUFhLENBQUMsSUFBVTtRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVNLFVBQVU7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0NBRUYsQ0FBQTtBQXhJVTtJQUFSLEtBQUssRUFBRTttREFBMEI7QUFDeEI7SUFBVCxNQUFNLEVBQUU7MERBQTJFO0FBRnpFLG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixpeERBQTBDOztLQUUzQyxDQUFDO0dBQ1csb0JBQW9CLENBeUloQztTQXpJWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdzR2VuZXJpY0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vX2dlbmVyaWMtZmllbGQvX2dlbmVyaWMtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEdGaWVsZEZpbGUgfSBmcm9tICcuLi8uLi9ncy1mb3Jtcy53aWRnZXRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3MtZmlsZS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1pbnB1dC5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdzRmlsZUlucHV0Q29tcG9uZW50IGV4dGVuZHMgR3NHZW5lcmljRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHB1YmxpYyBmaWVsZDogR0ZpZWxkRmlsZTtcbiAgQE91dHB1dCgpIHByaXZhdGUgZmllbGRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGZpbGU6IEZpbGU7IG1vZGVsOiBzdHJpbmc7IH0+KCk7XG5cbiAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgcHVibGljIHNlbGVjdGVkRmlsZTogRmlsZTtcbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXR1cm5GaWxlOiBib29sZWFuO1xuXG4gIHByaXZhdGUgc3VwcG9ydGVkRmlsZXNUcmFuc2xhdGVzID0ge1xuICAgIGVzOiAnQXJjaGl2b3Mgc29wb3J0YWRvcycsXG4gICAgZW46ICdTdXBwb3J0ZWQgZmlsZXMnLFxuICAgIHB0OiAnQXJxdWl2b3Mgc3Vwb3J0YWRvcydcbiAgfTtcbiAgcHJpdmF0ZSBzdXBwb3J0ZWRTaXplRmlsZXNUcmFuc2xhdGVzID0ge1xuICAgIGVzOiBgVGFtYcOxbyBsaW1pdGVgLFxuICAgIGVuOiAnU2l6ZSBsaW1pdCcsXG4gICAgcHQ6ICdMaW1pdGUgZGUgdGFtYW5ob3MnXG4gIH07XG4gIHB1YmxpYyBzdXBwb3J0ZWRGaWxlc1RleHQ6IHN0cmluZztcbiAgcHVibGljIHN1cHBvcnRlZFNpemVGaWxlc1RleHQ6IHN0cmluZztcblxuICBwcml2YXRlIGVycm9yVHJhbnNsYXRlcyA9IHtcbiAgICBlczogJ09jdXJyaW8gdW4gZXJyb3IgYWwgc3ViaXIgZWwgYXJjaGl2by4gUG9yIGZhdm9yIGludGVudGEgZGUgbnVldm8uJyxcbiAgICBlbjogJ1RoZXJlIHdhcyBhbiBlcnJvciB1cGxvYWRpbmcgdGhlIGZpbGUuIFBsZWFzZSB0cnkgYWdhaW4uJyxcbiAgICBwdDogJ09jb3JyZXUgdW0gZXJybyBhbyBmYXplciBvIHVwbG9hZCBkbyBhcnF1aXZvLiBQb3IgZmF2b3IgdGVudGUgbm92YW1lbnRlLidcbiAgfTtcbiAgcHVibGljIGVycm9yVGV4dDogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3VwcG9ydGVkRmlsZXNUZXh0ID0gdGhpcy5zdXBwb3J0ZWRGaWxlc1RyYW5zbGF0ZXNbdGhpcy5mb3Jtc1NlcnZpY2UuZ2V0TGFuZygpIHx8ICdlbiddO1xuICAgIHRoaXMuc3VwcG9ydGVkU2l6ZUZpbGVzVGV4dCA9IHRoaXMuc3VwcG9ydGVkU2l6ZUZpbGVzVHJhbnNsYXRlc1t0aGlzLmZvcm1zU2VydmljZS5nZXRMYW5nKCkgfHwgJ2VuJ107XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuZmllbGQuY3VycmVudFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5maWVsZC5jb25maWcudmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSB0aGlzLmZpZWxkLmNvbmZpZy52YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnBhdGNoVmFsdWUodGhpcy5maWVsZC5jb25maWcudmFsdWUpO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5maWVsZC5jb25maWcucmV0dXJuRmlsZSkge1xuICAgICAgICB0aGlzLnJldHVybkZpbGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZXR1cm5GaWxlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZpZWxkLmNvbmZpZy5zaXplKSB7XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25GaWxlQ2hhbmdlKCRldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgY29uc3QgZmlsZTogRmlsZSA9ICRldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlLm5hbWUuc3BsaXQoJy4nKS5yZXZlcnNlKClbMV07XG4gICAgdGhpcy5maWVsZC5jb25maWcudmFsdWUgPSBmaWxlO1xuXG4gICAgdGhpcy5zaXplID0gZmlsZS5zaXplO1xuXG4gICAgaWYgKCF0aGlzLnZhbGlkRmlsZVR5cGUoZmlsZSkgfHwgIXRoaXMudmFsaWRGaWxlU2l6ZSgpKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZmlsZS5uYW1lLm1hdGNoKC8uKGpwZ3xqcGVnfHBuZ3xnaWYpJC9pKSkge1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlO1xuICAgIH1cblxuICAgIHRoaXMuZmllbGRDaGFuZ2VkLmVtaXQoe2ZpbGUsIG1vZGVsOiB0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbH0pO1xuXG4gICAgaWYgKHRoaXMucmV0dXJuRmlsZSkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnBhdGNoVmFsdWUoZmlsZSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvY2Vzc0ZpbGUoZmlsZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzRmlsZShmaWxlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZmllbGQuY29uZmlnLmFwaS51cmw7XG4gICAgY29uc3QgbWV0aG9kID0gdGhpcy5maWVsZC5jb25maWcuYXBpLm1ldGhvZDtcbiAgICBjb25zdCBwYXJhbU5hbWUgPSB0aGlzLmZpZWxkLmNvbmZpZy5hcGkuZmlsZVBhcmFtTmFtZTtcbiAgICB0aGlzLmVycm9yVGV4dCA9IG51bGw7XG5cbiAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuZm9ybXNTZXJ2aWNlLnVwbG9hZEZpbGVTZXJ2aWNlcyh1cmwsIG1ldGhvZCwgZmlsZSwgcGFyYW1OYW1lKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnBhdGNoVmFsdWUocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byB1cGxvYWQgdGhlIGltYWdlLiBFcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLmVycm9yVGV4dCA9IHRoaXMuZXJyb3JUcmFuc2xhdGVzW3RoaXMuZm9ybXNTZXJ2aWNlLmdldExhbmcoKSB8fCAnZW4nXTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZmllbGQuY29uZmlnLm1vZGVsXS5wYXRjaFZhbHVlKCd1bmFibGVUb1VwbG9hZEZpbGUnKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZmllbGQuY29uZmlnLm1vZGVsXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0uc2V0RXJyb3JzKHsgdW5hYmxlVG9VcGxvYWRGaWxlOiB0cnVlIH0pO1xuICAgICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gIH1cblxuICBwdWJsaWMgcmV0dXJuRmlsZVNpemUoc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAoc2l6ZSA8IDEwMjQpIHtcbiAgICAgIHJldHVybiBzaXplICsgJ2J5dGVzJztcbiAgICB9IGVsc2UgaWYgKHNpemUgPj0gMTAyNCAmJiBzaXplIDwgMTA0ODU3Nikge1xuICAgICAgcmV0dXJuIChzaXplIC8gMTAyNCkudG9GaXhlZCgxKSArICdLQic7XG4gICAgfSBlbHNlIGlmIChzaXplID49IDEwNDg1NzYpIHtcbiAgICAgIHJldHVybiAoc2l6ZSAvIDEwNDg1NzYpLnRvRml4ZWQoMSkgKyAnTUInO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB2YWxpZEZpbGVTaXplKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZpZWxkLmNvbmZpZy5zaXplIDwgdGhpcy5zaXplO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZEZpbGVUeXBlKGZpbGU6IEZpbGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZC5jb25maWcuYWNjZXB0LnJlcGxhY2UoLyAvZywgJycpLnNwbGl0KCcsJykuaW5jbHVkZXMoYC4ke2ZpbGUudHlwZS5zcGxpdCgnLycpWzFdfWApO1xuICB9XG5cbiAgcHVibGljIHJlc2V0RmllbGQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xuICB9XG5cbn1cbiJdfQ==