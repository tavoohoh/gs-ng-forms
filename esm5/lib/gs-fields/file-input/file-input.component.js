import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
var GsFileInputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GsFileInputComponent, _super);
    function GsFileInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fieldChanged = new EventEmitter();
        _this.loading = false;
        _this.supportedFilesTranslates = {
            es: 'Archivos soportados',
            en: 'Supported files',
            pt: 'Arquivos suportados'
        };
        _this.supportedSizeFilesTranslates = {
            es: "Tama\u00F1o limite",
            en: 'Size limit',
            pt: 'Limite de tamanhos'
        };
        _this.errorTranslates = {
            es: 'Ocurrio un error al subir el archivo. Por favor intenta de nuevo.',
            en: 'There was an error uploading the file. Please try again.',
            pt: 'Ocorreu um erro ao fazer o upload do arquivo. Por favor tente novamente.'
        };
        return _this;
    }
    GsFileInputComponent.prototype.ngOnInit = function () {
        this.supportedFilesText = this.supportedFilesTranslates[this.formsService.getLang() || 'en'];
        this.supportedSizeFilesText = this.supportedSizeFilesTranslates[this.formsService.getLang() || 'en'];
    };
    GsFileInputComponent.prototype.ngOnChanges = function (changes) {
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
    };
    GsFileInputComponent.prototype.onFileChange = function ($event) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var file = $event.target.files[0];
        var fileName = file.name.split('.').reverse()[1];
        this.field.config.value = file;
        this.size = file.size;
        if (!this.validFileType(file) || !this.validFileSize()) {
            this.loading = false;
        }
        if (file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                _this.selectedFile = file;
            };
        }
        else {
            this.selectedFile = file;
        }
        this.fieldChanged.emit({ file: file, model: this.field.config.model });
        if (this.returnFile) {
            this.formGroup.controls[this.field.config.model].patchValue(file);
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
            this.loading = false;
        }
        else {
            this.processFile(file);
        }
    };
    GsFileInputComponent.prototype.processFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        var url = this.field.config.api.url;
        var method = this.field.config.api.method;
        var paramName = this.field.config.api.fileParamName;
        this.errorText = null;
        reader.addEventListener('load', function () {
            _this.formsService.uploadFileServices(url, method, file, paramName)
                .subscribe(function (response) {
                _this.loading = false;
                _this.formGroup.controls[_this.field.config.model].patchValue(response);
                _this.formGroup.controls[_this.field.config.model].updateValueAndValidity();
            }, function (error) {
                _this.loading = false;
                console.error('Unable to upload the image. Error:', error);
                _this.errorText = _this.errorTranslates[_this.formsService.getLang() || 'en'];
                _this.formGroup.controls[_this.field.config.model].patchValue('unableToUploadFile');
                _this.formGroup.controls[_this.field.config.model].updateValueAndValidity();
                _this.formGroup.controls[_this.field.config.model].setErrors({ unableToUploadFile: true });
            });
        });
        reader.readAsDataURL(file);
    };
    GsFileInputComponent.prototype.returnFileSize = function (size) {
        if (size < 1024) {
            return size + 'bytes';
        }
        else if (size >= 1024 && size < 1048576) {
            return (size / 1024).toFixed(1) + 'KB';
        }
        else if (size >= 1048576) {
            return (size / 1048576).toFixed(1) + 'MB';
        }
    };
    GsFileInputComponent.prototype.validFileSize = function () {
        return this.field.config.size < this.size;
    };
    GsFileInputComponent.prototype.validFileType = function (file) {
        return this.field.config.accept.replace(/ /g, '').split(',').includes("." + file.type.split('/')[1]);
    };
    GsFileInputComponent.prototype.resetField = function () {
        this.selectedFile = null;
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
    return GsFileInputComponent;
}(GsGenericFieldComponent));
export { GsFileInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZmllbGRzL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBUXJGO0lBQTBDLGdEQUF1QjtJQUxqRTtRQUFBLHFFQThJQztRQXZJbUIsa0JBQVksR0FBRyxJQUFJLFlBQVksRUFBa0MsQ0FBQztRQUk3RSxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBR2YsOEJBQXdCLEdBQUc7WUFDakMsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixFQUFFLEVBQUUsaUJBQWlCO1lBQ3JCLEVBQUUsRUFBRSxxQkFBcUI7U0FDMUIsQ0FBQztRQUNNLGtDQUE0QixHQUFHO1lBQ3JDLEVBQUUsRUFBRSxvQkFBZTtZQUNuQixFQUFFLEVBQUUsWUFBWTtZQUNoQixFQUFFLEVBQUUsb0JBQW9CO1NBQ3pCLENBQUM7UUFJTSxxQkFBZSxHQUFHO1lBQ3hCLEVBQUUsRUFBRSxtRUFBbUU7WUFDdkUsRUFBRSxFQUFFLDBEQUEwRDtZQUM5RCxFQUFFLEVBQUUsMEVBQTBFO1NBQy9FLENBQUM7O0lBK0dKLENBQUM7SUE1R0MsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQzNFO1lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7YUFFM0I7U0FDRjtJQUNILENBQUM7SUFFTSwyQ0FBWSxHQUFuQixVQUFvQixNQUFXO1FBQS9CLGlCQWdDQztRQS9CQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLElBQU0sSUFBSSxHQUFTLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBQzVDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFDLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQzNCLENBQUMsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxNQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFFL0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzFFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVPLDBDQUFXLEdBQW5CLFVBQW9CLElBQVM7UUFBN0IsaUJBeUJDO1FBeEJDLElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDaEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUM5QixLQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQztpQkFDL0QsU0FBUyxDQUNSLFVBQUEsUUFBUTtnQkFDTixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzVFLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ04sS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDO2dCQUMzRSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDbEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDMUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMzRixDQUFDLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sNkNBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7WUFDZixPQUFPLElBQUksR0FBRyxPQUFPLENBQUM7U0FDdkI7YUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLE9BQU8sRUFBRTtZQUN6QyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDeEM7YUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDMUIsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVNLDRDQUFhLEdBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBRU8sNENBQWEsR0FBckIsVUFBc0IsSUFBVTtRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFFTSx5Q0FBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUF0SVE7UUFBUixLQUFLLEVBQUU7dURBQTBCO0lBQ3hCO1FBQVQsTUFBTSxFQUFFOzhEQUEyRTtJQUZ6RSxvQkFBb0I7UUFMaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsaXhEQUEwQzs7U0FFM0MsQ0FBQztPQUNXLG9CQUFvQixDQXlJaEM7SUFBRCwyQkFBQztDQUFBLEFBeklELENBQTBDLHVCQUF1QixHQXlJaEU7U0F6SVksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHc0dlbmVyaWNGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL19nZW5lcmljLWZpZWxkL19nZW5lcmljLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHRmllbGRGaWxlIH0gZnJvbSAnLi4vLi4vZ3MtZm9ybXMud2lkZ2V0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dzLWZpbGUtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtaW5wdXQuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHc0ZpbGVJbnB1dENvbXBvbmVudCBleHRlbmRzIEdzR2VuZXJpY0ZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBwdWJsaWMgZmllbGQ6IEdGaWVsZEZpbGU7XG4gIEBPdXRwdXQoKSBwcml2YXRlIGZpZWxkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBmaWxlOiBGaWxlOyBtb2RlbDogc3RyaW5nOyB9PigpO1xuXG4gIHB1YmxpYyBzaXplOiBudW1iZXI7XG4gIHB1YmxpYyBzZWxlY3RlZEZpbGU6IEZpbGU7XG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgcmV0dXJuRmlsZTogYm9vbGVhbjtcblxuICBwcml2YXRlIHN1cHBvcnRlZEZpbGVzVHJhbnNsYXRlcyA9IHtcbiAgICBlczogJ0FyY2hpdm9zIHNvcG9ydGFkb3MnLFxuICAgIGVuOiAnU3VwcG9ydGVkIGZpbGVzJyxcbiAgICBwdDogJ0FycXVpdm9zIHN1cG9ydGFkb3MnXG4gIH07XG4gIHByaXZhdGUgc3VwcG9ydGVkU2l6ZUZpbGVzVHJhbnNsYXRlcyA9IHtcbiAgICBlczogYFRhbWHDsW8gbGltaXRlYCxcbiAgICBlbjogJ1NpemUgbGltaXQnLFxuICAgIHB0OiAnTGltaXRlIGRlIHRhbWFuaG9zJ1xuICB9O1xuICBwdWJsaWMgc3VwcG9ydGVkRmlsZXNUZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBzdXBwb3J0ZWRTaXplRmlsZXNUZXh0OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBlcnJvclRyYW5zbGF0ZXMgPSB7XG4gICAgZXM6ICdPY3VycmlvIHVuIGVycm9yIGFsIHN1YmlyIGVsIGFyY2hpdm8uIFBvciBmYXZvciBpbnRlbnRhIGRlIG51ZXZvLicsXG4gICAgZW46ICdUaGVyZSB3YXMgYW4gZXJyb3IgdXBsb2FkaW5nIHRoZSBmaWxlLiBQbGVhc2UgdHJ5IGFnYWluLicsXG4gICAgcHQ6ICdPY29ycmV1IHVtIGVycm8gYW8gZmF6ZXIgbyB1cGxvYWQgZG8gYXJxdWl2by4gUG9yIGZhdm9yIHRlbnRlIG5vdmFtZW50ZS4nXG4gIH07XG4gIHB1YmxpYyBlcnJvclRleHQ6IHN0cmluZztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1cHBvcnRlZEZpbGVzVGV4dCA9IHRoaXMuc3VwcG9ydGVkRmlsZXNUcmFuc2xhdGVzW3RoaXMuZm9ybXNTZXJ2aWNlLmdldExhbmcoKSB8fCAnZW4nXTtcbiAgICB0aGlzLnN1cHBvcnRlZFNpemVGaWxlc1RleHQgPSB0aGlzLnN1cHBvcnRlZFNpemVGaWxlc1RyYW5zbGF0ZXNbdGhpcy5mb3Jtc1NlcnZpY2UuZ2V0TGFuZygpIHx8ICdlbiddO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmZpZWxkLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZmllbGQuY29uZmlnLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gdGhpcy5maWVsZC5jb25maWcudmFsdWU7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZmllbGQuY29uZmlnLm1vZGVsXS5wYXRjaFZhbHVlKHRoaXMuZmllbGQuY29uZmlnLnZhbHVlKTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmllbGQuY29uZmlnLnJldHVybkZpbGUpIHtcbiAgICAgICAgdGhpcy5yZXR1cm5GaWxlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmV0dXJuRmlsZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5maWVsZC5jb25maWcuc2l6ZSkge1xuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uRmlsZUNoYW5nZSgkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGNvbnN0IGZpbGU6IEZpbGUgPSAkZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZS5uYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpWzFdO1xuICAgIHRoaXMuZmllbGQuY29uZmlnLnZhbHVlID0gZmlsZTtcblxuICAgIHRoaXMuc2l6ZSA9IGZpbGUuc2l6ZTtcblxuICAgIGlmICghdGhpcy52YWxpZEZpbGVUeXBlKGZpbGUpIHx8ICF0aGlzLnZhbGlkRmlsZVNpemUoKSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGZpbGUubmFtZS5tYXRjaCgvLihqcGd8anBlZ3xwbmd8Z2lmKSQvaSkpIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gZmlsZTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gZmlsZTtcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkQ2hhbmdlZC5lbWl0KHtmaWxlLCBtb2RlbDogdGhpcy5maWVsZC5jb25maWcubW9kZWx9KTtcblxuICAgIGlmICh0aGlzLnJldHVybkZpbGUpIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZmllbGQuY29uZmlnLm1vZGVsXS5wYXRjaFZhbHVlKGZpbGUpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2Nlc3NGaWxlKGZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0ZpbGUoZmlsZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmZpZWxkLmNvbmZpZy5hcGkudXJsO1xuICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuZmllbGQuY29uZmlnLmFwaS5tZXRob2Q7XG4gICAgY29uc3QgcGFyYW1OYW1lID0gdGhpcy5maWVsZC5jb25maWcuYXBpLmZpbGVQYXJhbU5hbWU7XG4gICAgdGhpcy5lcnJvclRleHQgPSBudWxsO1xuXG4gICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmZvcm1zU2VydmljZS51cGxvYWRGaWxlU2VydmljZXModXJsLCBtZXRob2QsIGZpbGUsIHBhcmFtTmFtZSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZmllbGQuY29uZmlnLm1vZGVsXS5wYXRjaFZhbHVlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZmllbGQuY29uZmlnLm1vZGVsXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gdXBsb2FkIHRoZSBpbWFnZS4gRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5lcnJvclRleHQgPSB0aGlzLmVycm9yVHJhbnNsYXRlc1t0aGlzLmZvcm1zU2VydmljZS5nZXRMYW5nKCkgfHwgJ2VuJ107XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0ucGF0Y2hWYWx1ZSgndW5hYmxlVG9VcGxvYWRGaWxlJyk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZpZWxkLmNvbmZpZy5tb2RlbF0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5maWVsZC5jb25maWcubW9kZWxdLnNldEVycm9ycyh7IHVuYWJsZVRvVXBsb2FkRmlsZTogdHJ1ZSB9KTtcbiAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9XG5cbiAgcHVibGljIHJldHVybkZpbGVTaXplKHNpemU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHNpemUgPCAxMDI0KSB7XG4gICAgICByZXR1cm4gc2l6ZSArICdieXRlcyc7XG4gICAgfSBlbHNlIGlmIChzaXplID49IDEwMjQgJiYgc2l6ZSA8IDEwNDg1NzYpIHtcbiAgICAgIHJldHVybiAoc2l6ZSAvIDEwMjQpLnRvRml4ZWQoMSkgKyAnS0InO1xuICAgIH0gZWxzZSBpZiAoc2l6ZSA+PSAxMDQ4NTc2KSB7XG4gICAgICByZXR1cm4gKHNpemUgLyAxMDQ4NTc2KS50b0ZpeGVkKDEpICsgJ01CJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdmFsaWRGaWxlU2l6ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZC5jb25maWcuc2l6ZSA8IHRoaXMuc2l6ZTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRGaWxlVHlwZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGQuY29uZmlnLmFjY2VwdC5yZXBsYWNlKC8gL2csICcnKS5zcGxpdCgnLCcpLmluY2x1ZGVzKGAuJHtmaWxlLnR5cGUuc3BsaXQoJy8nKVsxXX1gKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldEZpZWxkKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcbiAgfVxuXG59XG4iXX0=